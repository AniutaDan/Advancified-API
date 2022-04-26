const booksApi = require("../api/random.api");
const { expect, assert } = require("chai");
const should = require("chai").should();

describe("Random book", async function () {
  this.timeout(10000);

  it("Should get random book", async function () {
    // https://on.cypress.io/request
    const firstBook = await booksApi.getRandomBook();
    const secBook = await booksApi.getRandomBook();

    expect(firstBook).not.to.equal(secBook);
    assert.notEqual(firstBook, secBook);
    should.not.equal(firstBook, secBook)

    expect(firstBook.status).to.equal(200);
    assert.equal(firstBook.status, 200);
    should.equal(firstBook.status, 200)

    expect(secBook.status).to.equal(200);
    assert.equal(secBook.status, 200);
    should.equal(secBook.status, 200)
    // console.log(firstBook, secBook);
  });
});
