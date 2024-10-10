import ImgProfile from "./common/ImgProfile";
import { FaPlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";

const CustomControls = ({ play, onPlayPause, onSeek, progress, fileName }) => {
  return (
    <div className="flex justify-between items-center w-full py-3 px-6 rounded-lg">
      <div className="flex items-center gap-3">
        <ImgProfile url={"url"} content={"ik"} />
        <h3 className="text-gray-800">{fileName}</h3>
      </div>
      <div>
        {play ? (
          <IoMdPause size={"1.25rem"} onClick={onPlayPause} />
        ) : (
          <FaPlay size={"1.25rem"} onClick={onPlayPause} />
        )}
      </div>
      <input
        hidden
        type="range"
        min={"0"}
        max={"100"}
        value={progress}
        onChange={(e) => onSeek(e.target.value)}
      />
    </div>
  );
};

export default CustomControls;
