/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CgClose } from "react-icons/cg";
import Modal from "./Modal";

const CreateCardInfoModal = () => {
  const [show_modal, setShowModal] = useState(false);
  const [is_step_one, setIsStepOne] = useState(true);
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    const welcome_screen = localStorage.getItem('create_card_info');
    if (!welcome_screen) {
      setShowModal(true);
      localStorage.setItem('create_card_info', true);
    }
  }, [])


  return (
    <Modal
      show_modal={show_modal}
      setShowModal={setShowModal}
      full_content={(
        <div className="inline-block w-full max-w-xl  my-8 text-left align-middle transition-all transform shadow-xl rounded-lg">

          <div className="relative">
            <CgClose onClick={() => setShowModal(false)} className={`absolute top-2 right-2 text-3xl cursor-pointer text-gray-600 ${is_step_one ? 'bg-[#f96e69]' : 'bg-cWhite'}`} />
          </div>

          {
            is_step_one ?
              <div className="flex flex-col justify-between items-center h-[600px] bg-[#F96E69] transition-all duration-500">

                <img className="h-[450px] w-[300px] my-10" src="/Images/ws/ws1.png" />
                <img className="h-[160px] w-[80px] md:h-[200px] md:w-[100px] absolute bottom-0 left-5" src="/Images/ws/ws2.png" />
                <img className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] absolute top-10 right-5" src="/Images/ws/ws3.png" />

                <button onClick={() => { setIsStepOne(false) }} type="button" className={`absolute right-5 bottom-5 inline-flex justify-center px-4 py-2 w-24 text-sm font-medium text-[#F96E69] bg-white hover:text-cWhite hover:bg-red-500 border border-transparent rounded-md`}>
                  {t('Next')}
                </button>

              </div>
              :
              <div className="flex flex-col justify-between items-center bg-cWhite h-[600px] rounded-lg transition-all duration-500 ">

                <img className="h-[200px] w-[100px] absolute bottom-0 left-24" src="/Images/ws/ws4.png" />
                <img className="h-[100px] w-[100px] absolute top-10 right-20" src="/Images/ws/ws5.png" />

                <div className="flex flex-col justify-center items-center text-center h-full w-full px-20 space-y-5">
                  <div className="text-cTitleTextColor text-fs20  md:text-fs32 font-fw400">{t('Share your feelings, spread love & happiness!')}</div>

                  <div className="text-cTitleTextColor text-fs16 md:text-fs20 font-fw400">  {t('Write about small things, emotions, food, travel, movies, music feelings that you want to share.')} </div>

                  <div className="text-cTitleTextColor text-fs16 md:text-fs20 font-fw400">  {t('It feels great to share happiness with people you love!')} </div>
                </div>

                <div className="flex flex-row justify-between w-full absolute bottom-5 px-5">
                  <button onClick={() => { setIsStepOne(true) }} type="button" className={` inline-flex justify-center px-4 py-2 w-24 text-sm font-medium text-cWhite bg-cPlaceholder hover:bg-cIconColor border border-transparent rounded-md`}>
                    {t('Back')}
                  </button>

                  <button onClick={() => { setShowModal(false) }} type="button" className={` inline-flex justify-center px-4 py-2 w-24 text-sm font-medium text-cWhite bg-cBrand hover:bg-red-500 border border-transparent rounded-md`}>
                    {t('Done')}
                  </button>
                </div>


              </div>
          }
        </div>
      )}
    />
  );
}

export default CreateCardInfoModal;