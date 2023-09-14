import SwiperTestimonial from "./SwiperTestimonial";

const Testimonial = () => {
    return (
        <div className='bg-white pb-28 md:pt-36'>
            <div className='pt-10'>

                <div className='text-center mb-5 xl:mb-10'>
                    <div className='text-4xl font-bold text-[#211F32] mb-5'>Testimonial</div>
                    <div className='max-w-lg mx-auto'>See what our users feedback</div>
                </div>

                <SwiperTestimonial />

            </div>
        </div>
    );
}

export default Testimonial;