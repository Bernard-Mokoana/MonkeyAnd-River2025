import request from "supertest";
import app from "../app.js"; // your Express app
import mongoose from "mongoose"; // adjust path
import { user } from "../model/user.js";

describe("Authentication Flow", () => {
  const User = {
    name: "Bernard",
    email: "bernard@example.com",
    password: "Secure123!",
  };

  it("should register a user", async () => {
    const res = await request(app).post("/api/auth/register").send(User);

    expect(res.statusCode).toBe(201);
    expect(res.body.data.email).toBe(User.email);
  });

  it("should login a user", async () => {
    await new user(User).save();

    const res = await request(app).post("/api/auth/login").send({
      email: User.email,
      password: User.password,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
