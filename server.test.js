const request = require("supertest");
const app = require("./server");

describe("GET / ", () => {
    test("It should respond with an array of bookings", async () => {
      const response = await request(app).get("/bookings");
      expect(response.body).toEqual(expect.any(Array));
      expect(response.statusCode).toBe(200);
    });
});
  
describe("POST /", () => {
    test("It should create a booking in mongoDB table", async () => {
        const response = await request(app).get("/bookings");
        const bookingsLength = response.body.length;
        const newBooking = await request(app)
            .post("/book")
            .send({
                station: "Broklehurst",
                returnStation: "Ivelhurst",
                train: "Victor",
                returnTrain: "Nancy",
                hours: "10",
                minutes: "30",
                returnHours: "12",
                returnMinutes: "00",
                combinedDate: "10:30",
                combinedReturnDate: "12:00",
        });

         // make sure we have one more booking now 
        const newResponse = await request(app).get("/bookings");
        expect(newResponse.body.length).toBe(bookingsLength + 1);
    })
})

describe("GET / ", () => {
    test("It should respond with an array of users", async () => {
      const response = await request(app).get("/users");
      expect(response.body).toEqual(expect.any(Array));
      expect(response.statusCode).toBe(200);
    });
});

describe("POST /", () => {
    test("It should create a user in mongoDB table", async () => {
        const response = await request(app).get("/users");
        const usersLength = response.body.length;
        await request(app)
            .post("/user")
            .send({
                username: "User123",
                password: "Password123",
            });

         // make sure we have one more user now 
        const newResponse = await request(app).get("/users");
        expect(newResponse.body.length).toBe(usersLength + 1);
    })
})
