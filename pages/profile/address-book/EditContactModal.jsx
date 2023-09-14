/* eslint-disable react-hooks/exhaustive-deps */
import ModalMobileFull from "../../../components/Modal/ModalMobileFull";
import { CgClose } from 'react-icons/cg'
import Input01 from "../../../components/Input/Input01";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useEffect, useState } from "react";
import useAddressBookStore, { updateAddressFoo } from "../../../app/stores/AddressBookStore";
import { useTranslation } from "react-i18next";

const EditContactModal = ({ show_modal, setShowModal, onConfirm }) => {

    const { edit_address_form, edit_address_label_type, changeEditAddressFormValue, changeEditAddressLabelType } = useAddressBookStore();
    const handleChangeValue = (e) => changeEditAddressFormValue(e.target.name, e.target.value);
    const { t } = useTranslation();

    const changeEditAddressFormTypeValue = () => {
        if (edit_address_label_type === 'Home') changeEditAddressFormValue('type', 'home');
        else if (edit_address_label_type === 'Office') changeEditAddressFormValue('type', 'office');
        else changeEditAddressFormValue('type', 'others');
    }

    useEffect(() => {
        changeEditAddressFormTypeValue()
    }, [edit_address_label_type])

    return (
        <ModalMobileFull
            show_modal={show_modal}
            setShowModal={setShowModal}
            full_content={(
                <div className="h-screen md:h-auto inline-block w-full max-w-5xl md:px-14 py-0 md:py-10 md:my-8 text-left align-middle transition-all delay-150 transform bg-white shadow-xl md:rounded-lg">
                    <div className="relative">
                        <CgClose onClick={() => setShowModal(false)} className="absolute -top-6 -right-10 text-3xl cursor-pointer text-gray-600 hidden md:block" />

                        <div>
                            <div className="text-center text-3xl font-semibold mb-10 hidden md:block">{t('Edit Address')}</div>

                            <div onClick={() => setShowModal(false)} className="px-5 py-4 border-b mb-5 md:hidden flex items-center space-x-3 cp">
                                <IoIosArrowBack className="text-lg text-gray-600" />
                                <div className='text-xl font-bold inline truncate'>{t('Edit Address')}</div>
                            </div>

                            <form onSubmit={onConfirm}>

                                <div className="px-5">
                                    <Input01
                                        name="name"
                                        value={edit_address_form.name}
                                        label={("Name") + '*'}
                                        placeholder={t("Enter Name")}
                                        onChange={handleChangeValue}
                                        required={true}
                                    />

                                    <Input01
                                        name="address"
                                        label={t("Address") + '*'}
                                        placeholder={t("Enter Address")}
                                        value={edit_address_form.address}
                                        onChange={handleChangeValue}
                                        required={true}
                                    />

                                    <Input01
                                        name="city"
                                        label={t("City") + '*'}
                                        placeholder={t("Enter City")}
                                        value={edit_address_form.city}
                                        onChange={handleChangeValue}
                                        required={true}
                                    />

                                    <div className="grid md:grid-cols-2 md:gap-10">
                                        <Input01
                                            name="phone"
                                            label={t("Phone") + '*'}
                                            placeholder={t("Enter Phone Number")}
                                            type={'tel'}
                                            value={edit_address_form.phone}
                                            onChange={handleChangeValue}
                                            required={true}
                                            maxLength={15}
                                        />

                                        <Input01
                                            name="post_code"
                                            label={t("Post Code") + '*'}
                                            placeholder={t("Enter Post Code")}
                                            value={edit_address_form.post_code}
                                            onChange={handleChangeValue}
                                            required={true}
                                            type={'text'}
                                            maxLength={8}
                                        />
                                    </div>

                                    <div>
                                        <div className="text-gray-600 mb-2">Add a label</div>
                                        <div className="flex flex-row justify-start">
                                            <LabelChip onClick={() => changeEditAddressLabelType('Home')} selected_label={edit_address_label_type} label={t("Home")} />
                                            <LabelChip onClick={() => changeEditAddressLabelType('Office')} selected_label={edit_address_label_type} label={t("Office")} />
                                            <LabelChip onClick={() => changeEditAddressLabelType('Others')} selected_label={edit_address_label_type} label={t("Others")} />
                                        </div>
                                    </div>


                                    <div className="x-center">
                                        <button type="submit" className="mx-auto mt-2 px-20 md:px-10 py-3 md:py-2 bg-cBrand text-white transition-all ease-in rounded-md text-md md:text-base font-medium shadow">
                                            {t('Update')}
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

export default EditContactModal;

const LabelChip = ({ label, selected_label, onClick }) => {
    return (
        <div onClick={onClick} className="flex items-center space-x-1 mr-3 cursor-pointer">
            <div className={`${selected_label === label ? "bg-cBrand text-white " : "bg-white text-cBrand border-cBrand border-[1px]"} text-sm rounded-md px-2 py-1`}>{label}</div>
        </div>
    );
}