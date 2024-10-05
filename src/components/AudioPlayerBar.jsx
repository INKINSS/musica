import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { getDownloadURL, ref } from "firebase/storage";
import storage from "../../firebaseConfig";
import { useRef } from "react";
import CustomControls from "./CustomControls";
import { removeFileExtension } from '../utils/RemoveFileExtension'

const AudioPlayerBar = () => {
  const [audioUrl, setAudioUrl] = useState("");
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const playerRef = useRef(null);
  const [fileName, setFileName] = useState('')


  useEffect(() => {
    const fetchMusicUrl = async () => {
      try {
        const musicRef = ref(
          storage,
          "gs://appmusic-a466c.appspot.com/Hits/Secrets.mp3"
        );
        const url = await getDownloadURL(musicRef);
        setAudioUrl(url);
        setFileName(removeFileExtension(musicRef.name))
      } catch (error) {
        console.log("error" + error);
      }
    };
    fetchMusicUrl();
  }, []);

  const handlePlay = () => {
    setPlaying(!playing)
  }

  const handleSeek = (value) => {
    playerRef.current.seekTo(value)
  }

  const handleProgress = (state) => {
    setProgress((state.played*100).toFixed(2));
  }

  return (
    <div className="fixed bottom-24 w-full flex justify-center">
      {audioUrl ? (
        <div className="w-[80%]">
        <ReactPlayer
          className="bg-red-300"
          height={"0"}
          loop
          width={"0"}
          url={audioUrl}
          playing={playing}
          controls
          ref={playerRef}
          onProgress={handleProgress}
          config={{
            file: {
              attributes: {
                controlsList: "nodownload",
              }
            },
          }}
        />
        <CustomControls
          play={playing}
          onPlayPause={handlePlay}
          onSeek={handleSeek}
          progress={progress}
          fileName={fileName}
        />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AudioPlayerBar;
