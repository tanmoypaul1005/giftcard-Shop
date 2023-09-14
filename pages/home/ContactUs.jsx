/* eslint-disable react-hooks/exhaustive-deps */
import Input01 from "../../components/Input/Input01";
import { useEffect, useState } from "react";
import useAuthStore from "../../app/authStore";
import { contactUs } from "../../app/stores/GeneralController";
import { useTranslation } from "react-i18next";
/* eslint-disable @next/next/no-img-element */

const ContactUs = () => {
    const { isLoggedIn } = useAuthStore()
    const [contact_form, setContactForm] = useState({ name: '', email: '', subject: '', message: '', });

    const handleFormChange = (e) => {
        setContactForm({ ...contact_form, [e.target.name]: e.target.value });
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const is_success = await contactUs(contact_form.name, contact_form.email, contact_form.subject, contact_form.message);
        if (is_success) setContactForm({ name: '', email: '', subject: '', message: '', });
    }

    useEffect(() => {
        if (isLoggedIn) {
            const user = JSON.parse(localStorage.getItem('user'));
            setContactForm({ ...contact_form, name: user.name, email: user.email });
        }
    }, [])

    const { t } = useTranslation();


    return (
        <div id="contact-us" className="relative bg-[#f4ecff33] center overflow-hidden mt-32">

            <div className="grid grid-cols-12 md:gap-7 max-w-4xl z-10">

                <div className="col-span-12 md:col-span-5 my-auto px-5 md:px-0 py-10 md:py-0">
                    <div className="text-2xl md:text-4xl font-bold mb-5">{t('Contact Us')}</div>
                </div>

                <form onSubmit={handleFormSubmit}>

                    <div
                        className="col-span-12 md:col-span-7 bg-white shadow p-5 md:p-8 md:rounded-lg md:mt-10 md:mb-20 w-[450px]">
                        <Input01 onChange={handleFormChange} name="name" type="text" value={contact_form.name} label={t("Name*")} placeholder="Jon Dao" required />

                        <Input01 onChange={handleFormChange} name="email" type="email" value={contact_form.email} label={t("Email*")} placeholder="example@mail.com" required />

                        <Input01 onChange={handleFormChange} name="subject" type="text" value={contact_form.subject} label={t("Subject") + '*'} placeholder={t("re-fund")} required />

                        <Input01 onChange={handleFormChange} name="message" type="text" value={contact_form.message} label={t("Message") + '*'} placeholder={t("Write here..")} textarea
                            required />



                        <button type={"submit"}
                            className={`mx-auto mt-5 mb-5 md:mb-0 px-5 py-3 md:py-2 bg-cBrand text-white transition-all ease-in rounded-md text-sm font-bold shadow`}>
                            {t('Send Message')}
                        </button>
                    </div>

                </form>

            </div>

            <img
                className='absolute top-0 left-0 md:top-1/2 md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-[24rem] md:w-[70rem]'
                src="/Images/contact-us-bg-01.svg" alt="" />
            <img
                className='absolute bottom-0 right-0 md:top-1/2 md:right-0 transform md:-translate-y-1/2 w-[10rem] md:w-[20rem] z-20 md:z-0'
                src="/Images/contact-us-bg-02.svg" alt="" />

        </div>
    );
}

export default ContactUs;