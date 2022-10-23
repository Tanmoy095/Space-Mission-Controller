const request = require("supertest");
const { response } = require("../../app");
const app = require("../../app");

//test function decides each of our test cases,by describe function we describe our group of tests or test
describe("Test /GET/launches", () => {
  test("it should respond with 200 success", async () => {
    //supertest knows that we are making request to the get launches and result of this csall can be awaited
    const response = await request(app)
      .get("/launches")
      .expect("content-type", /json/)
      .expect(200);
  });
});
describe("Test /Post/launches", () => {
  const completeLaunchData = {
    mission: "Keplar Exploration aaaa",
    rocket: "Explorer IS11111",
    launchDate: "December 1,2030",
    target: "Keplar-442 b",
  };
  const launchDataWithoutDate = {
    mission: "Keplar Exploration aaaa",
    rocket: "Explorer IS11111",
    target: "Keplar-442 b",
  };
  const launchDataWithInvalidDate = {
    mission: "Keplar Exploration aaaa",
    rocket: "Explorer IS11111",
    target: "Keplar-442 b",
    launchDate: "jbhfhjbjhcfcjhvjhbkhj",
  };
  test("it should respond with 201 success", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect("content-type", /json/)
      .expect(201);
    const requestDate = new Date(launchDataWithoutDate.launchDate);
    const responsedate = new Date(response.body.launchDate);
    expect(response.body).toMatchObject(launchDataWithoutDate);
  });
  test("it should catch missing require properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithoutDate)
      .expect("content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Missing required launch property",
    });
  });
  test("it should catch invalid  dates", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithInvalidDate)
      .expect("content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Invalid Launch Date",
    });
  });
});
