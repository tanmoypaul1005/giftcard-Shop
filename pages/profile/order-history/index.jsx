/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Navbar from "../../../components/Layout/Navbar";
import Sidebar from '../../../components/Layout/Sidebar';
import Table from './Table';
import DateDropdown from "./DateDropdown";
import List from "./List";
import DetailsModalMobile from './DetailsModalMobile';
import useOrderHistoryStore, { setOrdersFoo, setPaginateOrdersFoo } from '../../../app/stores/OrderHistoryStore';
import Head from 'next/head';
import DetailsModal from './DetailsModal';
import { RotatingLines } from 'react-loader-spinner';
import { DatePicker, Space, Switch } from 'antd';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import NoDataAvailable from '../../../components/others/NDA';


const OrderHistory = () => {

    const [details_modal, setDetailsModal] = useState(false);
    const [details_modal_mobile, setDetailsModalMobile] = useState(false);
    const { t } = useTranslation();

    const { orders, is_pagination_loading, setMaxAndMinDate, max_and_min_date, setIsStatusCancelled, is_status_cancelled } = useOrderHistoryStore();
    const { RangePicker } = DatePicker;

    const dateFormat = 'DD-MM-YYYY';

    useEffect(() => {
        setOrdersFoo();

        const handleScroll = event => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                setPaginateOrdersFoo(max_and_min_date?.min_date, max_and_min_date?.max_date);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setOrdersFoo(max_and_min_date?.min_date, max_and_min_date?.max_date);
    }, [is_status_cancelled])


    const [dateRange, setDateRange] = useState();

    const onChange = (checked) => {
        // console.log(`switch to ${checked}`);
        setIsStatusCancelled(checked);

    };

    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Order History</title>
                <meta name="description" content="Post Card Printing" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div className="flex">

                <Sidebar />

                <div className="relative pt-16 w-full">
                    <div className='bg-white md:shadow px-5 md:p-6 max-w-7xl rounded-lg md:m-10'>
                        <div className='text-4xl font-semibold text-gray-800 mb-5 flex flex-col justify-start space-y-5 md:flex-row md:justify-between w-full'>
                            <div>{t('Order History')}</div>
                            <div>
                                <Space direction="vertical" size={12}>
                                    <RangePicker
                                        onCalendarChange={(e, x) => {
                                            setMaxAndMinDate(x[0], x[1]);
                                            setDateRange([moment(x[0], dateFormat), moment(x[1], dateFormat)])
                                            if (x[0] && x[1]) {
                                                setOrdersFoo(x[0], x[1]);
                                            }
                                            if (!x[0] && !x[1]) {
                                                setOrdersFoo();
                                            }
                                        }}
                                        defaultPickerValue={dateRange}
                                        format={dateFormat}
                                    />
                                </Space>
                            </div>



                        </div>

                        <div className='flex flex-row justify-between w-full bg-gray-300 rounded-md p-2'>
                            <div>{t('Show Cancelled Orders')}</div>
                            <div>
                                <Switch style={{ backgroundColor: is_status_cancelled ? '#FB607F' : 'white' }} className='bg-cWhite checked:bg-cBrand' defaultChecked={is_status_cancelled} onChange={(checked) => setIsStatusCancelled(checked)} />
                            </div>
                        </div>

                        {orders.length > 0 ?
                            <>
                                <div className='mt-5 block tab:hidden'>
                                    <Table orders={orders} setDetailsModal={setDetailsModal} />
                                </div>

                                <div className='mt-5 hidden tab:block'>
                                    <List orders={orders} setDetailsModal={setDetailsModal} />
                                </div>
                            </>
                            :
                            <div className='mt-5'>
                                <NoDataAvailable onClick={async () => {
                                    await setOrdersFoo();
                                    setIsStatusCancelled(false);
                                }} />
                            </div>
                        }

                    </div>
                </div>

            </div>

            {
                is_pagination_loading && <div className='flex flex-row justify-center items-center my-5'>
                    <RotatingLines
                        width="100"
                        strokeColor="#FB607F"
                        strokeWidth={4}
                        strokeWidthSecondary={3}
                    />
                </div>
            }

            <DetailsModal show_modal={details_modal} setShowModal={setDetailsModal} />
            <DetailsModalMobile show_modal={details_modal_mobile} setShowModal={setDetailsModalMobile} />

        </div >
    );
}

export default OrderHistory;