import Input01 from "../../../components/Input/Input01";

const BillingDetails = () => {
    return (
        <div className="mb-5">
            <div className="text-lg font-semibold mb-5">
                <span className="mr-2 px-2 border-2 border-[#3498DB] rounded-full text-[#3498DB] inline md:hidden">1</span>
                <span className="hidden md:inline mr-2">1.</span>
                Billing Details
            </div>
            
            <Input01 name="name" value="Genie InfoTech" label="Name*" placeholder=""/>
            <Input01 name="email" label="Email" placeholder=""/>

            <div className="grid grid-cols-2 gap-2 md:gap-16 2xl:gap-16">
                <Input01 name="phone" label="Phone*" placeholder=""/>
                <Input01 name="post_code" label="Postcode*" placeholder=""/>
            </div>

            <Input01 name="city" label="City*" placeholder=""/>
            <Input01 name="address" label="Address*" placeholder=""/>
            
            <div className="form-check cp">
                <input type="checkbox" id="save_info_form_signup" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cp"/>
                <label className="form-check-label inline-block text-gray-800 cp" htmlFor="save_info_form_signup">
                    Save info for Sign Up
                </label>
            </div>
            
        </div>
    );
}
 
export default BillingDetails;