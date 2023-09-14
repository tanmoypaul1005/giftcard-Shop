import Image from 'next/image'
import react, { useState, useEffect, useRef } from 'react'
import { FiUploadCloud } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'
import { JAPANESE_TEXT } from '../../components/Utilities/Sources'
import { getBase64 } from '../../app/stores/UtilityStore'
import useCreateRequestStore from '../../app/stores/CreateCardStore'
import { useTranslation } from 'react-i18next';

const UploadImage = ({ changeState }) => {

    const [is_uploaded, setIsUploaded] = useState(false);
    const [is_edit_text, setIsEditText] = useState(false);
    const [text, setText] = useState('あ');
    const { create_card_form, setCreateCardForm } = useCreateRequestStore();

    const inputRef = useRef(null);
    const inputFile = useRef(null);
    const { t } = useTranslation();

    const uploadImage = () => {
        // setIsUploaded(!is_uploaded);
        inputFile.current.click()
    }

    const goToEditMode = () => {
        setIsEditText(true)
    }

    const updateText = () => {
        setIsEditText(false)
    }

    useEffect(() => {
        if (is_edit_text) {
            inputRef.current?.focus()
        }
    }, [is_edit_text]);

    useEffect(() => {
        create_card_form.text_image ? setIsUploaded(true) : setIsUploaded(false);
    }, [create_card_form.text_image])



    return (
        <div className='max-w-2xl mx-auto'>
            <div className='text-center mb-5 mt-10'>
                <div className='text-2xl md:text-4xl font-bold text-[#211F32] mb-5'>{t('Create Your Card')}</div>
                <div className='max-w-2xl mx-5 md:mx-auto text-sm md:text-base text-left'>
                    <p>*{t('You can')} <strong>{t('upload image')}</strong> {t('to bring out your desire text from that image. Also you can')} <strong>{t('edit that text')}</strong> {t('as well')}</p>

                    <p className='my-2'>*{t('Or you can')} <strong>{t('Skip')}</strong> {t('uploading image and')} <strong>{t('put some text')}</strong>.</p>
                    <p>*{t('Maximum')} <strong>{t('10 MB')}</strong> {t('file accepted')}.</p>
                    <p>- {("You are an amazing friend, and I'm so grateful for you.")}</p>
                    <p>- {("おめでとうございます！あなたの成し遂げたことに心から敬意を表します.")}</p>
                    <p>- {("সফলতার জন্য অভিনন্দন - তুমি সব সফলতা পাওয়ার যোগ্য।")}</p>
                    <p>- {("祝贺你的成就 - 你值得所有的成功!")}</p>

                </div>
            </div>

            {!is_uploaded && (
                <div className="h-[13rem] md:h-[24rem] bg-white border-dashed border-2 border-gray-300 rounded-lg center mb-10 mx-7 md:mx-0">
                    <div className="x-center flex-col">
                        <FiUploadCloud className="text-gray-600 text-5xl mb-5" />
                        <div className="hidden md:block text-gray-600 mb-5 font-semibold">{t('Select a image')}</div>
                        <button onClick={uploadImage} className="px-4 md:px-6 py-3 md:py-4 border border-gray-600 bg-white hover:bg-gray-600 text-gray-600 hover:text-white transition-all ease-in rounded-lg text-sm font-medium focus:outline-none">
                            <span className="hidden md:block">{t('SELECT FILE')}</span>
                            <span className="block md:hidden">{t('Upload Image')}</span>
                        </button>
                    </div>

                    <input onChange={(e) => {
                        getBase64(e.target.files[0], (result) => {
                            // console.log('result', result);
                            setCreateCardForm({ ...create_card_form, text_image: result })
                        })
                    }}
                        type='file' id='file' ref={inputFile} style={{ display: 'none' }} accept="image/*" />
                </div>
            )}

            {is_uploaded && (
                <div className="grid grid-cols-1 md:grid-cols-1 gap-5 md:gap-10 mb-10 mx-7 md:mx-0">
                    <div className="relative h-[16rem] sm:h-[20rem] md:h-[18rem] bg-white border-dashed border-2 border-gray-300 rounded-lg">
                        <CgClose onClick={() => setCreateCardForm({ ...create_card_form, text_image: null })} className='absolute-right-top text-2xl text-gray-700 m-2 cp' />
                        <div className='flex flex-col items-center h-full overflow-hidden'>
                            <div className='flex-none font-semibold text-center my-5'>{t('Image Uploaded')}</div>
                            <div className='flex-1 w-full px-5'>
                                <div className='relative h-48 w-full'>
                                    <div className="h-full w-full relative rounded-lg overflow-hidden">
                                        <Image className="h-auto" src={create_card_form?.text_image ?? JAPANESE_TEXT} alt="Post Card Image" layout="fill" objectFit="contain" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )}

            <div className="x-center mt-10">
                {!is_uploaded && (
                    <button onClick={() => changeState('next')} className="mx-auto px-12 py-2 bg-cBrand text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow">
                        {t('Skip & Next')}
                    </button>
                )}
                {is_uploaded && (
                    <button onClick={() => changeState('next')} className="mx-auto px-12 py-2 bg-cBrand text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow">
                        {t('Next')}
                    </button>
                )}
            </div>
        </div>
    );
}

export default UploadImage;