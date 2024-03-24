import mongoose from "mongoose";
import app from "../../app";
import { CourseType, SubscriptionType, UserModelTypes } from "../../types/Types";
import request from "supertest"

type UserResponseT = {
  user : UserModelTypes
  subscription : SubscriptionType | null
  token : string
}

describe("Auth api", () => {

  let user : UserResponseT;

  afterAll(async()=>{
    await mongoose.disconnect();
  })

  it("POST /auth - Should return user that logged in", async () => {
    const res = await request(app).post(`/auth/login`).send({
      email : "instructor@gmail.com",
      password : "password",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("user");
    expect(res.body).toHaveProperty("subscription");
    expect(res.body).toHaveProperty("token");
    user = res.body; 
  })

  it("POST /auth - Should return user who get registred", async () => {
    const res = await request(app).post("/auth/register").send({
      firstName : `test`,
      lastName : `jest`,
      email : "test@gmail.com",
      password : "password",
      address : "amalou ighriben",
      phoneNumber : "06060606",
      role : "student"
    })
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("user");
    expect(res.body).toHaveProperty("token");
  })

  it("GET /users - Should return the user who is already logged", async () => {
    const res = await request(app).get("/auth/").set({
      Authorization : `Bearer ${user.token}`
    })
    expect(res.statusCode).toBe(201);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("user");
  })

})