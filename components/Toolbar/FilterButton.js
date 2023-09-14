/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { VscSettings } from 'react-icons/vsc'
import { GrClose } from 'react-icons/gr'
import { CgRadioChecked, CgRadioCheck } from 'react-icons/cg'
import FilterContent from './FilterContent';
import PriceFilterModal from './PriceFilterModal';
import usePostcardStore, { getPostcardData } from '../../app/stores/PostcardStore';
import { useTranslation } from 'react-i18next';

const FilterButton = () => {

    const [is_active, setIsActive] = useState(false)
    const [show_modal, setShowModal] = useState(false);
    const { setPriceRangeValue } = usePostcardStore();
    const {t} = useTranslation();

    const toggle = () => {
        // setIsActive(!is_active)
        setShowModal(true)
        console.log("Clicked");
    }

    const wrapperRef = useRef(null);


    // ! This useEffect is to detect outside click out of this component
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                console.log("Clicked Outside");
                setIsActive(false)
            }
        }
        // ! Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // ! Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    useEffect(() => { setPriceRangeValue([0, 1000]) }, [])



    return (
        <div ref={wrapperRef} className='inline-block'>
            <div className='relative'>
                <div onClick={toggle}>
                    <button className="px-3 font-semibold border-0 md:border border-gray-300 hover:border-[#73A3E7] bg-[#F5F5F8] md:bg-blueGray-50 hover:bg-cLemonade text-gray-900 transition-all ease-in h-10 rounded-md text-md focus:outline-none flex justify-center items-center">
                        <VscSettings className="text-xl mr-2 -rotate-90" />
                        {t('Filter')}
                    </button>
                </div>

                <div className='hidden md:block'>
                    {is_active && (
                        <div className='absolute top-0 left-24 xl:left-1/2 transform  -translate-x-1/2 z-10'>
                            <button className="px-16 font-semibold border-x border-t border-gray-300 bg-white text-gray-900 transition-all ease-in h-10 rounded-t-md text-md focus:outline-none flex justify-center items-center shadow">
                                <VscSettings className="text-xl mr-2 -rotate-90" />
                                {t('Filter')}
                            </button>
                            <div className='bg-white border border-gray-300 rounded-b-lg p-3 shadow'>
                                <div className='flex items-center justify-end'>
                                    <GrClose onClick={toggle} className='text-2xl cp' />
                                </div>

                                <FilterContent />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className={`fixed ${is_active ? 'bottom-0' : '-bottom-[40rem]'} left-1/2 -translate-x-1/2 shadow-c1 transition-all w-full bg-white rounded-t-xl p-5 pb-20 z-50 block md:hidden `}>
                <div className='flex items-center justify-end'>
                    <GrClose onClick={toggle} className='text-2xl cp' />
                </div>

                <FilterContent />
            </div>

            <PriceFilterModal
                show_modal={show_modal}
                setShowModal={setShowModal}
                onConfirm={() => {
                    getPostcardData(null, null, null, usePostcardStore.getState().price_range_value[0], usePostcardStore.getState().price_range_value[1]);
                    usePostcardStore.getState().setSelectedTab(-1);
                    usePostcardStore.getState().setSearchKey('');

                }}
            />

        </div>
    );
}

export default FilterButton;