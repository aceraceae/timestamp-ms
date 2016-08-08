module.exports = {
    nonWord: /[\W\_]/i,
    word: /[a-z]/i,
    digits: /[0-9]/,
    day: (e,i) => (/\d/).test(e) && Number(e) < 32,
    month: (e,i) => (/\D/).test(e) || Number(e) < 13 || (/\D/).test(e) && i == 0,
    year: (e,i) => (/\d/).test(e) && e.length < 5 && e.length > 1,
    momentFormats: ['DD-MM-YYYY', 'DD-MMM-YYYY', 'DD-MMMM-YYYY', 'DD-MM-YY'],
    format: "DD MMMM YYYY"
}
