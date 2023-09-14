import Input01 from "../../../components/Input/Input01";
import { BsCalendar2WeekFill, BsClockFill } from 'react-icons/bs';

const DeliveryType = () => {
    return (
        <div className="mb-5">
            <div className="text-xl md:text-lg font-semibold mb-5 hidden md:block">3. Delivery Type</div>
            
            <div className="grid grid-cols-2 gap-5 sm:flex items-center justify-start sm:space-x-5 mb-5">
                <button className="font-semibold px-3 border border-gray-300 hover:border-[#73A3E7] focus:border-[#73A3E7] bg-blueGray-50 hover:bg-[#D0E0F7] focus:bg-[#D0E0F7] text-gray-900 transition-all ease-in h-10 rounded-md text-md focus:outline-none">
                    In Store
                </button>
                <button className="font-semibold px-3 border border-gray-300 hover:border-[#73A3E7] focus:border-[#73A3E7] bg-blueGray-50 hover:bg-[#D0E0F7] focus:bg-[#D0E0F7] text-gray-900 transition-all ease-in h-10 rounded-md text-md focus:outline-none">
                    Home Delivery
                </button>
            </div>


            <div className="grid grid-cols-2 gap-5 md:gap-16 2xl:gap-16 p-5 md:p-0 bg-gray-100 md:bg-transparent rounded-lg">
                <Input01 name="deliver_date" label="Delivery Date" placeholder="" className="mb-0" icon={<BsCalendar2WeekFill className="h-[70%] cursor-pointer text-gray-600"/>}/>
                <Input01 name="delivery_time" label="Delivery Time" placeholder="" className="mb-0" icon={<BsClockFill className="h-[70%] cursor-pointer text-gray-600"/>}/>
            </div>
            
        </div>
    );
}
 
export default DeliveryType;