import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import useCreateRequestStore from "../../app/stores/CreateCardStore";
import useGeneralStore from "../../app/stores/GeneralController";
import { BaseUrlSrc } from "../../app/utils/Url";
import Card01 from "../../components/Card/Card01";
import Card04 from "../../components/Card/Card04";
import { iDefaultShop } from "../../components/Utilities/Sources";

const PopularFeature = () => {
    const { home_data } = useGeneralStore();
    const { setSelectedCard, create_card_form, setCreateCardForm } = useCreateRequestStore();
    const router = useRouter();
    const { t } = useTranslation();


    const handleClick = (item) => {
        router.push(`/post-cards/details/${item?.id}`);
        setSelectedCard(item);
        setCreateCardForm({ ...create_card_form, card_id: item.id });
    }

    return (
        <div className='bg-blueGray-50 pb-10'>
            <div className='custom-container pt-10'>

                <div className='text-center mb-5 xl:mb-10'>
                    <div className='text-4xl font-bold text-[#211F32] mb-5'>{t('Popular Cards')}</div>
                    <div className='max-w-lg mx-auto'>{t('Order a card from popular ones')}</div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 sm:gap-10 mx-5 sm:mx-0'>
                    {/* {
                        home_data?.popular_cards?.map((item, index) => (
                            <Card01 key={index} src={item?.image ? (BaseUrlSrc + item.image) : iDefaultShop} text={item?.name ?? ''} />
                        ))
                    } */}

                    {
                        home_data?.popular_cards?.map((item, index) =>
                            <Card04
                                onClick={() => handleClick(item)}
                                key={index}
                                src={item?.image ? (BaseUrlSrc + item.image) : iDefaultShop}
                                title={item?.name}
                                stars={5}
                                text={`${t('Price')} ¥${item?.price}`}
                                sold_count={item?.sold_count}
                            />)
                    }

                </div>

            </div>
        </div>
    );
}

export default PopularFeature;