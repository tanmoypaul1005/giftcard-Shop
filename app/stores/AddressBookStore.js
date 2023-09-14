import axios from 'axios';
import create from 'zustand'
import { allAddresses, kuAddAddress, kuDeleteAddress, kuUpdateAddress } from '../utils/Url';
import { Toastr } from '../utils/UtilityFunctions';
import useUtilityStore from './UtilityStore';
import i18next, { t } from 'i18next';

const { setLoading } = useUtilityStore.getState()

const useAddressBookStore = create((set) => ({
    addresses: [],
    setAddresses: (value) => set((state) => state.addresses = value),

    add_address_form: { name: '', phone: '', address: '', city: '', post_code: '', type: 'home' },
    changeAddAddressFormValue: (name, value) => set((state) => state.add_address_form[name] = value),
    resetAddAddressForm: () => set((state) => state.add_address_form = { name: '', phone: '', address: '', city: '', post_code: '', type: 'home' }),

    edit_address_form: { name: '', phone: '', address: '', city: '', post_code: '', type: 'home' },
    changeEditAddressFormValue: (name, value) => set((state) => state.edit_address_form[name] = value),
    resetEditAddressForm: () => set((state) => state.edit_address_form = { name: '', phone: '', address: '', city: '', post_code: '', type: 'home' }),

    edit_address_label_type: 'Home',
    changeEditAddressLabelType: (value) => set((state) => state.edit_address_label_type = value),
}))


export const setAddressesFoo = async () => {
    try {
        const { setAddresses, addresses } = useAddressBookStore.getState();
        setLoading(true)
        const res = await axios.get(allAddresses);
        console.log('setAddressesFoo: ', res.data);

        if (res.data.success) {
            setAddresses(res.data.data);
            console.log('addresses: ', addresses);
        } else {
            Toastr({ message: res.data.message, type: 'error' })
        }
        setLoading(false)
    } catch (error) {
        console.log('setAddressesFoo: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
    }
}

export const addAddressFoo = async () => {
    try {
        const { setAddresses, add_address_form, resetAddAddressForm } = useAddressBookStore.getState();
        setLoading(true)
        const res = await axios.post(kuAddAddress, add_address_form);
        console.log('addAddressFoo: ', res.data);

        if (res.data.success) {
            setAddresses(res.data.data);
            resetAddAddressForm();
            Toastr({ message: res.data.message, type: 'success' })
        } else {
            Toastr({ message: res.data.message, type: 'error' })
        }
        setLoading(false)
    } catch (error) {
        console.log('addAddressFoo: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
    }
}

export const updateAddressFoo = async ({ address_id }) => {
    try {
        if (!address_id) {
            Toastr({ message: t('Invalid Address, unable to update!'), type: 'error' })
            return;
        }

        const { setAddresses, edit_address_form, resetAddAddressForm } = useAddressBookStore.getState();
        edit_address_form.id = address_id;
        setLoading(true)
        const res = await axios.post(kuUpdateAddress, edit_address_form);
        console.log('updateAddressFoo: ', res.data);

        if (res.data.success) {
            setAddresses(res.data.data);
            resetAddAddressForm();
            Toastr({ message: res.data.message, type: 'success' })
        } else {
            Toastr({ message: res.data.message, type: 'error' })
        }
        setLoading(false)
    } catch (error) {
        console.log('updateAddressFoo: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
    }
}

export const deleteAddressFoo = async ({ address_id }) => {
    try {
        const { setAddresses, addresses } = useAddressBookStore.getState();
        setLoading(true)
        const res = await axios.post(kuDeleteAddress, { id: address_id });
        console.log('deleteAddressFoo: ', res.data);

        if (res.data.success) {
            setAddresses(res.data.data);
            console.log('addresses: ', addresses);
        } else {
            Toastr({ message: res.data.message, type: 'error' })
        }
        setLoading(false)
    } catch (error) {
        console.log('deleteAddressFoo: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
    }
}

export default useAddressBookStore