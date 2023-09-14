const WizardItem = ({hide_line=false, color, icon, text, onClick,  is_clickable}) => {
    return ( 
        <>
            {!hide_line && <div  className={`w-full h-1  rounded-full mb-10 md:mb-7 lg:mb-8 -mx-10 md:-mx-16 ${color}`}></div>}
            <div className='flex flex-col items-center justify-center text-xs'>
                <div onClick={is_clickable ?onClick : null} className={`w-6 h-6 md:w-8 md:h-8 rounded-full center mb-5 md:mb-2 text-white z-10 ${color} ${is_clickable? 'cursor-pointer': 'cursor-not-allowed'}`}>
                    {icon}
                </div>
                <div className='w-20 md:w-32 text-center'>
                    <div className='text-black text-xs md:text-base block truncate'>{text}</div>
                </div>
            </div>
        </>
     );
}
 
export default WizardItem;