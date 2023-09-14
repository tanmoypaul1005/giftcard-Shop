/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
// import ChooseAnother from './ChooseFrame/ChooseAnother';
import GiftIsReady from "./ChooseFrame/GiftIsReady";
import FrameGrid from "./ChooseFrame/FrameGrid";
import useCreateRequestStore from '../../app/stores/CreateCardStore';
import { useEffect, useState } from 'react';

const ChooseFrame = ({ changeState }) => {
    const { create_card_form, selected_card, setCreateCardForm } = useCreateRequestStore();
    const [is_gift_ready, setIsGiftReady] = useState(false);

    useEffect(() => {
        // console.log('create_card_form', create_card_form?.card_id, selected_card);
        if (create_card_form?.card_id || selected_card) {
            setIsGiftReady(true);
            create_card_form?.card_id === null && setCreateCardForm({ ...create_card_form, card_id: selected_card?.id });
        }
        else setIsGiftReady(false);
    }, [create_card_form?.card_id, selected_card]);

    useEffect(() => {
        // console.log('create_card_form', create_card_form?.card_id, selected_card);
        if (create_card_form?.card_id || selected_card) {
            setIsGiftReady(true);
            create_card_form?.card_id === null && setCreateCardForm({ ...create_card_form, card_id: selected_card?.id });
        }
        else setIsGiftReady(false);
    }, []);



    return (
        <div>
            {is_gift_ready && <GiftIsReady changeState={changeState} />}

            <FrameGrid is_gift_ready={is_gift_ready} />

            {/* <ChooseAnother/> */}
        </div>
    );
}

export default ChooseFrame;