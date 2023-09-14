import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({button, content}) => {

    const [is_active, setIsActive] = useState(false)

    const toggle = () => {
        setIsActive(true)
    }
    
    const wrapperRef = useRef(null);


    // ! This useEffect is to detect outside click out of this component
    useEffect(() => {
        function handleClickOutside(event) {
          if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                console.log("Clicked Outside");
                setIsActive(false)
          }
        }
        // ! Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // ! Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
    
    return ( 
        <div ref={wrapperRef} className='relative mr-5 lg:mr-16 inline-block'>
            <div onClick={toggle} >
                {button}
            </div>

            {is_active && content}
            
        </div>
     );
}
 
export default Dropdown;