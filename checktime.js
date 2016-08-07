var moment = require('moment');

module.exports = function(time) {
    var testInput = (/w/i).test(time);


    var timeArr = time.split(/[\W\_]/).filter(i => i !== "");
    var dateToConcat = {};

    dateToConcat.day = timeArr.filter((e, idx) => {
        return (/\d/).test(e) && e.length < 3 && idx !== 1;
    })[0];
    dateToConcat.month = timeArr.filter((e, idx) => {
        return (/\D/).test(e) || Number(e) < 13 && idx == 1;
    })[0];
    dateToConcat.year = timeArr.filter(e => {
        return (/\d/).test(e) && e.length > 2;
    })[0];


    var natural = moment(
        `${dateToConcat.day}-${dateToConcat.month}-${dateToConcat.year}`,
        ['DD-MM-YYYY', 'DD-MMM-YYYY', 'DD-MMMM-YYYY'])
        .format("DD MMMM YYYY");
    var unix = new Date(natural).getTime();
    //var natural = null;
     /*
    if(testInput) {
        natural = moment(time).format("MMMM-DD-YYYY");
        unix = new Date(natural).getTime();
        var unixTime = Number(unix)/1000;
        console.log(unixTime);
    } else {
        unix =
        natural = moment(new Date(time*1000)).format("MMMM-DD-YYYY");
    }
     */
    //var date2 = moment(date.toString(), "MMMM-DD-YYYY");
    console.log(timeArr);
    console.log(dateToConcat);
    //console.log(date2);
    return { unix, natural };

};
