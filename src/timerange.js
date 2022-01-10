const moment = require('moment');

class TimeRange {
	/**
	 *
	 * @param {Date} startTime
	 * @param {Date} endTime
	 */
	constructor(startTime, endTime) {
		this.startTime = moment(startTime);
		this.endTime = moment(endTime);
	}

	/**
	 *
	 * @param {TimeRange} timeRangeB
	 * @return {Boolean}
	 */
	overlapsWith(timeRangeB) {
		const TimeRelation = require('./timerelation');
		const relation = new TimeRelation(this, timeRangeB);
		return relation.isOverlapped();
	}
}

module.exports = TimeRange;
