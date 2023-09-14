import { BsThreeDotsVertical } from 'react-icons/bs';
import Dropdown02 from "../../../components/Dropdown/Dropdown02";
import useAddressBookStore, { deleteAddressFoo, updateAddressFoo } from '../../../app/stores/AddressBookStore';
import EditContactModal from './EditContactModal';
import DeleteModal2 from '../../../components/Modal/DeleteModal2';
import { useState } from 'react';
import useCreateRequestStore from '../../../app/stores/CreateCardStore';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const List = ({ addresses }) => {
    const [delete_contact_modal, setDeleteContactModal] = useState(false)
    const [edit_contact_modal, setEditContactModal] = useState(false)
    const [address_id, setAddressId] = useState(null)
    const [address_type, setAddressType] = useState(null)
    const { changeEditAddressFormValue, changeEditAddressLabelType } = useAddressBookStore();

    const onEditAddressClick = (address) => {
        setEditContactModal(true)
        setAddressId(address.id)
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

    const onDelete = () => deleteAddressFoo({ address_id: address_id });
    const { address_source, setCreateCardForm, create_card_form, setBillAddress, setShipAddress } = useCreateRequestStore();
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <div className="space-y-3">

            {
                addresses?.map((address, index) =>

                    <div key={index} onClick={() => {
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
                    }} className={`relative p-3 border rounded text-gray-500 ${address_source?.is_from_create && 'cursor-pointer'}`}>

                        {!address_source?.is_from_create && <div className="absolute top-2 right-2">
                            <Dropdown02
                                width={48}
                                button={<BsThreeDotsVertical className="text-xl text-gray-800" />}
                                body={(
                                    <div className="py-1 bg-white shadow-c1 rounded-md">
                                        <div onClick={() => onEditAddressClick(address)} className="py-2 px-5 hover:bg-gray-200 cursor-pointer">Edit</div>
                                        <div onClick={() => onDeleteAddressClick(address.id)} className="py-2 px-5 hover:bg-red-200 hover:text-red-600 cursor-pointer">Delete</div>
                                    </div>
                                )}
                            />
                        </div>}
                        <div className="text-lg font-semibold text-gray-800 mb-2">{address.name}</div>
                        <div className="">{address.post_code}</div>
                        <div className="">{address.phone}</div>
                        <div className="">{address.address}</div>
                        <div className="capitalize">{address.type}</div>

                    </div>

                )
            }

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

export default List;