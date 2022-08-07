import compose from '..'

test('compose', () => {
  const add = x => x + 2;
  const sqr = x => x ** 2;

  const blastOff = compose(
    x => `🚀 ${x} 🚀`,
    sqr,
    add
  );

  let result = blastOff(2);
  expect(result).toBe("🚀 16 🚀")
})
