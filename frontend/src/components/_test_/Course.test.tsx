import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { CoursesT } from "../../types/Types"
import Course from "../Courses/Course"
import { BrowserRouter } from "react-router-dom";

describe('Course component', () => {
  const course : CoursesT = {
    _id : "66005a2f46a9b9be3a967f14",
    title : "Rem harum minus reru",
    description :"Officiis non fuga C Officiis non fuga C Officiis non fuga C",
    technologie :"React JS",
    videos : [
      "http://localhost:5000/uploads/0e13292c-6230-4236-b75d-055c22c50f4b.mp4",
      "http://localhost:5000/uploads/6ed99e80-505a-4678-a433-e32f52b51371.mp4",
      "http://localhost:5000/uploads/f4e26c4d-a533-401d-ac43-92ab8b364b76.mp4",
      "http://localhost:5000/uploads/dc872b3a-adae-4209-8702-ad24fdcac4ae.mp4",
      "http://localhost:5000/uploads/4a73af48-ed1c-4daa-9424-0d7284a2032a.mp4"
    ],
    user : {
      _id: "65fc3b57b4cef92c6a7d8b1e",
      fullName: "Lunea Hodge",
      address: "Maxime inventore aut",
      email: "instructor@gmail.com",
      phoneNumber: "+1 (487) 267-4899",
      role: "instructor",
    },
    createdAt : "2024-03-24T16:51:59.955+00:00",
  }

  test('renders course information correctly', () => {
    render(
      <BrowserRouter>
        <Course course={course} />
      </BrowserRouter>
    );

    const titleElement = screen.getByText(course.description);
    expect(titleElement).toBeInTheDocument();

    const instructorElement = screen.getByText(course.user.fullName);
    expect(instructorElement).toBeInTheDocument();

  });
});
