const uppercase = require('./exercise01');

it('Test function uppercase', (done) => {
  expect.assertions(1);
  uppercase('abcde', (word) => {
    expect(word).toEqual('ABCDE');
    done();
  });
});