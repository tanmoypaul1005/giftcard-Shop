/* eslint-disable react-hooks/exhaustive-deps */
// import Image from 'next/image'
import Head from 'next/head';
import Card04 from '../../components/Card/Card04';
import Toolbar from '../../components/Toolbar/Toolbar';
import { iDefaultShop } from '../../components/Utilities/Sources';
import { app_name } from '../../app/utils/const';
import usePostcardStore, { getPostcardData, getPostcardPaginateData } from '../../app/stores/PostcardStore';
import { useEffect } from 'react';
import { BaseUrlSrc } from '../../app/utils/Url';
import { RotatingLines } from 'react-loader-spinner';
import { useRouter } from 'next/router';
import useCreateRequestStore from '../../app/stores/CreateCardStore';
import { useTranslation } from 'react-i18next';
import NoDataAvailable from '../../components/others/NDA';


export default function PostCards() {
    const { postcards, is_pagination_loading, setSelectedTab } = usePostcardStore();
    const router = useRouter();
    const { shop_id, category_index } = router.query;
    const { setSelectedCard, create_card_form, setCreateCardForm } = useCreateRequestStore();
    const { t } = useTranslation();



    useEffect(() => {
        if (!category_index) getPostcardData();

        const handleScroll = (e) => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) getPostcardPaginateData(shop_id ?? null);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (item) => {
        router.push(`/post-cards/details/${item?.id}`);
        setSelectedCard(item);
        setCreateCardForm({ ...create_card_form, card_id: item.id });
    }


    return (
        <div>
            <Head>
                <title>{app_name} | {t('Post Cards')}</title>
                <meta name="description" content="Post Card Printing" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='bg-white md:bg-blueGray-50 pb-10'>
                <div className='custom-container pt-5 md:pt-10'>

                    <div className='text-center mb-10 mx-3 md:mx-0'>
                        <div className='text-2xl md:text-4xl font-bold text-[#211F32] mb-3 md:mb-5'>{t('Post Cards')}</div>
                        <div className='max-w-lg mx-auto'>{t('Select a card to order')}</div>
                    </div>

                    <Toolbar />

                    {postcards?.length > 0 ?
                        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 sm:gap-10 mx-3 sm:mx-0'>

                            {
                                postcards.map((item, index) =>
                                    <Card04
                                        onClick={() => handleClick(item)}
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

                    {is_pagination_loading && <div className='flex flex-row justify-center items-center my-5'>
                        <RotatingLines
                            width="100"
                            strokeColor="#FB607F"
                            strokeWidth={4}
                            strokeWidthSecondary={3}
                        />
                    </div>}

                </div>
            </div>
        </div>
    );
}
