import { useRouter } from "next/router";
import { useEffect } from "react";
import useShopStore from "../../app/stores/ShopStore";
import { BaseUrlSrc, userLogin } from "../../app/utils/Url";
import Card02 from "../../components/Card/Card02";
import { iDefaultShop } from '../../components/Utilities/Sources';

const Gallery = () => {

    const { shop_data } = useShopStore();
    const router = useRouter();
    const goToShopDetailsPage = (item) => {
        // console.log('goToShopDetailsPage: ', item);
        const shop_info = {
            shop_id: item.id,
            shop_details: item.details,
            completed_orders_count: item.completed_orders_count,
            shop_image: item?.user_data?.image_url ?? '',
            joined: item?.user_data?.created_at,
        };
        localStorage.setItem('shop_info', JSON.stringify(shop_info));

        router.push(`/post-cards/${item.user_data.name}/${item.user_id}`);

    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 sm:gap-10 mx-3 sm:mx-0'>

            {
                shop_data?.data?.map((item, index) =>
                    <Card02 onClick={() => goToShopDetailsPage(item)}
                        key={index}
                        src={item?.user_data?.image_url ? (BaseUrlSrc + item?.user_data?.image_url) : iDefaultShop}
                        title={item?.user_data?.name}
                        stars={item.rate}
                        total_cards={item.shop_cards_count}

                    />
                )
            }

        </div>
    );
}

export default Gallery;
