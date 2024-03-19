import { FaTrash } from "react-icons/fa6";
import CustomizedModal from "../CustomizedModal";
import { PlaylistT } from "../../types/Types";
import { useAppDispatch, useAppSelector } from "../../hook";
import { selectPlaylist, updatePlaylit } from "../../features/Playlist/PlaylistSlice";

const BasicTable = () => {

  const { modalVisibility, playlists, selectedPlaylist, formType } = useAppSelector(state => state.playlist)
  const dispatch = useAppDispatch();

  const handleSelectPlaylit = (playlist : PlaylistT) => {
    dispatch(updatePlaylit());
    dispatch(selectPlaylist(playlist));
  }

  return (
    <>
      <div className="my-4 bg-white rounded-lg p-4 shadow-[0px_0px_5px_0px] shadow-black/30">
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
                  Technologie
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="">
              {
                playlists && playlists?.map((playlist) => (
                  <tr onClick={() => handleSelectPlaylit(playlist)} key={playlist.id} className="border-b border-[#a7abb2] hover:bg-[#e9e9e9]">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap flex items-center ">
                      <img src={playlist.img} alt="" className="w-20 aspect-square object-contain" />
                      <div className="ps-3">
                        <div className="text-base font-semibold">{playlist.title}</div>
                        <div className="font-normal text-gray-500 break-word">{playlist.description}</div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      {playlist.videos.length}
                    </td>
                    <td className="px-6 py-4">
                      {playlist.date}
                    </td>
                    <td className="px-6 py-4 font-semibold">
                      {playlist.technologie}
                    </td>
                    <td className="px-6 gap-6">
                      {/* <button className="text-green-500">Edit</button> */}
                      <button className="text-red-500 flex items-center gap-2">
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <CustomizedModal
        isOpen={modalVisibility}
        playlist={selectedPlaylist!}
        formType={formType}
      />
    </>
  )
}

export default BasicTable