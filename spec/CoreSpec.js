var shaWithNumber = '6992969c3055f495a824f924dd4232b4aa30f905';
var shaWithOutNumber = '4b92cef07851467e97c250cd0d5e9afcc0d9822c';

describe("A commit sha with a number at the end", function() {
  it("gets a class with color light blue", function() {
    expect(getCorrectColorClassForSha(shaWithNumber)).toBe('lightBlue');
  });
});

describe("A commit sha with a character at the end", function() {
  it("gets a class with color dark blue", function() {
    expect(getCorrectColorClassForSha(shaWithOutNumber)).toBe('darkBlue');
  });
});
