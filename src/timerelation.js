const moment = require('moment');

const TimeRange = require('./timerange');
const PeriodRelation = require('./periodrelation');

class TimeRelation {
	/**
	 *
	 * @param {TimeRange} timeRangeA
	 * @param {TimeRange} timeRangeB
	 */
	constructor(timeRangeA, timeRangeB) {
		this.timeRangeA = timeRangeA;
		this.timeRangeB = timeRangeB;
	}

	/**
	 *
	 * @return {PeriodRelation}
	 */
	getRelation() {
		// After
		if (
			this.timeRangeA.startTime.isAfter(this.timeRangeB.startTime) &&
			this.timeRangeA.startTime.isAfter(this.timeRangeB.endTime)
		) {
			return PeriodRelation.After;
		}

		// Start touching
		if (
			this.timeRangeA.startTime > this.timeRangeB.startTime &&
			this.timeRangeA.startTime.isSame(this.timeRangeB.endTime)
		) {
			return PeriodRelation.StartTouching;
		}

		// Start inside
		if (
			this.timeRangeA.startTime.isAfter(this.timeRangeB.startTime) &&
			this.timeRangeA.startTime.isBefore(this.timeRangeB.endTime) &&
			this.timeRangeA.endTime.isAfter(this.timeRangeB.endTime)
		) {
			return PeriodRelation.StartInside;
		}

		// Inside Start Touching
		if (
			this.timeRangeA.startTime.isSame(this.timeRangeB.startTime) &&
			this.timeRangeA.endTime.isBefore(this.timeRangeB.endTime)
		) {
			return PeriodRelation.InsideStartTouching;
		}

		// Enclosing Start Touching
		if (
			this.timeRangeA.startTime.isSame(this.timeRangeB.startTime) &&
			this.timeRangeA.endTime.isAfter(this.timeRangeB.endTime)
		) {
			return PeriodRelation.EnclosingStartTouching;
		}

		// Enclosing
		if (
			this.timeRangeA.startTime.isBefore(this.timeRangeB.startTime) &&
			this.timeRangeA.endTime.isAfter(this.timeRangeB.endTime)
		) {
			return PeriodRelation.Enclosing;
		}

		// Enclosing End Touching
		if (
			this.timeRangeA.startTime.isBefore(this.timeRangeB.startTime) &&
			this.timeRangeA.endTime.isSame(this.timeRangeB.endTime)
		) {
			return PeriodRelation.EnclosingEndTouching;
		}

		// Exact Match
		if (
			this.timeRangeA.startTime.isSame(this.timeRangeB.startTime) &&
			this.timeRangeA.endTime.isSame(this.timeRangeB.endTime)
		) {
			return PeriodRelation.ExactMatch;
		}

		// Inside
		if (
			this.timeRangeA.startTime.isAfter(this.timeRangeB.startTime) &&
			this.timeRangeA.endTime.isBefore(this.timeRangeB.endTime)
		) {
			return PeriodRelation.Inside;
		}

		// Inside End Touching
		if (
			this.timeRangeA.startTime.isAfter(this.timeRangeB.startTime) &&
			this.timeRangeA.endTime.isSame(this.timeRangeB.endTime)
		) {
			return PeriodRelation.InsideEndTouching;
		}

		// End Inside
		if (
			this.timeRangeA.startTime.isBefore(this.timeRangeB.startTime) &&
			this.timeRangeA.endTime.isAfter(this.timeRangeB.startTime) &&
			this.timeRangeA.endTime.isBefore(this.timeRangeB.endTime)
		) {
			return PeriodRelation.EndInside;
		}

		// End Touching
		if (
			this.timeRangeA.startTime.isBefore(this.timeRangeB.startTime) &&
			this.timeRangeA.endTime.isSame(this.timeRangeB.startTime) &&
			this.timeRangeA.endTime.isBefore(this.timeRangeB.endTime)
		) {
			return PeriodRelation.EndTouching;
		}

		// Before
		if (
			this.timeRangeA.startTime.isBefore(this.timeRangeB.startTime) &&
			this.timeRangeA.startTime.isBefore(this.timeRangeB.endTime)
		) {
			return PeriodRelation.Before;
		}
	}

	isOverlapped() {
		const theRelations = [
			PeriodRelation.StartInside,
			PeriodRelation.InsideStartTouching,
			PeriodRelation.EnclosingStartTouching,
			PeriodRelation.Enclosing,
			PeriodRelation.EnclosingEndTouching,
			PeriodRelation.ExactMatch,
			PeriodRelation.Inside,
			PeriodRelation.InsideEndTouching,
			PeriodRelation.EndInside,
		];

		const relation = this.getRelation();
		return theRelations.includes(relation);
	}

	hasInside() {
		const theRelations = [
			PeriodRelation.EnclosingStartTouching,
			PeriodRelation.Enclosing,
			PeriodRelation.EnclosingEndTouching,
			PeriodRelation.ExactMatch,
		];

		const relation = this.getRelation();
		return theRelations.includes(relation);
	}

	isSamePeriod() {
		const theRelations = [PeriodRelation.ExactMatch];

		const relation = this.getRelation();
		return theRelations.includes(relation);
	}
}

module.exports = TimeRelation;
