/* eslint-disable react-hooks/exhaustive-deps */
import WizardItem from "./WizardItem";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri'
import useCreateRequestStore from "../../../app/stores/CreateCardStore";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Wizard = ({ curr_state }) => {

    const { setCurrState, selected_card, create_card_form, } = useCreateRequestStore();
    const upload_image_active = ['upload_image', 'write_message', 'choose_frame', 'checkout'].includes(curr_state);
    const write_message_active = ['write_message', 'choose_frame', 'checkout'].includes(curr_state);
    const choose_frame_active = ['choose_frame', 'checkout'].includes(curr_state);
    const checkout_active = ['checkout'].includes(curr_state);
    const { t } = useTranslation();

    const [clickable_state, setClickableState] = useState({
        upload_image: false,
        write_message: true,
        choose_frame: false,
        checkout: false
    });

    const switchState = (state) => {
        // console.log(state);
        setCurrState(state);
    }

    useEffect(() => {
        if (curr_state === 'upload_image') {
            setClickableState({
                upload_image: false,
                write_message: true,
                choose_frame: false,
                checkout: false
            })
        } else if (curr_state === 'write_message') {
            setClickableState({
                upload_image: true,
                write_message: false,
                choose_frame: true,
                checkout: false
            })
        } else if (curr_state === 'choose_frame') {
            setClickableState({
                upload_image: false,
                write_message: true,
                choose_frame: false,
                checkout: selected_card && create_card_form?.card_id
            })
        } else if (curr_state === 'checkout') {
            setClickableState({
                upload_image: false,
                write_message: false,
                choose_frame: true,
                checkout: false
            })
        }

    }, [curr_state, selected_card, create_card_form?.card_id]);



    return (
        <div className='flex items-center justify-between max-w-2xl w-full overflow-x-scroll overflow-y-none mx-auto'>

            <WizardItem is_clickable={clickable_state.upload_image} onClick={() => switchState('upload_image')} hide_line text={t("Upload Image")} color={`${upload_image_active ? 'bg-cBrand' : 'bg-[#ECECEC]'}`} icon={<div className="text-sm md:text-lg">1</div>} />

            <WizardItem is_clickable={clickable_state.write_message} onClick={() => switchState('write_message')} text={t("Write Message")} color={`${write_message_active ? 'bg-cBrand' : 'bg-[#ECECEC]'}`} icon={<div className="text-sm md:text-lg">2</div>} />

            <WizardItem is_clickable={clickable_state.choose_frame} onClick={() => switchState('choose_frame')} text={t("Choose Card")} color={`${choose_frame_active ? 'bg-cBrand' : 'bg-[#ECECEC]'}`} icon={<div className="text-sm md:text-lg">3</div>} />

            <WizardItem is_clickable={clickable_state.checkout} onClick={() => switchState('checkout')} text={t("Checkout")} color={`${checkout_active ? 'bg-cBrand' : 'bg-[#ECECEC]'}`} icon={<div className="text-sm md:text-lg">4</div>} />

        </div>
    );
}

export default Wizard;