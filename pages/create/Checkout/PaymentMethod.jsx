import Card05 from "../../../components/Card/Card05";
import Input01 from "../../../components/Input/Input01";
import { BANK_TRANSFER, COD, COIN, CREDIT_CARD } from "../../../components/Utilities/Sources";

const PaymentMethod = () => {
    return (
        <div className="mb-5 bg-gray-100 md:bg-transparent p-5 md:p-0 rounded-lg">
            <div className="text-xl md:text-lg font-semibold mb-5">4. Payment Method</div>

            <div className='grid grid-cols-3 sm:grid-cols-4 gap-5 sm:gap-10 mx-0 sm:mx-0 mb-5 overflow-x-scroll'>
                <Card05 src={CREDIT_CARD} title="Credit Card"/>
                <Card05 src={BANK_TRANSFER} title="Bank Transfer"/>
                <Card05 src={COD} title="COD"/>
                <Card05 src={COIN} title="Coin"/>
            </div>
            
            <Input01 name="card_number" label="Card Number" placeholder=""/>

            <div className="grid grid-cols-2 gap-5 md:gap-16 2xl:gap-16">
                <Input01 name="expiry" label="Expiry" placeholder=""/>
                <Input01 name="cvv" label="CVV" placeholder=""/>
            </div>

            <Input01 name="card_number" label="Card Number" placeholder=""/>
            
            <div className="form-check cp">
                <input type="checkbox" id="save_this_card" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cp"/>
                <label className="form-check-label inline-block text-gray-800 cp" htmlFor="save_this_card">
                    Save this card
                </label>
            </div>
            
        </div>
    );
}
 
export default PaymentMethod;