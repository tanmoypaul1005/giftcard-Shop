import Search from '../../components/Input/Search';
import FilterButton from '../../components/Toolbar/FilterButton';

const OptionBar = () => {
    return (
        <div className='mx-3 md:mx-0'>
            <div className='mb-3'>
                <div className='border-b w-full pb-3 flex justify-between md:justify-end items-center'>
                    <div className=''>
                        <FilterButton />
                    </div>
                    <Search className="w-48 sm:w-56 xl:w-80 block md:hidden" className2='bg-blueGray-50' />
                </div>

                {/* <div>
                    <div className='block md:hidden text-lg font-semibold pt-3'>Popular</div>
                    <div className='text-right md:text-left text-sm md:text-base md:font-semibold md:pt-3'>150 Shops in popular list</div>
                </div> */}

            </div>
        </div>
    );
}

export default OptionBar;