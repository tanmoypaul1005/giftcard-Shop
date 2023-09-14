import Input01 from "../../../components/Input/Input01";

const ShippingDetails = () => {
    return (
        <div className="mb-5">
            <div className="text-lg font-semibold mb-5">
                <span className="mr-2 px-1.5 border-2 border-[#3498DB] rounded-full text-[#3498DB] inline md:hidden">2</span>
                <span className="hidden md:inline mr-2">2.</span>
                Shipping Details
            </div>
            
            <Input01 name="name" value="Genie InfoTech" label="Name*" placeholder=""/>
            <Input01 name="email" label="Email" placeholder=""/>

            <div className="grid grid-cols-2 gap-2 md:gap-16 2xl:gap-16">
                <Input01 name="phone" label="Phone*" placeholder=""/>
                <Input01 name="post_code" label="Postcode*" placeholder=""/>
            </div>

            <Input01 name="city" label="City*" placeholder=""/>
            <Input01 name="address" label="Address*" placeholder=""/>
            
        </div>
    );
}
 
export default ShippingDetails;