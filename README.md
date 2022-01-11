## UNDER DEVELOPMENT

---

The library Time Period for handling periods of time. This library is inspired from
[Time Period Library for .NET](https://www.codeproject.com/Articles/168662/Time-Period-Library-for-NET)

## Install

[![npm version](https://badge.fury.io/js/datetime-period.svg)](https://www.npmjs.com/package/datetime-period)

`npm i datetime-period`

## Example

```js
const { TimeRange, TimeRelation } = require('datetime-period');

var timeRangeA = new TimeRange('2020-12-12 14:00:00', '2020-12-12 16:00:00');
var timeRangeB = new TimeRange('2020-12-12 09:00:00', '2020-12-12 11:00:00');
var timeRelation = new TimeRelation(timeRangeA, timeRangeB);
console.log('Relation :', timeRelation.getRelation(), ', Is Overlapped : ', timeRelation.isOverlapped());

/// Output:
/// Relation : After , Is Overlapped :  false
```

## Demo

`node tests/index.js`

![Time Period from Jani Giannoudis](https://www.codeproject.com/KB/datetime/TimePeriod/PeriodRelations.png)
