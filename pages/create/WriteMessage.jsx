import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactSparkle from 'react-sparkle';
import useCreateRequestStore from '../../app/stores/CreateCardStore';

const WriteMessage = ({ changeState }) => {
    const { create_card_form, setCreateCardForm, setCurrState } = useCreateRequestStore();

    const handleText = (e) => {
        if (e.target.value.length > 250) return;
        setCreateCardForm({ ...create_card_form, message: e.target.value })
    }
    const { t } = useTranslation();
    const [is_focus, setIsFocus] = useState(false);
    


    return (
        <div>
            <div className='text-center mb-5 mt-10'>
                <div className='text-2xl md:text-4xl font-bold text-[#211F32] mb-5'>{t('Write Your Message')}</div>
                <div className='max-w-2xl mx-5 md:mx-auto text-sm md:text-base'>{t('Write Addition Message You Want to Put')}</div>
            </div>


            <div className="lg:max-w-4xl mx-5 lg:mx-auto relative">

                <div className="bg-white shadow rounded-lg">
                    <textarea onFocusCapture={(e) => {
                        console.log('focus');
                        setIsFocus(true);
                    }}  onBlur={() => {console.log('not focus'); setIsFocus(false)} } onChange={handleText} value={create_card_form.message} className="h-full w-full resize-none rounded-md outline-none p-5" rows="6" cols="50" placeholder={t("Write here...") + `(${t('optional')})`}>

                    </textarea>
                    <div className='text-right'>{create_card_form?.message?.length}/250</div>
                    
                    {is_focus && <div className='absolute w-full h-full top-10'>

                        <ReactSparkle
                            // The color of the sparkles. Can be a color, an array of colors,
                            // or 'random' (which will randomly pick from all hex colors).
                            color={['#FB607F', '#FDB9C8', "#FFF1F1", '#FD8BA2']}

                            // The number of sparkles to render. A large number could slow
                            // down the page.
                            count={30}

                            // The minimum and maximum diameter of sparkles, in pixels.
                            minSize={5}
                            maxSize={12}

                            // The number of pixels the sparkles should extend beyond the
                            // bounds of the parent element.
                            overflowPx={0}

                            // How quickly sparkles disappear; in other words, how quickly
                            // new sparkles are created. Should be between 0 and 1000,
                            // with 0 never fading sparkles out and 1000 immediately
                            // removing sparkles. Most meaningful speeds are between
                            // 0 and 150.
                            fadeOutSpeed={5}

                            // Whether we should create an entirely new sparkle when one
                            // fades out. If false, we'll just reset the opacity, keeping
                            // all other attributes of the sparkle the same.
                            newSparkleOnFadeOut={true}

                            // Whether sparkles should have a "flickering" effect.
                            flicker={true}

                            // How quickly the "flickering" should happen.
                            // One of: 'slowest', 'slower', 'slow', 'normal', 'fast', 'faster', 'fastest'
                            flickerSpeed={'slowest'}
                        />
                    </div>}
                </div>

            </div>

            <div className="x-center mt-10">
                <button onClick={() => setCurrState('upload_image')} className="mx-auto px-12 py-2 bg-white hover:bg-gray-600 text-gray-600 hover:text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow">
                    {t('Back')}
                </button>
                <button onClick={() => changeState('next')} className="mx-auto px-12 py-2 bg-cBrand text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow">
                    {t('Next')}
                </button>
            </div>
        </div>
    );
}

export default WriteMessage;