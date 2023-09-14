/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CgClose } from "react-icons/cg";
import Modal from "./Modal";

const WelcomeScreenModal = () => {
  const [show_modal, setShowModal] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') {
      setShowModal(true);
    }
  }, [])


  return (
    <Modal
      show_modal={show_modal}
      setShowModal={setShowModal}
      full_content={(
        <div className="inline-block w-full max-w-xl  my-8 text-left align-middle transition-all transform shadow-xl rounded-lg">

          <div className="relative">
            <CgClose onClick={() => setShowModal(false)} className={`absolute top-2 right-2 text-3xl cursor-pointer text-gray-600 ${'bg-cWhite'}`} />
          </div>

          {

            <div className="flex flex-col justify-between items-center bg-cWhite h-[600px] rounded-lg transition-all duration-500 ">

              <img className="h-[200px] w-[100px] absolute bottom-0 left-24" src="/Images/ws/ws4.png" />
              <img className="h-[100px] w-[100px] absolute top-10 right-20" src="/Images/ws/ws5.png" />

              <div className="flex flex-col justify-center items-center text-center h-full w-full px-20 space-y-5">
                <div className="text-cTitleTextColor text-fs16   font-fw400">{t('私たちのサービスは')}</div>
                <div className="text-cTitleTextColor text-fs16   font-fw400">{t('ユーザーの文字をAI認識し')}</div>

                <div className="text-cTitleTextColor text-fs16  font-fw400">  {t('人間のような文字で手紙を相手に')} </div>
                <div className="text-cTitleTextColor text-fs16  font-fw400">  {t('送ることができます')} </div>

                <div className="text-cTitleTextColor text-fs16  font-fw400">  {t('いまの世界 or 心が癒され')} </div>
                <div className="text-cTitleTextColor text-fs16  font-fw400">  {t('ベーシックインカムある世界')} </div>
                <div className="text-cTitleTextColor text-fs16  font-fw400">  {t('どちらが良いですか?')} </div>
              </div>

            </div>
          }
        </div>
      )}
    />
  );
}

export default WelcomeScreenModal;

/* 
"Our service is able to recognize user’s text and send human-like text to the other user.\n\nThe world as it is now or a world with a healed heart and basic income.\n\nWhich would you prefer?";

私たちのサービスは\n\nユーザーの文字をAI認識し\n\n人間のような文字で手紙を相手に\n\n送ることができます\n\nいまの世界 or 心が癒され\n\nベーシックインカムある世界\n\nどちらが良いですか?
*/