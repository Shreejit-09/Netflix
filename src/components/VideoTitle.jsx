import { IoMdPlay } from "react-icons/io";
import { BsExclamationCircle } from 'react-icons/bs';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className = "pt-[20%] px-[5%] w-screen aspect-video absolute top-0 left-0 -z-10 inset-0 bg-gradient-to-r from-black">
      <p className = "text-6xl font-bold m-4 text-white">{title}</p><p className = "text-xl mx-4 w-1/3 pb-10 text-white">{overview}</p>
      <div className="flex gap-2 text-lg w-1/4">
        <button className = "bg-white text-black flex items-center mx-4 px-7 p-2 gap-2 rounded-md text-center hover:bg-opacity-80"><IoMdPlay/>Play</button>
        <button className = "bg-gray-500 bg-opacity-50 text-white flex items-center px-7 p-2 rounded-md text-center gap-2 w-auto hover:bg-gray-500"><BsExclamationCircle/>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;
