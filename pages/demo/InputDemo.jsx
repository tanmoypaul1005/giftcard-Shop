/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from 'react'
import Input01 from "../../components/Input/Input01";
import Search from "../../components/Input/Search";
import { BsCalendar2WeekFill, BsClockFill } from 'react-icons/bs';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const InputDemo = () => {

    const [show_password, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!show_password)
    }

    return (
        <div className="bg-gray-300 h-screen p-10">
            <Search className="mb-5 w-80 shadow" className2='bg-blueGray-50' />
            <Search className="mb-5 w-96 shadow" className2='bg-blueGray-50' isRightIcon />

            <div className="bg-white shadow p-10 max-w-2xl rounded-md">
                <div className="grid grid-cols-2 gap-2 md:gap-16 2xl:gap-16">
                    <Input01 name="" label="First Name" placeholder="Enter Fiest Name" />
                    <Input01 name="" label="Last Name" placeholder="Enter Last Name" />
                </div>

                <Input01 name="" type="email" label="Email" placeholder="Enter Email address" />
                <Input01 name="password" type={!show_password && "password"} placeholder="Enter Password"
                    label={(
                        <div className='flex items-center justify-between'>
                            <div>Password*</div>
                            <div className='text-[#D02222] font-semibold'>Forgot Password?</div>
                        </div>
                    )}
                    icon={show_password ? (
                        <AiFillEye onClick={toggleShowPassword} className="h-[90%] text-xl cursor-pointer" />
                    ) : (
                        <AiFillEyeInvisible onClick={toggleShowPassword} className="h-[90%] text-xl cursor-pointer" />
                    )} />
                <Input01 name="" label="Date" placeholderz="Enter Date" pipe icon={<BsCalendar2WeekFill className="h-[70%] cursor-pointer" />} />


                <Input01 name=""
                    value="https://www.arnob.com/join/sxq-nnc-wnn"
                    is_readonly
                    className="my-5"
                    className3="py-5"
                    label={(
                        <div className="font-semibold text-gray-800">Your Referral link</div>
                    )}
                    icon={(
                        <button className="mx-auto px-10 py-2 bg-cBrand text-white transition-all ease-in rounded-md text-sm md:text-base font-bold shadow">
                            Copy
                        </button>
                    )}
                />

            </div>
        </div>
    );
}

export default InputDemo;