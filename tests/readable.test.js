const readable = require("../src/index.js");

test("Test if the format works as expected", () => {
  expect(typeof readable.formats).toBe("object");
  expect(readable.formats[0] === "").toBe(true);
  expect(readable.formats[1] === "K").toBe(true);

  expect(readable(1000)).toBe("1K");
  expect(readable(1111)).toBe("1.1K");
  expect(readable(1000000000)).toBe("1B");
});

test("Test if the parameters work as expected", () => {
  expect(readable(1111, 0)).toBe("1K");
  expect(readable(1111, 2)).toBe("1.11K");
  expect(readable(1111, 1, false)).toBe("1,111");
});

test("Test if the format change is as expected", () => {
  readable.setFormats(["", "A", "B", "C"]);
  expect(readable(1111)).toBe("1.1A");
  expect(readable(1000000000)).toBe("1C");
});
