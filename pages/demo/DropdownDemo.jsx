import Dropdown from "../../components/Dropdown/Dropdown";
import { VscSettings } from 'react-icons/vsc'
import { AiFillSetting } from 'react-icons/ai'

const DropdownDemo = () => {
    return ( 
        <div className="bg-gray-300 ">
            <div className="h-screen p-10 custom-container">

                <Dropdown
                    button={(
                        <button className="px-3 font-semibold border border-gray-300 hover:border-[#73A3E7] bg-blueGray-50 hover:bg-[#D0E0F7] text-gray-900 transition-all ease-in h-10 rounded-md text-md focus:outline-none flex justify-center items-center">
                            <VscSettings className="text-xl mr-2 -rotate-90"/>
                            Filter
                        </button>
                    )}
                    content={(
                        <div className='absolute-top z-10'>
                            <button className="px-16 font-semibold border-x border-t border-gray-300 bg-white text-gray-900 transition-all ease-in h-10 rounded-t-md text-md focus:outline-none flex justify-center items-center">
                                <VscSettings className="text-xl mr-2 -rotate-90"/>
                                Filter
                            </button>
                            <div className='relative h-40 bg-white border border-gray-300 rounded-b-lg'>

                            </div>
                        </div>
                    )}
                />


                <Dropdown
                    button={(
                        <button className="px-3 font-semibold border border-gray-300 hover:border-[#73A3E7] bg-blueGray-50 hover:bg-[#D0E0F7] text-gray-900 transition-all ease-in h-10 rounded-md text-md focus:outline-none flex justify-center items-center">
                            <AiFillSetting className="text-xl"/>
                        </button>
                    )}
                    content={(
                        <div className='absolute top-12 left-1/2 transform  -translate-x-1/2 z-10'>
                            <button className="px-16 font-semibold border-x border-t border-gray-300 bg-white text-gray-900 transition-all ease-in h-10 rounded-t-md text-md focus:outline-none flex justify-center items-center">
                                <AiFillSetting className="text-xl mr-2"/>
                                Select
                            </button>
                            <div className='relative h-40 bg-white border border-gray-300 rounded-b-lg'>

                            </div>
                        </div>
                    )}
                />

            </div>
        </div>
     );
}
 
export default DropdownDemo;