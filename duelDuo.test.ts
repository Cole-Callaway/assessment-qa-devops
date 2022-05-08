import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

test("draw button draws the robots cards", async () => {
  const drawInput = await driver.findElement(By.id("draw"));

  drawInput.click();

  await driver.sleep(1000);

  const choices = await driver.findElement(By.id("choices"));

  const displayed = await choices.isDisplayed();

  expect(displayed).toBeTruthy();
});

test("Your duo appears when you select your robots", async () => {
  const drawInput = await driver.findElement(By.id("draw"));

  drawInput.click();

  await driver.sleep(1000);

  const roboBtn = await driver.findElement(By.xpath("//button"));

  roboBtn.click();

  await driver.sleep(1000);

  const playerDuo = await driver.findElement(By.id("player-duo"));

  const displayed = await playerDuo.isDisplayed();

  await driver.sleep(6000);

  expect(displayed).toBeTruthy();
});
