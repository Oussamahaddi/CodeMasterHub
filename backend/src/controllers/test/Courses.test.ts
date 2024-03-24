import mongoose from "mongoose";
import app from "../../app";
import { CourseType, SubscriptionType, UserModelTypes } from "../../types/Types";
import request from "supertest"

type UserResponseT = {
  user : UserModelTypes
  subscription : SubscriptionType | null
  token : string
}

describe("Courses api", () => {

  let user : UserResponseT;

  beforeAll(async()=>{
    const res = await request(app).post('/auth/login').send({
      email: "instructor@gmail.com",
      password: "password"
    })
    user = res.body
  })

  afterAll(async()=>{
    await mongoose.disconnect();
  })

  let courseId:string;

  it("GET /courses - Should return all courses as array with instructors", async () => {
    const res = await request(app).get(`/courses`).set({ Authorization: `Bearer ${user.token}`});
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array<CourseType>);
  })

  it("GET /courses - Should return all courses of an instructor who create them", async () => {
    const res = await request(app).get(`/courses/instructor`).set({ Authorization: `Bearer ${user.token}`});
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array<CourseType>);
  })
  
  it("POST /courses - Should create new courses by intructor ", async () => {
    const res = await request(app).post("/courses").send({
      title : "Course for beginners",
      technologie : "React js / React Native",
      description : "test test test test",
      videos : ["1e93be3c-6185-4fe0-8763-c7329f1b824c.mp4", "1e93be3c-6185-4fe0-8763-c7329f1b824c.mp4"],
    }).set({Authorization: `Bearer ${user.token}`})
    expect(res.statusCode).toBe(201)
    expect(res.body).toHaveProperty("_id")
    courseId = res.body._id
  })


  it("PATCH /courses - Should update an course ", async () => {
    const res = await request(app).patch(`/courses/${courseId}`).send({
      title : "test update from jest",
      technologie : "React js / React Native",
      description : "test test",
      videos : ["1e93be3c-6185-4fe0-8763-c7329f1b824c.mp4"],
    }).set({ Authorization: `Bearer ${user.token}`});
    expect(res.statusCode).toBe(201)
    expect(res.body).toHaveProperty("_id")
  })

  it("DELETE /courses - Should delete an course ", async () => {
    const res = await request(app).delete(`/courses/${courseId}`).set({ Authorization: `Bearer ${user.token}`})
    expect(res.statusCode).toBe(201)
    expect(res.body).toHaveProperty("_id")
  })

})