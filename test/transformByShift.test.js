const transformByShift = require("../transformByShift");

const str = `This is secret. Message about "_" symbol!`;

test(`should be "Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!"`, () => {
  expect(transformByShift(str, 1, 1)).toBe(`Uijt jt tfdsfu. Nfttbhf bcpvu "_" tzncpm!`);
});

test(`should be "Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!"`, () => {
  expect(transformByShift(str, 0, 1)).toBe(`Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!`);
});

test(`should be "Bpqa qa amkzmb. Umaaiom ijwcb "_" agujwt!"`, () => {
  expect(transformByShift(str, 1, 8)).toBe(`Bpqa qa amkzmb. Umaaiom ijwcb "_" agujwt!`);
});

test(`should be "Lzak ak kwujwl. Ewkksyw stgml "_" kqetgd!"`, () => {
  expect(transformByShift(str, 0, 8)).toBe(`Lzak ak kwujwl. Ewkksyw stgml "_" kqetgd!`);
});
