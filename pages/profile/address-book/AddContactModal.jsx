/* eslint-disable react-hooks/exhaustive-deps */
import ModalMobileFull from "../../../components/Modal/ModalMobileFull";
import { CgClose } from 'react-icons/cg'
import Input01 from "../../../components/Input/Input01";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useEffect, useState } from "react";
import useAddressBookStore, { addAddressFoo } from "../../../app/stores/AddressBookStore";
import { useTranslation } from "react-i18next";
// import { LabelChip } from "./LabelChop";

const AddContactModal = ({ show_modal, setShowModal }) => {

    const [selected_label, setSelectedLabel] = useState('Home');

    const { add_address_form, changeAddAddressFormValue } = useAddressBookStore();

    const handleChangeValue = (e) => changeAddAddressFormValue(e.target.name, e.target.value)
    const {t} = useTranslation();


    const onFormSubmit = (e) => {
        // console.log('form: ', add_address_form);
        setShowModal(false);
        e.preventDefault();
        addAddressFoo();
    }

    const changeAddAddressFormTypeValue = () => {
        if (selected_label === 'Home') changeAddAddressFormValue('type', 'home');
        else if (selected_label === 'Office') changeAddAddressFormValue('type', 'office');
        else changeAddAddressFormValue('type', 'others');
    }

    useEffect(() => {
        changeAddAddressFormTypeValue()
    }, [])

    useEffect(() => {
        changeAddAddressFormTypeValue()
    }, [selected_label])



    return (
        <ModalMobileFull
            show_modal={show_modal}
            setShowModal={setShowModal}
            full_content={(
                <div className="h-screen md:h-auto inline-block w-full max-w-5xl md:px-14 py-0 md:py-10 md:my-8 text-left align-middle transition-all delay-150 transform bg-white shadow-xl md:rounded-lg">
                    <div className="relative">
                        <CgClose onClick={() => setShowModal(false)} className="absolute -top-6 -right-10 text-3xl cursor-pointer text-gray-600 hidden md:block" />

                        <div>
                            <div className="text-center text-3xl font-semibold mb-10 hidden md:block">{t('Add Address')}</div>

                            <div onClick={() => setShowModal(false)} className="px-5 py-4 border-b mb-5 md:hidden flex items-center space-x-3 cp">
                                <IoIosArrowBack className="text-lg text-gray-600" />
                                <div className='text-xl font-bold inline truncate'>{t('Add Address')}</div>
                            </div>

                            <form onSubmit={onFormSubmit}>

                                <div className="px-5">
                                    <Input01
                                        name="name"
                                        value={add_address_form.name}
                                        label={t("Name") + '*'}
                                        placeholder={t("Enter Name")}
                                        onChange={handleChangeValue}
                                        required={true}
                                    />

                                    <Input01
                                        name="address"
                                        label={t("Address") + '*'}
                                        placeholder={t("Enter Address")}
                                        value={add_address_form.address}
                                        onChange={handleChangeValue}
                                        required={true}
                                    />

                                    <Input01
                                        name="city"
                                        label={t("City") + '*'}
                                        placeholder={t("Enter City")}
                                        value={add_address_form.city}
                                        onChange={handleChangeValue}
                                        required={true}
                                    />

                                    <div className="grid md:grid-cols-2 md:gap-10">
                                        <Input01
                                            name="phone"
                                            label={t("Phone") + '*'}
                                            placeholder={t("Enter Phone Number")}
                                            type={'tel'}
                                            value={add_address_form.phone}
                                            onChange={handleChangeValue}
                                            maxLength={15}
                                            required={true}
                                        />

                                        <Input01
                                            name="post_code"
                                            label={t("Post Code") + '*'}
                                            placeholder={t("Enter Post Code")}
                                            value={add_address_form.post_code}
                                            onChange={handleChangeValue}
                                            required={true}
                                            type={'text'}
                                            maxLength={8}
                                        />
                                    </div>

                                    <div>
                                        <div className="text-gray-600 mb-2">Add a label</div>
                                        <div className="flex flex-row justify-start">
                                            <LabelChip onClick={() => setSelectedLabel('Home')} selected_label={selected_label} label={t("Home")} />
                                            <LabelChip onClick={() => setSelectedLabel('Office')} selected_label={selected_label} label={t("Office")} />
                                            <LabelChip onClick={() => setSelectedLabel('Others')} selected_label={selected_label} label={t("Others")} />
                                        </div>
                                    </div>


                                    <div className="x-center">
                                        <button type="submit" className="mx-auto mt-2 px-20 md:px-10 py-3 md:py-2 bg-cBrand text-white transition-all ease-in rounded-md text-md md:text-base font-medium shadow">
                                            {t('Save')}
                                        </button>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            )}
        />
    );
}

export default AddContactModal;


const LabelChip = ({ label, selected_label, onClick }) => {
    return (
        <div onClick={onClick} className="flex items-center space-x-1 mr-3 cursor-pointer">
            <div className={`${selected_label === label ? "bg-cBrand text-white " : "bg-white text-cBrand border-cBrand border-[1px]"} text-sm rounded-md px-2 py-1`}>{label}</div>
        </div>
    );
}