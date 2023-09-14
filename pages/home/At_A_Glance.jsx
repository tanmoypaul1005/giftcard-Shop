import React, {useState, useRef} from 'react'
import { useTranslation } from 'react-i18next';
import { BsFillPlayFill } from 'react-icons/bs';

const At_A_Glance = () => {

    const vidRef = useRef(null);
    const [is_playing, setIsPlaying] = useState(false);
    const {t} = useTranslation();

    const handlePlayVideo = () => {
        if(vidRef.current) {
            vidRef.current.paused ? vidRef.current.play() : vidRef.current.pause();
            vidRef.current.paused ? setIsPlaying(false) : setIsPlaying(true);
        }
    }
    
    return ( 
        <div className='hidden md:block relative bg-[#001528] pb-10 h-96'>
            <div className='custom-container pt-10'>

                <div className='text-center mb-5'>
                    <div className='text-4xl font-bold text-white mb-5'>{t('At A Glance')}</div>
                </div>

                <div className="absolute top-[7.5rem] left-1/2 transform -translate-x-1/2 bg-gray-100 max-h-96 shadow overflow-hidden aspect-video cp rounded-md">
                    <video onClick={handlePlayVideo} className="w-full h-full" ref={vidRef}>
                        <source src="/Images/dummy/random-video.mp4" type="video/mp4"/>
                    </video>

                    {!is_playing && (
                        <div onClick={handlePlayVideo} className='absolute-center center h-16 w-16 bg-[#00000090] rounded-full'>
                            <BsFillPlayFill className='text-4xl text-white'/>
                        </div>
                    )}

                </div>

            </div>
        </div>
     );
}
 
export default At_A_Glance;