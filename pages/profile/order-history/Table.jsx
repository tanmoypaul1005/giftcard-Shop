import Image from 'next/image'
import { useTranslation } from 'react-i18next';
import useOrderHistoryStore, { setOrderStatus } from '../../../app/stores/OrderHistoryStore';
import { formatDate } from '../../../app/stores/UtilityStore';
import { BaseUrlSrc } from '../../../app/utils/Url';

const Table = ({ setDetailsModal, orders = [] }) => {

    const { setSelectedOrder } = useOrderHistoryStore();
    const onOrderClick = (order) => {
        setSelectedOrder(order);
        setDetailsModal(true)
    }
    const { t } = useTranslation();


    return (
        <div>
            <table className="table-auto w-full table-corner-rounded text-sm">
                <thead className="">
                    <tr className="border">
                        <th className="p-4 font-medium text-left">{t('Product Name')}</th>
                        <th className="p-4 font-medium text-center">{t('Code No')}</th>
                        <th className="p-4 font-medium text-center">{t('Payment Method')}</th>
                        <th className="p-4 font-medium text-center">{t('Qty')}</th>
                        <th className="p-4 font-medium text-center">{t('Order Date')}</th>
                        {/* <th className="p-4 font-medium text-center">{t('Delivery Date')}</th> */}
                        <th className="p-4 font-medium text-center">{t('Status')}</th>
                        <th className="p-4 font-medium text-center">{t('Price')}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((order, index) =>
                            <tr key={index} onClick={() => onOrderClick(order)} className="border cp hover:bg-gray-600">
                                <td className="p-4 text-center">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-gray-400 h-10 w-10 relative overflow-hidden rounded">
                                            <Image className="h-auto" src={BaseUrlSrc + order?.card_image} alt="Post Card Image" layout="fill" objectFit="cover" />
                                        </div>
                                        <div className='inline truncate'>{order?.card_name}</div>
                                    </div>
                                </td>
                                <td className="p-4 text-center">{order?.code}</td>
                                <td className="p-4 text-center">{order?.payment_method == 'cod' ? 'COD' : t('Card')}</td>
                                <td className="p-4 text-center">{order?.quantity}</td>
                                <td className="p-4 text-center">{formatDate(order?.order_date)}</td>
                                {/* <td className="p-4 text-center">{formatDate(order?.delivery_date) ?? '-'}</td> */}
                                <td className="p-4 text-center capitalize">{setOrderStatus(order?.status)}</td>
                                <td className="p-4 text-center">¥{order?.order_total}</td>
                            </tr>
                        )

                    }
                </tbody>
            </table>

        </div>
    );
}

export default Table;