const cjs1 = require('./cjs1');

(async () => {
  let math = await import('./math.mjs');
  console.log(math.sum(1, 2));
  cjs1.hello();
})();
