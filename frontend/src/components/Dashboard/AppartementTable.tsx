import ReactPlayer from "react-player"
import { FaTrash } from "react-icons/fa6";

const BasicTable = () => {

  return (
    <>
      <div>
        <div className="my-4 bg-white rounded-lg p-4 shadow-[0_0_5px_0px] shadow-black/30">
          <div className="p-4 text-xl font-semibold ">
            <p>Playlist Table</p>
          </div>
          <div className="relative overflow-x-auto">
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
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="border-b border-[#a7abb2] hover:bg-[#e9e9e9]">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap flex items-center ">
                    <ReactPlayer url={'/assets/videos/video.mp4'} width={'100px'} height={'70px'}  light style={{background : 'black'}}/>
                    <div className="ps-3">
                      <div className="text-base font-semibold">Video title </div>
                      <div className="font-normal text-gray-500 break-word">video description that has anything that instructor wanna tell to the students for example</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    24
                  </td>
                  <td className="px-6 py-4">
                    2020-11-23
                  </td>
                  <td className="px-6 gap-6">
                    {/* <button className="text-green-500">Edit</button> */}
                    <button className="text-red-500 flex items-center gap-2">
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-[#a7abb2] hover:bg-[#e9e9e9]">
                  <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap flex items-center ">
                    <ReactPlayer url={'/assets/videos/video.mp4'} width={'100px'} height={'70px'}  light style={{background : 'black'}}/>
                    <div className="ps-3">
                      <div className="text-base font-semibold">Video title </div>
                      <div className="font-normal text-gray-500 break-word">video description that has anything that instructor wanna tell to the students for example</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    24
                  </td>
                  <td className="px-6 py-4">
                    2020-11-23
                  </td>
                  <td className="px-6 gap-6">
                    {/* <button className="text-green-500">Edit</button> */}
                    <button className="text-red-500 flex items-center gap-2">
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default BasicTable