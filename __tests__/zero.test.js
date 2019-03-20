import { closeBrowser, goto, openBrowser, text } from "taiko";

beforeAll(async () => {
  await openBrowser()
})

afterAll(async () => {
  await closeBrowser()
})

test("Zero App render", async () => {
  await goto("http://localhost:5000")

  expect(await text("Hello Zero").exists()).toBeTruthy();
});
