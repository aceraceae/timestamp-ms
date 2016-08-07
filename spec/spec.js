describe("Time checking", function() {
  var checkTime = require('../checktime');

  it("should be able to process unix dates", function() {
     var isOk = true;

     var unixDates = [
         '1270850400',
         '1470610331',
         '889051930',
         '1007679130',
         '1234567890',
         '978455632',
         '1156784211',
         '1285432346',
         '1567380964',
         '777777777'
     ];

     var filtered = unixDates.filter(time => checkTime(time).unix === time);
     expect(filtered.length).toEqual(10);
  });

  it("should be able to process natural format dates", function() {

     var naturalDates = [
         '24 May 2010',
         '24-05-2010',
         'May 24 2010',
         '24 05 10',
         '24_05_10',
         'may 2010 24',
         '24-may-2010',
         '24.05.10',
         '2010 24 05',
         '24   may,    2010'
     ];

     var filtered = naturalDates.filter(time => checkTime(time).natural === '24 May 2010');
     expect(filtered.length).toEqual(10);
  });

});
