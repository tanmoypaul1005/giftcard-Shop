import { AiFillCaretDown } from 'react-icons/ai';
import Dropdown02 from "../../../components/Dropdown/Dropdown02";

const DateDropdown = () => {
    return ( 
        <Dropdown02
            width={48}
            button={(
                <button className="px-3 font-semibold border border-gray-300 hover:border-[#73A3E7] bg-blueGray-50 hover:bg-[#D0E0F7] text-gray-700 transition-all ease-in h-10 rounded-md text-md focus:outline-none flex justify-center items-center">
                    Today
                    <AiFillCaretDown className="text-md ml-2"/>
                </button>
            )}
            body={(
                <div className="py-1 bg-white shadow-c1 rounded-md">
                    <div className="py-2 px-3 hover:bg-gray-200 cursor-pointer">Today</div>
                    <div className="py-2 px-3 hover:bg-gray-200 cursor-pointer">Tomorrow</div>
                    <div className="py-2 px-3 hover:bg-red-200 hover:text-red-600 cursor-pointer">Yesterday</div>
                </div>
            )}
        />
    );
}
 
export default DateDropdown;