import React, { useState } from 'react';

const Switch01 = ({ is_on, setIsOn }) => {


    const Toggle = () => {
        setIsOn(!is_on)
    }

    return (
        <div onClick={Toggle} className="relative cp w-10 h-5 bg-gray-300 rounded-full">
            <div className={`${is_on ? 'translate-x-full' : 'translate-x-0'} ${is_on ? 'bg-cBrand' : 'bg-[#000000]'} absolute-start transition ease-in w-5 h-5 rounded-full`}></div>
        </div>
    );
}

export default Switch01;