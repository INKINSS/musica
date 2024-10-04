import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { getDownloadURL, ref } from 'firebase/storage'
import storage from '../../firebaseConfig'

const AudioPlayerBar = () => {

    const [audioUrl, setAudioUrl] = useState('')

    useEffect(() => {
        const fetchMusicUrl = async () => {
            try {
                const musicRef = ref(storage, 'gs://appmusic-a466c.appspot.com/Julieta Venegas/Eres para mi - Julieta Venegas.mp3')
                const url = await getDownloadURL(musicRef);
                setAudioUrl(url)
            } catch (error) {
                console.log("error" + error)
            }
        }
        fetchMusicUrl()
    }, [])
    

  return (
    <div className='fixed bottom-20 w-full flex justify-center'>
      {audioUrl ? (
        <ReactPlayer className='bg-red-300' height={'3rem'} width={'80%'} url={audioUrl} playing controls />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default AudioPlayerBar