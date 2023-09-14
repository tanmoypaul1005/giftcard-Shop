/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Link from "next/link";
import LogoutModal from '../../pages/profile/LogoutModal';
import { Toastr } from '../../app/utils/UtilityFunctions';
import AxiosHeader from '../../app/utils/AxiosHeader';
import { useEffect, useState } from 'react';
import useAuthStore, { getAuthUserInformation } from '../../app/authStore';
import useCreateRequestStore from '../../app/stores/CreateCardStore';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ }) => {

    const [logoutModal, setLogoutModal] = useState(false);
    const router = useRouter();
    const { user_profile_api_data } = useAuthStore();
    const { setAddressSource, address_source } = useCreateRequestStore();
    const { t } = useTranslation();

    let user = getAuthUserInformation();
    useEffect(() => {
        user = getAuthUserInformation();
    }, [user_profile_api_data])


    return (
        <div className="bg-white shadow h-screen w-[18rem] hidden md:block">
            <div className="pt-0">

                <div onClick={() => router.push('/profile')} className="py-5 flex items-center space-x-3 border-b mb-8 px-5 cursor-pointer">
                    <div className="bg-gray-400 h-8 w-8 relative overflow-hidden rounded-full">
                        <img className="h-full w-full rounded-full" src={user?.image_url ?? '/Images/profile.png'} alt="Post Card Image" layout="fill" objectFit="cover" />
                    </div>
                    <div className={`text-md inline truncate w-3/4 ${router.pathname == '/profile' && 'text-cBrand font-bold'}`}>{user?.name ?? 'NA'}</div>
                </div>

                <div className="flex flex-col justify-between space-y-4 text-md pb-3">

                    <SidebarItem title={t("Account Settings")} link="/profile/account-settings" />

                    <SidebarItem onClick={() => setAddressSource({ ...address_source, is_from_create: false })} title={t("Address Book")} link="/profile/address-book" />

                    <SidebarItem title={t("Order History")} link="/profile/order-history" />


                    <div onClick={() => setLogoutModal(true)} className={`p-2 px-5 cp`}>
                        {t('Logout')}
                    </div>

                </div>

            </div>

            <LogoutModal
                show_modal={logoutModal}
                setShowModal={setLogoutModal}
                onConfirm={() => {
                    try {
                        localStorage.removeItem('postcard_token');
                        AxiosHeader({ token: null })
                        setLogoutModal(false);
                        router.push('/');
                        Toastr({ message: t('Logged out successfully!'), type: 'success' });
                    } catch (error) {
                        Toastr({ message: t(t('An error occurred!')), type: 'error' });
                    }


                }}
            />

        </div>
    );
}

export default Sidebar;


const SidebarItem = ({ title, link, onClick = () => { } }) => {

    const router = useRouter();
    return (
        <div onClick={onClick} className={`p-2 px-5 cp ${router.pathname == `${link}` && "bg-cTintBrick text-cBrand font-fw600"}`}>
            <Link href={link}>{title}</Link>
        </div>
    )
}