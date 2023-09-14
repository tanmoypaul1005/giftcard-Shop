import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RotatingLines } from "react-loader-spinner";
import useCreateRequestStore from "../../../app/stores/CreateCardStore";
import usePostcardStore, { getPostcardData, getPostcardPaginateData } from "../../../app/stores/PostcardStore";
import { BaseUrlSrc } from "../../../app/utils/Url";
import Card04 from "../../../components/Card/Card04";
import NoDataAvailable from "../../../components/others/NDA";
import Toolbar from "../../../components/Toolbar/Toolbar";
import { iDefaultShop } from "../../../components/Utilities/Sources";

const FrameGrid = ({ is_gift_ready }) => {
    const { postcards, is_pagination_loading, setSelectedTab } = usePostcardStore();
    const { setSelectedCard, setCreateCardForm, create_card_form, setCurrState } = useCreateRequestStore();

    useEffect(() => {
        const handleScroll = (e) => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) getPostcardPaginateData();
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const selectCard = (card) => {
        // console.log('Selected Card: ', card);
        setCreateCardForm({ ...create_card_form, card_id: card?.id });
        setSelectedCard(card);
        window.scrollTo(0, 150);
    }

    const { t } = useTranslation();

    return (
        <div className='custom-container'>

            <div className='text-center mb-5 mt-10'>
                <div className='text-2xl md:text-4xl font-bold text-[#211F32] mb-10'>{t('Choose Card')}</div>
            </div>

            {!is_gift_ready && <div className="text-center mb-10">

                <button onClick={() => setCurrState('write_message')} className="mx-auto px-12 py-2 bg-white hover:bg-gray-600 text-gray-600 hover:text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow">
                    {t('Back')}
                </button>
            </div>}


            <Toolbar />

            {postcards?.length > 0 ? <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-5 sm:gap-10 mx-3 sm:mx-0'>
                {
                    postcards.map((item, index) =>
                        <Card04
                            onClick={() => selectCard(item)}
                            key={index}
                            src={item?.image ? (BaseUrlSrc + item.image) : iDefaultShop}
                            title={item?.name}
                            stars={5}
                            text={`${t('Price')} ¥${item?.price}`}
                            sold_count={item?.sold_count}
                        />
                    )
                }
            </div>
                :
                <NoDataAvailable onClick={async () => {
                    await getPostcardData();
                    setSelectedTab(-1);
                }} />
            }

            {is_pagination_loading &&
                <div className='flex flex-row justify-center items-center my-5'>
                    <RotatingLines
                        width="100"
                        strokeColor="#FB607F"
                        strokeWidth={4}
                        strokeWidthSecondary={3}
                    />
                </div>
            }

        </div>
    );
}

export default FrameGrid;