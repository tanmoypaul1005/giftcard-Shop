import { GrClose } from 'react-icons/gr'
import { CgRadioChecked, CgRadioCheck } from 'react-icons/cg'

const FilterContent = ({ toggle }) => {
    return (
        <div>
            <div className='pb-5 mb-5 border-b border-gray-300'>
                <div className="text-lg font-semibold text-gray-700 mb-2">Sort By</div>
                <div className="text-md text-gray-700 flex items-center cp mb-1">
                    <CgRadioChecked className='text-xl text-cBrand mr-2' /> All
                </div>
                <div className="text-md text-gray-700 flex items-center cp mb-1">
                    <CgRadioCheck className='text-xl mr-2' /> Popular
                </div>
                <div className="text-md text-gray-700 flex items-center cp mb-1">
                    <CgRadioCheck className='text-xl mr-2' /> Recommended
                </div>
                <div className="text-md text-gray-700 flex items-center cp mb-1">
                    <CgRadioCheck className='text-xl mr-2' /> Best Selling
                </div>
            </div>

            <div className='pb-5 mb-5 md:border-b border-gray-300'>
                <div className="text-lg font-semibold text-gray-700 mb-2">Sort By</div>
                <div className="text-md text-gray-700 flex items-center cp mb-1">
                    <CgRadioChecked className='text-xl text-cBrand mr-2' /> Newest
                </div>
                <div className="text-md text-gray-700 flex items-center cp mb-1">
                    <CgRadioCheck className='text-xl mr-2' /> Popular
                </div>
                <div className="text-md text-gray-700 flex items-center cp mb-1">
                    <CgRadioCheck className='text-xl mr-2' /> Recommended
                </div>
                <div className="text-md text-gray-700 flex items-center cp mb-1">
                    <CgRadioCheck className='text-xl mr-2' /> Best Selling
                </div>
            </div>

            <div className='hidden md:block'>
                <div className="text-lg font-semibold text-gray-700 mb-2">Sort By</div>
                <div className="text-md text-gray-700 flex items-center cp mb-1">
                    <CgRadioChecked className='text-xl text-cBrand mr-2' /> Newest
                </div>
                <div className="text-md text-gray-700 flex items-center cp mb-1">
                    <CgRadioCheck className='text-xl mr-2' /> Popular
                </div>
                <div className="text-md text-gray-700 flex items-center cp mb-1">
                    <CgRadioCheck className='text-xl mr-2' /> Recommended
                </div>
                <div className="text-md text-gray-700 flex items-center cp mb-1">
                    <CgRadioCheck className='text-xl mr-2' /> Best Selling
                </div>
            </div>
        </div>
    );
}

export default FilterContent;