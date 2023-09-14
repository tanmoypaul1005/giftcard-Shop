import React, { useEffect, useState } from 'react'
import Navbar from "../../../components/Layout/Navbar";
import Sidebar from '../../../components/Layout/Sidebar';
import AddContactModal from "./AddContactModal";
import Table from './Table';
import AddButton from './AddButton';
import List from './List';
import EditContactModal from './EditContactModal';
import DeleteModal2 from '../../../components/Modal/DeleteModal2';
import Head from 'next/head';
import useAddressBookStore, { setAddressesFoo } from '../../../app/stores/AddressBookStore';
import { useTranslation } from 'react-i18next';

const AddressBook = () => {

    const [add_contact_modal, setAddContactModal] = useState(false);
    const { t } = useTranslation();


    const {
        addresses,
    } = useAddressBookStore()

    useEffect(() => {
        setAddressesFoo()
    }, [])


    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Address Book</title>
                <meta name="description" content="Post Card Printing" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div className="flex">

                <Sidebar />

                <div className="relative pt-16 w-full">
                    <div className='bg-white md:shadow px-5 md:p-6 md:max-w-7xl rounded-lg md:m-10'>
                        <div className='text-4xl font-semibold text-gray-800 mb-5 hidden md:block'>{t('Address Book')}</div>

                        <div className="py-4 border-b mb-3 md:hidden flex items-center justify-between space-x-3">
                            <div className="flex items-center space-x-3">
                                <div className='text-xl font-bold inline truncate'>{t('Address Book')}</div>
                            </div>

                            <AddButton setAddContactModal={setAddContactModal} />
                        </div>

                        <div className="hidden md:block">
                            <AddButton setAddContactModal={setAddContactModal} />
                        </div>

                        <div className='mt-5 hidden md:block'>
                            <Table addresses={addresses} />
                        </div>

                        {/* for mobile view */}
                        <div className='mt-0 block md:hidden'>
                            <List addresses={addresses} />
                        </div>

                    </div>
                </div>

            </div>

            <AddContactModal show_modal={add_contact_modal} setShowModal={setAddContactModal} />




        </div>
    );
}

export default AddressBook;