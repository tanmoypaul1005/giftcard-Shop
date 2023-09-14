import { useEffect } from "react";
import usePostcardStore, { getPostcardData } from "../../app/stores/PostcardStore";
import Search from "../Input/Search";
import CategoryTabs from "./CategoryTabs";
import FilterButton from "./FilterButton";

const Toolbar = () => {
    const { search_key, setSearchKey } = usePostcardStore();

    useEffect(() => {
        // ! Using debounce
        const timer = setTimeout(() => getPostcardData(null, null, search_key), 500)
        return () => clearTimeout(timer)
    }, [search_key]);

    return (
        <div className='mx-3 md:mx-0'>
            <div className='md:flex justify-start items-center mb-10'>
                <div className='border-b md:border-b-0 w-full md:w-auto pb-3 md:pb-0 flex justify-between items-center'>
                    <div className='mr-5 lg:mr-16 '>
                        <FilterButton />
                    </div>

                    <Search
                        className="w-48 sm:w-56 xl:w-80 block md:hidden"
                        className2='bg-blueGray-50'
                        search={(e) => setSearchKey(e.target.value)}
                        name='search_key'
                        value={search_key}
                    />
                </div>

                <CategoryTabs />

            </div>

        </div>
    );
}

export default Toolbar;