var moment = require('moment');

module.exports = function(time) {
    var date = new Date(Number(time));
    var date2 = moment(date.toString(), "MMMM-DD-YYYY");
    console.log(date);
        //return { unix: null, normal: null};
        console.log(date2);
        return { unix: time, normal: date2};

};
