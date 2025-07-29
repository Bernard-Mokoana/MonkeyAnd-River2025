const request = require("supertest");
import app from "../app.js";

describe("Monitored Destinations CRUD", () => {
  let id;

  it("should create a monitored destination", async () => {
    const res = await request(app).post("/api/destinations").send({
      location: "Cape Town",
      riskLevel: "Moderate",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.data.location).toBe("Cape Town");
    id = res.body.data._id;
  });

  it("should get all destinations", async () => {
    const res = await request(app).get("/api/destinations");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  it("should update a destination", async () => {
    const res = await request(app)
      .put(`/api/destinations/${id}`)
      .send({ riskLevel: "High" });

    expect(res.statusCode).toBe(200);
    expect(res.body.data.riskLevel).toBe("High");
  });

  it("should delete a destination", async () => {
    const res = await request(app).delete(`/api/destinations/${id}`);
    expect(res.statusCode).toBe(200);
  });
});
