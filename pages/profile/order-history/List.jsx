import Image from 'next/image'
import { useTranslation } from 'react-i18next';
import useOrderHistoryStore, { setOrderStatus } from '../../../app/stores/OrderHistoryStore';
import { BaseUrlSrc } from '../../../app/utils/Url';


const List = ({ setDetailsModal, orders = [] }) => {
    const { setSelectedOrder } = useOrderHistoryStore();
    const { t } = useTranslation();

    const onOrderClick = (order) => {
        setSelectedOrder(order);
        setDetailsModal(true)
    }
    return (
        <div className="space-y-5">
            {
                orders?.map((order, index) =>
                    <div key={index} onClick={() => onOrderClick(order)} className="shadow p-3 rounded flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="bg-gray-400 h-12 w-12 relative overflow-hidden rounded">
                                <Image className="h-auto" src={BaseUrlSrc + order.card_image} alt="Post Card Image" layout="fill" objectFit="cover" />
                            </div>
                            <div>
                                <div className="font-medium">{order.card_name}</div>
                                <div className="font-light text-sm">¥{order.price}</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="font-medium text-sm">{order.payment_method == 'cod' ? 'COD' : t('Card')}</div>
                            <div className="font-medium text-sm capitalize">{setOrderStatus(order?.status)}</div>
                        </div>
                    </div>

                )
            }
        </div>
    );
}

export default List;