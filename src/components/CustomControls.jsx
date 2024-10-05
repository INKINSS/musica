import ImgProfile from "./common/ImgProfile";
import { FaPlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";

const CustomControls = ({ play, onPlayPause, onSeek, progress }) => {
  return (
    <div className="flex justify-between items-center w-full py-3 px-6 shadow-custom rounded-lg">
      <ImgProfile url={'url'} content={'ik'} />
      <div>
        {play ? (
          <IoMdPause size={'1.25rem'} onClick={onPlayPause} />
        ) : (
          <FaPlay size={'1.25rem'} onClick={onPlayPause} />
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
