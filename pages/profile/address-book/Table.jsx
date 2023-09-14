/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useAddressBookStore, { deleteAddressFoo, updateAddressFoo } from '../../../app/stores/AddressBookStore';
import useCreateRequestStore from '../../../app/stores/CreateCardStore';
import DeleteModal2 from '../../../components/Modal/DeleteModal2';
import EditContactModal from './EditContactModal';

const Table = ({ addresses }) => {

    const [delete_contact_modal, setDeleteContactModal] = useState(false)
    const [edit_contact_modal, setEditContactModal] = useState(false)
    const [address_id, setAddressId] = useState(null)
    const [address_type, setAddressType] = useState(null)
    const { t } = useTranslation();

    const { changeEditAddressFormValue, changeEditAddressLabelType } = useAddressBookStore();

    const onEditAddressClick = (address) => {
        setEditContactModal(true)
        setAddressId(address.id)
        console.log('address: ', address);
        changeEditAddressFormValue('name', address.name)
        changeEditAddressFormValue('address', address.address)
        changeEditAddressFormValue('city', address.city)
        changeEditAddressFormValue('post_code', address.post_code)
        changeEditAddressFormValue('phone', address.phone)

        if (address.type == 'home') changeEditAddressLabelType('Home')
        else if (address.type == 'office') changeEditAddressLabelType('Office')
        else changeEditAddressLabelType('Others')
    }

    const onEditFormSubmit = (e) => {
        setEditContactModal(false);
        e.preventDefault();
        updateAddressFoo({ address_id: address_id });
    }

    const onDeleteAddressClick = (id) => {
        setAddressId(id)
        setDeleteContactModal(true)
    }

    const onDelete = () => deleteAddressFoo({ address_id: address_id })

    const { address_source, setCreateCardForm, create_card_form, setBillAddress, setShipAddress } = useCreateRequestStore();
    const router = useRouter();

    return (
        <div>
            <table className="table-auto w-full table-corner-rounded">
                <thead className="">
                    <tr className={`border `}>
                        <th className="p-4 font-medium text-center">{t('Name')}</th>
                        <th className="p-4 font-medium text-center">{t('Address')}</th>
                        <th className="p-4 font-medium text-center">{t('Phone')}</th>
                        <th className="p-4 font-medium text-center">{t('Post Code')}</th>
                        <th className="p-4 font-medium text-center">{t('Type')}</th>
                        {!address_source?.is_from_create && <th className="p-4 font-medium text-center">{t('Action')}</th>}
                    </tr>
                </thead>
                <tbody>
                    {
                        addresses?.map((address, index) =>

                            <tr onClick={() => {
                                if (address_source?.is_from_create) {
                                    if (address_source.type === 'billing') {
                                        setBillAddress(address);
                                        setCreateCardForm({
                                            ...create_card_form,
                                            bill_name: address.name,
                                            bill_phone: address.phone,
                                            bill_postcode: address.post_code,
                                            bill_city: address.city,
                                            bill_address: address.address,
                                            bill_address_type: address.type,
                                        });
                                    } else {
                                        setShipAddress(address);
                                        setCreateCardForm({
                                            ...create_card_form,
                                            ship_name: address.name,
                                            ship_phone: address.phone,
                                            ship_postcode: address.post_code,
                                            ship_city: address.city,
                                            ship_address: address.address,
                                            ship_address_type: address.type,
                                        });
                                    }
                                    router.back();
                                }
                            }} className={`border ${address_source?.is_from_create && 'cursor-pointer'}`} key={index}>
                                <td className="p-4 text-center">{address.name}</td>
                                <td className="p-4 text-center">{address.address + ', ' + address.city}</td>
                                <td className="p-4 text-center">{address.phone}</td>
                                <td className="p-4 text-center">{address.post_code}</td>
                                <td className="p-4 text-center capitalize">{address.type}</td>
                                {!address_source?.is_from_create && <td className="p-4 text-center">
                                    <div className="flex items-center justify-around">
                                        <div onClick={() => onEditAddressClick(address)} className="h-5 w-5 relative cp hover:scale-105 transition-all">
                                            <img className="h-auto" src={'/Images/Other Images/edit.png'} alt="Post Card Image" layout="fill" />
                                        </div>
                                        <div onClick={() => onDeleteAddressClick(address.id)} className="h-5 w-5 relative cp hover:scale-105 transition-all">
                                            <img className="h-auto" src={'/Images/Other Images/delete.png'} alt="Post Card Image" layout="fill" />
                                        </div>
                                    </div>
                                </td>}
                            </tr>

                        )
                    }


                </tbody>
            </table>

            <EditContactModal
                onConfirm={onEditFormSubmit}
                address_id={address_id}
                show_modal={edit_contact_modal}
                setShowModal={setEditContactModal}
            />

            <DeleteModal2
                address_id={address_id}
                address_type={address_type}
                show_modal={delete_contact_modal}
                setShowModal={setDeleteContactModal}
                onConfirm={onDelete}
                title={t("Delete Address?")}
                subtitle={t("Are you sure you want to delete this address?")}
            />

        </div>
    );
}

export default Table;