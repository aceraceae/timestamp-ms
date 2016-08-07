module.exports = {
    nonWord: /[\W\_]/i,
    word: /\w/i,
    day: (e,i) => (/\d/).test(e) && e.length < 3 && i !== 1,
    month: (e,i) => (/\D/).test(e) || Number(e) < 13 && i == 1,
    year: (e,i) => (/\d/).test(e) && e.length > 2,
    momentFormats: ['DD-MM-YYYY', 'DD-MMM-YYYY', 'DD-MMMM-YYYY'],
    format: "DD MMMM YYYY"
}
