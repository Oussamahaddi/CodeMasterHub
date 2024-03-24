import { FaTrash } from "react-icons/fa6";
import CustomizedModal from "../CustomizedModal";
import { CoursesT } from "../../types/Types";
import { useAppDispatch, useAppSelector } from "../../hook";
import { selectPlaylist, updatePlaylit } from "../../features/Courses/CourseSlice";
import { useEffect } from "react";
import { deleteCourseThunk, fetchAllCoursesbyInstructor } from "../../features/Courses/CourseApi";
import ReactPlayer from "react-player";
import LoadingSpinner from "../LoadingSpin";

const BasicTable = () => {

  const { modalVisibility, selectedCourse, formType, loading, instructorCourses } = useAppSelector(state => state.courses)
  const dispatch = useAppDispatch();

  const handleSelectPlaylit = (playlist : CoursesT) => {
    dispatch(updatePlaylit());
    dispatch(selectPlaylist(playlist));
  }

  useEffect(() => {
    dispatch(fetchAllCoursesbyInstructor());
  }, [dispatch])

  return (
    <>
      <div className="my-4 bg-white rounded-lg p-4 shadow-[0px_0px_5px_0px] shadow-black/30">
        <div className="p-4 text-xl font-semibold ">
          <p>Playlist Table</p>
        </div>
        {loading && <LoadingSpinner />}
        <div className="relative overflow-x-auto">
          {
            instructorCourses.length > 0 ?
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase text-[#555a61]">
                <tr className="border-b border-[#a0a4ab]">
                  <th scope="col" className="px-6 py-3">
                    Playlist
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Number Videos
                  </th>
                  <th scope="col" className="px-6 py-3">
                    DATE
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Technologie
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {
                  instructorCourses && instructorCourses?.map((course) => (
                    <tr onDoubleClick={() => handleSelectPlaylit(course)} key={course._id} className="border-b border-[#dedddd] hover:bg-[#e9e9e9]">
                      <td className="px-6 py-4 font-medium whitespace-nowrap flex items-center mx-w-[300px]">
                        <ReactPlayer url={course.videos[0]} width={'120px'} height={'70px'} className="w-20 aspect-square object-contain" />
                        <div className="ps-3">
                          <div className="text-base font-semibold">{course.title}</div>
                          <p className="text-ellipsis font-normal text-gray-500 break-word max-w-[300px] overflow-hidden">{course.description}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {course.videos.length}
                      </td>
                      <td className="px-6 py-4">
                        {String(course.createdAt).slice(0,10)}
                      </td>
                      <td className="px-6 py-4 font-semibold">
                        {course.technologie}
                      </td>
                      <td className="px-6 gap-6">
                        {/* <button className="text-green-500">Edit</button> */}
                        <button onClick={() => dispatch(deleteCourseThunk(course._id!))} className="text-red-500 flex items-center gap-2">
                          <FaTrash /> Delete
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table> : 
            <div className="p-4">No course Found, create your own course</div>
          }
        </div>
      </div>
      <CustomizedModal
        isOpen={modalVisibility}
        course={selectedCourse!}
        formType={formType}
      />
    </>
  )
}

export default BasicTable