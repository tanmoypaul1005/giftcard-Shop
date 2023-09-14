import { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { submitOrderFeedback } from '../../../app/stores/OrderHistoryStore';

const FeedbackForm = ({ data = null, onSubmit = () => { }, setShowModal }) => {
    const [rating, setRating] = useState(5);
    const [feedback, setFeedback] = useState('');
    useEffect(() => {
        setRating(5);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('data', rating, feedback, data?.order_payment?.order_id);
        const order_id = data?.order_payment?.order_id;
        const success = await submitOrderFeedback(order_id, rating, feedback);
        if (success) setShowModal(false);
    }
    return (
        <div>
            <div className="mt-10 text-center">
                <div className="my-3 font-semibold text-2xl">Give Feedback At {data?.post_card?.shop?.name}</div>
                <div className="flex justify-center items-center md:space-x-3">
                    <AiFillStar onClick={() => setRating(1)} className={`text-5xl cursor-pointer md:text-6xl ${rating >= 1 ? 'text-yellow-400' : 'text-gray-200'}`} />
                    <AiFillStar onClick={() => setRating(2)} className={`text-5xl cursor-pointer md:text-6xl ${rating >= 2 ? 'text-yellow-400' : 'text-gray-200'}`} />
                    <AiFillStar onClick={() => setRating(3)} className={`text-5xl cursor-pointer md:text-6xl ${rating >= 3 ? 'text-yellow-400' : 'text-gray-200'}`} />
                    <AiFillStar onClick={() => setRating(4)} className={`text-5xl cursor-pointer md:text-6xl ${rating >= 4 ? 'text-yellow-400' : 'text-gray-200'}`} />
                    <AiFillStar onClick={() => setRating(5)} className={`text-5xl cursor-pointer md:text-6xl ${rating >= 5 ? 'text-yellow-400' : 'text-gray-200'}`} />
                </div>
            </div>

            <form onSubmit={handleSubmit}>

                <div className="bg-white border rounded-lg md:max-w-lg md:mx-auto mx-5 my-5">
                    <textarea maxLength={250} required onChange={(e) => setFeedback(e.target.value)} className="h-full w-full resize-none rounded-md outline-none p-5" id="w3review" name="w3review" rows="4" cols="50" placeholder="Write here...">
                        {feedback}
                    </textarea>
                    <div className='text-right'>{feedback?.length}/250</div>
                </div>

                <div className="x-center mt-10">
                    <button onClick={() => onSubmit()} className="mx-auto px-16 md:px-12 py-3 md:py-2 bg-cBrand text-white transition-all ease-in rounded-md md:text-base font-bold shadow">
                        Submit
                    </button>
                </div>

            </form>
        </div>
    );
}

export default FeedbackForm;