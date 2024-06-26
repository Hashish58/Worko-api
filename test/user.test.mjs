import { expect } from "chai";
import request from "supertest";
import mongoose from "mongoose";
import app from "../src/app.js";

describe("User API", function () {
  this.timeout(30000); // Increase timeout to 30 seconds

  before(async function () {
    this.timeout(30000); // Increase timeout for before hook to 30 seconds
    try {
      await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      await mongoose.connection.db.dropDatabase(); // Ensure a clean slate
    } catch (err) {
      console.error("Connection error:", err);
      throw err;
    }
  });

  after(async function () {
    this.timeout(30000); // Increase timeout for after hook to 30 seconds
    try {
      await mongoose.disconnect();
    } catch (err) {
      console.error("Disconnection error:", err);
      throw err;
    }
  });

  it("should create a new user", async () => {
    const res = await request(app)
      .post("/api/worko/user")
      .send({
        email: "test@example.com",
        name: "Test User",
        age: 30,
        city: "Test City",
        zipCode: "12345",
      })
      .expect(201);

    expect(res.body).to.have.property("_id");
    expect(res.body.email).to.equal("test@example.com");
  });

  // Add more tests as needed
});
