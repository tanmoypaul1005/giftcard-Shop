import React from 'react'

const LabelChip = ({ label, selected_label, onClick }) => {
    return (
        <div onClick={onClick} className="flex items-center space-x-1 mr-3 cursor-pointer">
            <div className={`${selected_label === label ? "bg-cBrand text-white " : "bg-white text-cBrand border-cBrand border-[1px]"} text-sm rounded-md px-2 py-1`}>{label}</div>
        </div>
    );
}

export default LabelChip