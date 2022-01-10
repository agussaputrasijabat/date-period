const { TimeRange, TimeRelation } = require('../src');

var timeRangeA = new TimeRange('2020-12-12 14:00:00', '2020-12-12 16:00:00');
var timeRangeB = new TimeRange('2020-12-12 09:00:00', '2020-12-12 11:00:00');
var timeRelation = new TimeRelation(timeRangeA, timeRangeB);
console.log('After :', timeRelation.getRelation());

timeRangeA = new TimeRange('2020-12-12 14:00:00', '2020-12-12 16:00:00');
timeRangeB = new TimeRange('2020-12-12 09:00:00', '2020-12-12 14:00:00');
timeRelation = new TimeRelation(timeRangeA, timeRangeB);
console.log('Start Touching :', timeRelation.getRelation(), ', Is Overlapped : ', timeRelation.isOverlapped());

timeRangeA = new TimeRange('2020-12-12 14:00:00', '2020-12-12 16:00:00');
timeRangeB = new TimeRange('2020-12-12 09:00:00', '2020-12-12 14:30:00');
timeRelation = new TimeRelation(timeRangeA, timeRangeB);
console.log('Start Inside :', timeRelation.getRelation(), ', Is Overlapped : ', timeRelation.isOverlapped());

timeRangeA = new TimeRange('2020-12-12 14:00:00', '2020-12-12 16:00:00');
timeRangeB = new TimeRange('2020-12-12 14:00:00', '2020-12-12 18:00:00');
timeRelation = new TimeRelation(timeRangeA, timeRangeB);
console.log('Inside Start Touching :', timeRelation.getRelation(), ', Is Overlapped : ', timeRelation.isOverlapped());

timeRangeA = new TimeRange('2020-12-12 14:00:00', '2020-12-12 16:00:00');
timeRangeB = new TimeRange('2020-12-12 14:00:00', '2020-12-12 15:00:00');
timeRelation = new TimeRelation(timeRangeA, timeRangeB);
console.log(
	'Enclosing Start Touching :',
	timeRelation.getRelation(),
	', Is Overlapped : ',
	timeRelation.isOverlapped()
);

timeRangeA = new TimeRange('2020-12-12 14:00:00', '2020-12-12 16:00:00');
timeRangeB = new TimeRange('2020-12-12 14:30:00', '2020-12-12 15:00:00');
timeRelation = new TimeRelation(timeRangeA, timeRangeB);
console.log('Enclosing :', timeRelation.getRelation(), ', Is Overlapped : ', timeRelation.isOverlapped());

timeRangeA = new TimeRange('2020-12-12 14:00:00', '2020-12-12 16:00:00');
timeRangeB = new TimeRange('2020-12-12 14:30:00', '2020-12-12 16:00:00');
timeRelation = new TimeRelation(timeRangeA, timeRangeB);
console.log('Enclosing End Touching :', timeRelation.getRelation(), ', Is Overlapped : ', timeRelation.isOverlapped());

timeRangeA = new TimeRange('2020-12-12 14:00:00', '2020-12-12 16:00:00');
timeRangeB = new TimeRange('2020-12-12 14:00:00', '2020-12-12 16:00:00');
timeRelation = new TimeRelation(timeRangeA, timeRangeB);
console.log('Exact Match :', timeRelation.getRelation(), ', Is Overlapped : ', timeRelation.isOverlapped());

timeRangeA = new TimeRange('2020-12-12 14:00:00', '2020-12-12 16:00:00');
timeRangeB = new TimeRange('2020-12-12 13:00:00', '2020-12-12 17:00:00');
timeRelation = new TimeRelation(timeRangeA, timeRangeB);
console.log('Inside :', timeRelation.getRelation(), ', Is Overlapped : ', timeRelation.isOverlapped());

timeRangeA = new TimeRange('2020-12-12 14:00:00', '2020-12-12 16:00:00');
timeRangeB = new TimeRange('2020-12-12 13:00:00', '2020-12-12 16:00:00');
timeRelation = new TimeRelation(timeRangeA, timeRangeB);
console.log('Inside End Touching:', timeRelation.getRelation(), ', Is Overlapped : ', timeRelation.isOverlapped());

timeRangeA = new TimeRange('2020-12-12 14:00:00', '2020-12-12 16:00:00');
timeRangeB = new TimeRange('2020-12-12 15:00:00', '2020-12-12 18:00:00');
timeRelation = new TimeRelation(timeRangeA, timeRangeB);
console.log('End Inside:', timeRelation.getRelation(), ', Is Overlapped : ', timeRelation.isOverlapped());

timeRangeA = new TimeRange('2020-12-12 14:00:00', '2020-12-12 16:00:00');
timeRangeB = new TimeRange('2020-12-12 16:00:00', '2020-12-12 18:00:00');
timeRelation = new TimeRelation(timeRangeA, timeRangeB);
console.log('End Touching:', timeRelation.getRelation(), ', Is Overlapped : ', timeRelation.isOverlapped());

timeRangeA = new TimeRange('2020-12-12 14:00:00', '2020-12-12 16:00:00');
timeRangeB = new TimeRange('2020-12-12 16:30:00', '2020-12-12 18:00:00');
timeRelation = new TimeRelation(timeRangeA, timeRangeB);
console.log('Before:', timeRelation.getRelation(), ', Is Overlapped : ', timeRelation.isOverlapped());
