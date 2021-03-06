'use strict';
var moment = require('moment');
var match = require('./regex-matches');

module.exports = function(time) {
    // regex tests
    var testInput = (match.nonWord).test(time);
    var testInput2 = (match.digits).test(time)
    var testInput3 = (match.word).test(time);
    // initialize object to return
    var timeObj = { unix: null, natural: null };

    if(testInput && testInput2) {
        var timeArr = time.split(match.nonWord).filter(i => i !== "");
        if(timeArr.length !== 3 ) {
            return timeObj;
        }
        var midDate = {};
        timeArr.forEach((e, i) => {
         var assigned = false;
         if(match.day(e,i) && !midDate.hasOwnProperty("day")  && !assigned) {
                midDate.day = e;
                assigned = true;
            }
         if(match.month(e,i) && !midDate.hasOwnProperty("month") && !assigned) {
                 midDate.month = e;
                 assigned = true;
             }
         if(match.year(e,i)  && !midDate.hasOwnProperty("year") && !assigned) {
                 midDate.year = e;
             }
        });
        timeObj.natural = moment(
            `${midDate.day}-${midDate.month}-${midDate.year}`,
             match.momentFormats)
             .format(match.format);

        timeObj.unix = new Date(timeObj.natural).getTime();
        timeObj.unix = Number(timeObj.unix)/1000;

    } else if(!testInput3 && Number(time)) {
       timeObj.unix = time;
       timeObj.natural = moment(new Date(time*1000)).format(match.format);
   }

   if(!moment(timeObj.natural, match.format).isValid()) {
       timeObj.natural = null;
       timeObj.unix = null;
   }

   return timeObj;

};
