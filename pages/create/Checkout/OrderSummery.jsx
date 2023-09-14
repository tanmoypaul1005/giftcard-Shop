/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlinePlus, AiOutlineMinus, AiFillCloseCircle } from 'react-icons/ai';
import useCreateRequestStore, { getVoucherInfo } from '../../../app/stores/CreateCardStore';
import { BaseUrlSrc } from '../../../app/utils/Url';
import Input01 from '../../../components/Input/Input01';
import { iDefaultShop } from '../../../components/Utilities/Sources';

const OrderSummery = ({ changeState }) => {
    const { selected_card, create_card_form, setCreateCardForm, voucher_info, setVoucherInfo, voucher, setVoucher } = useCreateRequestStore();

    const calculatePrice = () => {
        let subTotal = 0;
        let total = 0;
        subTotal += ((selected_card?.price ?? 0) * (create_card_form?.quantity ?? 1));
        total += subTotal;
        total += ((create_card_form?.authority_fee ?? 0) + (create_card_form?.shipping_fee ?? 0));
        total -= create_card_form?.discount;
        return { sub_total: subTotal, total: total };
    }

    const changeCardQuantity = (type) => {
        if (create_card_form?.quantity === 1 && type === 'minus') return;
        console.log('changeCardQuantity', type, quantity);
        let quantity = create_card_form?.quantity ?? 1;
        if (type === 'plus') {
            quantity += 1;
        } else {
            quantity -= 1;
        }
        setCreateCardForm({ ...create_card_form, quantity: quantity });
    }

    useEffect(() => {
        console.log('seleceted_card', selected_card);
        const general_info = JSON.parse(localStorage.getItem('general_info'));
        setCreateCardForm({ ...create_card_form, authority_fee: general_info?.authority_fee, shipping_fee: (selected_card?.shipping_cost === 0 || !selected_card?.shipping_cost) ? general_info?.shipping_fee : selected_card?.shipping_cost });
    }, []);


    const { t } = useTranslation();

    return (
        <div>
            <div className="text-xl md:text-lg font-semibold mb-5">{t('Order Summary')}</div>

            <div className='relative h-72 md:h-48 w-full mb-2'>
                <div className="h-full w-full relative rounded-lg overflow-hidden">
                    <Image className="h-auto" src={(selected_card?.image && create_card_form?.card_id) ? (BaseUrlSrc + selected_card?.image) : iDefaultShop} alt="Post Card Image" layout="fill" objectFit="cover" />
                </div>
            </div>

            <div className='flex items-center justify-between mb-5'>
                <div className="font-semibold">{t('Postcard')}</div>

                <div className='flex justify-between items-center rounded-md text-2xl mx-2 mb-2 select-none'>
                    <AiOutlineMinus onClick={() => changeCardQuantity('minus')} className='cp p-2 m-1 bg-gray-100 hover:bg-gray-300 transition-all ease-in-out rounded-md text-3xl' />
                    <div className='mx-2 text-base'>{create_card_form?.quantity ?? 1}</div>
                    <AiOutlinePlus onClick={() => changeCardQuantity('plus')} className='cp p-2 m-1 bg-gray-100 hover:bg-gray-300 transition-all ease-in-out rounded-md text-3xl' />
                </div>
            </div>

            {voucher_info ?
                <div className='bg-cBrickHover w-full flex justify-center items-center py-2 mb-5 border-dashed	border relative'>
                    {t('Voucher')} {voucher_info?.code}
                    <div className='absolute right-1 top-1 cursor-pointer' onClick={() => {
                        setVoucherInfo(null);
                        setCreateCardForm({ ...create_card_form, discount: 0, discount_code: '' });
                    }}>
                        <AiFillCloseCircle />
                    </div>
                </div>
                : <div className="grid grid-cols-3 gap-2 md:gap-10 mb-5 w-full ">

                    <Input01 onChange={(e) => setVoucher(e.target.value)} className="col-span-2" name="discount_code" value={voucher} no_label placeholder={t("Gift Card/Discount Code")} />


                    <button onClick={() => getVoucherInfo(voucher)} className="border border-gray-600 bg-white hover:bg-gray-600 text-gray-600 hover:text-white transition-all ease-in rounded-md text-sm font-medium focus:outline-none">
                        {t('Apply')}
                    </button>
                </div>}


            <div className='mb-5'>
                <div className='border-b'>
                    <div className='flex items-center justify-between mb-4'>
                        <div className='text-gray-600'>{t('Sub Total')}</div>
                        <div className='text-gray-600'>¥{calculatePrice().sub_total}</div>
                    </div>
                    <div className='flex items-center justify-between mb-4'>
                        <div className='text-gray-600'>{t('Authority Fee')}</div>
                        <div className='text-gray-600'>¥{create_card_form?.authority_fee ?? 0}</div>
                    </div>
                    <div className='flex items-center justify-between mb-4'>
                        <div className='text-gray-600'>{t('Shipping')}</div>
                        <div className='text-gray-600'>¥{create_card_form.shipping_fee ?? 0}</div>
                    </div>
                    {voucher_info && <div className='flex items-center justify-between mb-4'>
                        <div className='text-gray-600'>{t('Applied Voucher')}</div>
                        <div className='text-gray-600'>¥{voucher_info?.amount ?? 0}</div>
                    </div>}
                </div>
                <div className='flex items-center justify-between mb-4'>
                    <div className='text-gray-700 font-bold'>{t('Total')}</div>
                    <div className='text-gray-700 font-semibold'>¥{calculatePrice().total}</div>
                </div>
            </div>





        </div>
    );
}

export default OrderSummery;