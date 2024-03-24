import request from "supertest"
import app from "../../app"
import { SubscriptionType, UserModelTypes } from "../../types/Types"
import mongoose from "mongoose"

type UserResponseT = {
  user : UserModelTypes
  subscription : SubscriptionType | null
  token : string
}

describe("Subscription api", () => {

  let user: UserResponseT;

  beforeAll(async() => {
    const res = await request(app).post("/auth/login").send({
      email : "instructor@gmail.com",
      password : "password",
    })
    user = res.body
  })

  afterAll(async() => {
    await mongoose.disconnect()
  })

  it("POST /subscribe - Should create new Subscription", async () => {
    const res = await request(app).post("/subscribe").send({
      type : "monthly"
    }).set({Authorization : `Bearer ${user.token}`});
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body).toHaveProperty("user");
  })

})