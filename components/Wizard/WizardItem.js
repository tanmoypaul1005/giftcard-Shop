const WizardItem = ({hide_line=false, color, icon, text}) => {
    return ( 
        <>
            {!hide_line && <div className={`w-full h-1 rounded-full mb-10 -mx-4 ${color}`}></div>}
            <div className='flex flex-col items-center justify-center text-xs'>
                <div className={`w-8 h-8 rounded-full center mb-2 text-white z-10 ${color}`}>
                    {icon}
                </div>
                <div className='w-20 text-center'>
                    <div className='text-black'>{text}</div>
                </div>
            </div>
        </>
     );
}
 
export default WizardItem;