const { format } = require("mysql2");
const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_date() retruns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
});

test('format_plural() correctly pluralizes words', () => {
    const word = "tiger";
    const word2 = "lion";
    const amount = 2;
    const amount2 = 1;

    expect(format_plural(word, amount)).toBe('tigers', 2);
    expect(format_plural(word2, amount2)).toBe('lion', 1);
});

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});