const { Builder, By, Key } = require("selenium-webdriver");
//const assert = require("assert");

describe("add multiple tests", () => {
  it("adds an item to the list", async () => {
    const { expect } = await import("chai");
    // const chai = await import("chai");
    // const should = chai.should(); // Initialize 'should'

    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    // navigate to application
    await driver.get("http://localhost:3000");

    //add item to list - locators
    await driver
      .findElement(By.id("itemText"))
      .sendKeys("Sunglasses", Key.RETURN);

    //   Get item text added to the end of the list - for assertion
    let itemAdded = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText();

    //assert using node assertion (built-in)
    // assert.strictEqual(itemAdded, "1 Sunglasses\n❌");
    // assert(itemAdded.includes("Sunglasses"));

    //     assert using Chai expect
    expect(itemAdded).to.equal("1 Sunglasses\n❌");

    //     assert using Chai should
    //itemAdded.should.equal("1 Sunglasses\n❌");

    //   Close the browser
    await driver.quit();
  });
  it("adds 2 items to the list", async () => {
    const { expect } = await import("chai");

    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    // navigate to application
    await driver.get("http://localhost:3000");

    //add 2 items to list - locators
    await driver.findElement(By.id("quantitySelected")).sendKeys("2", Key.TAB);

    await driver.findElement(By.id("itemText")).sendKeys("Bikinis", Key.RETURN);

    //   Get item text added to the end of the list - for assertion
    let itemAdded = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText();

    //assert using node assertion (built-in)
    // assert.strictEqual(itemAdded, "2 Bikinis\n❌");
    // assert(itemAdded.includes("Bikinis"));

    //     assert using Chai expect
    expect(itemAdded).to.equal("2 Bikinis\n❌");

    //     assert using Chai should
    //itemAdded.should.equal("2 Bikinis\n❌");

    //   Close the browser
    await driver.quit();
  });
});
