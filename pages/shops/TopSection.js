import Image from 'next/image'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useShopStore from '../../app/stores/ShopStore';
import Search from '../../components/Input/Search';

const TopSection = () => {
    const { t } = useTranslation();
    const [search, setSearch] = useState('');
    const { shop_data, temp_shop_data, setShopData } = useShopStore();

    const handleSearch = (e) => {
        setSearch(e.target.value);
        // console.log('handleSearch: ', data);
        let shops = temp_shop_data?.data?.filter((item) => {
            if (item?.user_data?.name?.toLowerCase().includes(e.target.value.toLowerCase())) {
                return item;
            }
        });
        setShopData({ ...shop_data, data: shops });
    }

    return (
        <div className='text-center justify-center flex flex-col items-center mb-10 mx-3 md:mx-0'>

            <div className='text-2xl md:text-4xl font-bold text-[#211F32] mb-3 md:mb-5'>{t('Shops')}</div>

            <div className='w-[350px]'>
                <Search search={handleSearch} value={search} />
            </div>

        </div>
    );
}

export default TopSection;