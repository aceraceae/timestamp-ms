var moment = require('moment');
var match = require('./regexMatches');

module.exports = function(time) {
    // regex tests
    var testInput = (match.nonWord).test(time);
    var testInput2 = (match.word).test(time);
    // initialize object to return
    var timeObj = { unix: null, natural: null };

    if(testInput) {
        var timeArr = time.split(match.nonWord).filter(i => i !== "");
        var midDate = {};
// wpisać dzień na srodku, rok dwucyrfowo
        timeArr.forEach((e, i) => {
         if(match.day(e,i))
                midDate.day = e;
         if(match.month(e,i))
                 midDate.month = e;
         if(match.year(e,i))
                 midDate.year = e;
        });

        timeObj.natural = moment(
            `${midDate.day}-${midDate.month}-${midDate.year}`,
             match.momentFormats)
             .format(match.format);

        timeObj.unix = new Date(timeObj.natural).getTime();
        timeObj.unix = Number(timeObj.unix)/1000;

    } else if(!testInput2) {
       timeObj.unix = time;
       timeObj.natural = moment(new Date(time*1000)).format(match.format);
   }

   return timeObj;

};
