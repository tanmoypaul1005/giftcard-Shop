/* eslint-disable @next/next/no-img-element */
const JoinUs = () => {
    return ( 
        <div className='relative bg-[#00949D] py-5 overflow-hidden'>
            
            <div className='custom-container py-5'>

                <div className='text-center mb-10'>
                    <div className='text-2xl md:text-4xl font-bold text-white mb-5'>Register Your Shop & Earn</div>
                </div>

                <div className='x-center'>
                    <button className="mx-auto px-12 py-2 bg-white transition-all ease-in rounded-md text-md font-bold shadow">
                        Join Us
                    </button>
                </div>

            </div>

            <img className='absolute top-1/2 left-[-250px] md:left-[-100px] transform -translate-y-1/2 w-[20rem] md:w-[30rem] opacity-70' src="/Images/Ornaments/Ornament 22.png" alt="" />
            <img className='absolute top-[5px] md:top-[25px] right-[-55px] md:right-[75px] transform -translate-x-1/2 -translate-y-1/2 w-28 md:w-56 opacity-30' src="/Images/Ornaments/Ornament 23.png" alt="" />
            <img className='absolute top-[150px] right-[-90px] md:right-[-155px] transform -translate-x-1/2 -translate-y-1/2 w-24 md:w-56 opacity-30' src="/Images/Ornaments/Ornament 74.png" alt="" />
        </div>
     );
}
 
export default JoinUs;