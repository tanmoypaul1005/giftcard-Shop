import React, { useEffect, useState } from 'react'

import { IoIosArrowForward } from 'react-icons/io';

const Accordion = ({accordion_type = "independent", customOnClick, className = '', isInitOpen = false, header = '', body = '', no_border = false}) => {
    // ! isInitOpen = "Decides whether SidebarAccordion should be opened initially"
    // ! accordion_type = independent --> can open multiple accordion at a time
    // ! accordion_type = dependent --> can open only one accordion at a time

    const [isOpen, setIsOpen] = useState(isInitOpen)

    useEffect(() => {
        if(accordion_type == 'dependent') {
            // ! If accordion_type is dependent --> control accordion with isInitOpen prop
            setIsOpen(isInitOpen)
        }
    }, [isInitOpen])

    const onClick = () => {
        setIsOpen(!isOpen)
        customOnClick && customOnClick()
    }
    
    return (
        <div className={`text-md py-2  text-gray-800 ${className}`}>
            <div onClick={onClick} className={`flex justify-between items-center w-full cp ${!no_border && 'border-b'} ${isOpen && 'border-red-500'}`}>
                <div className='flex items-center text-sm font-medium'>
                    {header}
                </div>
                <IoIosArrowForward className={`transition-transform ${isOpen && 'rotate-90'}`} />
            </div>
            <div className={`overflow-hidden transition-[max-height] duration-300 ${!isOpen ? 'max-h-0' : 'max-h-[40rem]'}`}>
                <div className='pt-3'></div>
                {body}
            </div>
        </div>
    )
}

export default Accordion