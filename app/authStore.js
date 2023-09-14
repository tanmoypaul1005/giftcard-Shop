import create from 'zustand'
import useUtilityStore from './stores/UtilityStore'
import { BaseUrlSrc, changePassword, forgetPasswordOtpVerification, iGetReferCode, kuUserSocialLogin, otpVerification, resendOTP, resetPassword, toggleSettings, updateUserProfile, userLogin, userProfile, userRegister } from './utils/Url'
import axios from 'axios'
import { Toastr } from './utils/UtilityFunctions'
import AxiosHeader from './utils/AxiosHeader'
import useUserAccountStore, { getUserVerificationInfo } from './stores/UserAccountStore'
import i18next, { t } from 'i18next';

const { setLoading } = useUtilityStore.getState()

const useAuthStore = create((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (value) => set({ isLoggedIn: value }),

    //login form 
    login_form: { email: '', password: '' },
    changeLoginFormValue: (e) => set((state) => state.login_form[e.target.name] = e.target.value),
    resetLoginFormValue: () => set((state) => state.login_form = { email: '', password: '' }),

    //register form 
    register_form: { name: '', email: '', password: '', password_confirmation: '', role: 'customer', refer_code: '' },
    changeRegisterFormValue: (e) => set((state) => state.register_form[e.target.name] = e.target.value),
    resetRegisterFormValue: () => set((state) => state.register_form = { name: '', email: '', password: '', password_confirmation: '', role: 'customer', refer_code: '' }),

    //otp form 
    otp_form: { otp: '' },
    changeOtpFormValue: (e) => set((state) => state.otp_form[e.target.name] = e.target.value),
    resetOtpForm: () => set((state) => state.otp_form = { otp: '' }),
    otp_email: '',
    setOtpEmail: (value) => set((state) => {
        state.otp_email = value
        localStorage.setItem('otp_email', value)
    }),

    // forget password form
    fp_form: { otp: '', email: '' },
    changeFpFormValue: (e) => set((state) => state.fp_form[e.target.name] = e.target.value),
    resetFpForm: () => set((state) => state.fp_form = { otp: '', email: '' }),
    reset_password_token: null,
    setResetPasswordToken: (value) => set((state) => {
        state.reset_password_token = value
        localStorage.setItem('reset_password_token', value)
    }),

    // user profile from local storage
    user_profile: { name: '', email: '', phone: '', image: null, address: '', city: '', post_code: '' },
    changeUserProfileValue: (e) => set((state) => state.user_profile[e.target.name] = e.target.value),
    changeUserProfileValueWithoutEvent: (name, value) => set((state) => state.user_profile[name] = value),

    // change password
    change_password_form: { old_password: '', password: '', password_confirmation: '' },
    changePasswordFormValue: (e) => set((state) => state.change_password_form[e.target.name] = e.target.value),
    resetChangePasswordFormValue: () => set((state) => state.change_password_form = { old_password: '', password: '', password_confirmation: '' }),

    // user profile from api
    user_profile_api_data: {},
    setUserProfileData: (value) => set((state) => state.user_profile_api_data = value),

    // refer code
    refer_code: '',
    setReferCode: (value) => set({ refer_code: value }),
}))

export const handleUserLogin = async (e, router) => {
    try {
        e.preventDefault()
        setLoading(true)
        const { login_form, setOtpEmail } = useAuthStore.getState()
        const res = await axios.post(userLogin, login_form);
        console.log('handleUserLogin: ', res.data);

        if (res.data.success) {
            if (res?.data?.data.user.is_active == 0) {
                Toastr({ message: t('Your account is deactivated!'), type: 'error' })
                setLoading(false);
                return;
            }
            localStorage.setItem('user', JSON.stringify(res.data.data.user))
            localStorage.setItem('is_verified', res.data.data.user.is_verified)
            localStorage.setItem('postcard_token', res.data.data.token);
            localStorage.setItem('gifty_app_lang_code', res.data.data.user.lang_code);
            useUserAccountStore.getState().setAppLanguage(res.data.data.user.lang_code);
            i18next.changeLanguage(res.data.data.user.lang_code);
            AxiosHeader({ token: res.data.data.token });
            getUserVerificationInfo();
            if (localStorage.is_verified == 0) {
                setOtpEmail(login_form.email)
                Toastr({ message: res.data.message, type: 'success' })
                router.push('/auth/submit-otp')
            }
        } else {
            Toastr({ message: res.data.message, type: 'error' })
        }
        setLoading(false)

    } catch (error) {
        console.log('handleUserLogin: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
    }
}

export const handleUserSocialLogin = async (router, provider, token, refer_code) => {
    try {
        if (!token) {
            Toastr({ message: t('Invalid Token!'), type: 'error' });
            return;
        }

        if (provider !== 'google') {
            Toastr({ message: t('Invalid Provider!'), type: 'error' });
            return;
        }

        setLoading(true)
        const { login_form, setOtpEmail } = useAuthStore.getState()
        const res = await axios.post(kuUserSocialLogin, {
            provider: provider,
            token: token,
            role: 'customer',
            refer_code: refer_code,
        });
        console.log('handleUserSocialLogin: ', res.data);

        if (res.data.success) {
            if (res?.data?.data.user.is_active == 0) {
                Toastr({ message: t('Your account is deactivated!'), type: 'error' })
                setLoading(false);
                return;
            }
            localStorage.setItem('user', JSON.stringify(res.data.data.user))
            localStorage.setItem('is_verified', res.data.data.user.is_verified)
            localStorage.setItem('postcard_token', res.data.data.token);
            localStorage.setItem('gifty_app_lang_code', res.data.data.user.lang_code);
            AxiosHeader({ token: res.data.data.token });
            getUserVerificationInfo();
            if (localStorage.is_verified == 0) {
                setOtpEmail(login_form.email)
                Toastr({ message: res.data.message, type: 'success' })
                router.push('/auth/submit-otp')
            }
        } else {
            Toastr({ message: res.data.message, type: 'error' })
        }
        setLoading(false)

    } catch (error) {
        console.log('handleUserSocialLogin: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
    }
}

export const handleUserRegistration = async (e, router) => {
    try {
        e.preventDefault()
        const { register_form, setOtpEmail } = useAuthStore.getState()

        if (register_form.password !== register_form.password_confirmation) {
            Toastr({ message: t('Password and Confirm Password must be same!'), type: 'error' })
            return
        } else if (register_form.password.length < 6) {
            Toastr({ message: t('Password must be at least 6 characters long!'), type: 'error' })
            return
        } else if (register_form.name.length < 4) {
            Toastr({ message: t('Name must be at least 4 characters long!'), type: 'error' })
            return
        }

        setLoading(true)
        const res = await axios.post(userRegister, register_form);
        console.log('handleUserRegistration: ', res.data);

        if (res.data.success) {
            localStorage.setItem('user', JSON.stringify(res.data.data.user))
            localStorage.setItem('is_verified', 0)
            localStorage.setItem('postcard_token', res.data.data.token);
            AxiosHeader({ token: res.data.data.token });
            setOtpEmail(register_form.email)
            Toastr({ message: res.data.message, type: 'success' })
            router.push('/auth/submit-otp');
        } else {
            Toastr({ message: res.data.message, type: 'error' })
        }
        setLoading(false)

    } catch (error) {
        console.log('handleUserRegistration: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
    }
}

export const handleOtpVerification = async (e, router) => {
    try {
        e.preventDefault()
        const { otp_form } = useAuthStore.getState()

        if (otp_form.otp.length != 4) {
            Toastr({ message: t('OTP Code must be 4 digits long!'), type: 'error' })
            return
        }

        setLoading(true)
        const res = await axios.post(otpVerification, otp_form);
        console.log('handleOtpVerification: ', res.data);

        if (res.data.success) {
            localStorage.setItem('user', JSON.stringify(res.data.data.user))
            localStorage.setItem('is_verified', 1)
            AxiosHeader({ token: res.data.data.token });
            Toastr({ message: res.data.message, type: 'success' })
            router.push('/auth/login');
        } else {
            Toastr({ message: res.data.message, type: 'error' })
        }
        setLoading(false)

    } catch (error) {
        console.log('handleOtpVerification: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
    }
}

export const handleResendOTP = async ({ forget = false, router = null }) => {
    try {
        const { otp_email } = useAuthStore.getState()
        const email = (otp_email == null || otp_email == '') ? localStorage.getItem('otp_email') : otp_email

        console.log('handleResendOTP: ', email);

        if (email == null || email == '') {
            Toastr({ message: t('Invalid Email, Try Again!'), type: 'error' })
            return
        }


        setLoading(true)
        const res = await axios.post(resendOTP, { email: email, forget: forget });
        console.log('handleResendOTP: ', res.data);

        if (res.data.success) {
            if (forget) router.push('/auth/submit-otp?forget=true&email=' + email)
            Toastr({ message: res.data.message, type: 'success' })
        }
        else Toastr({ message: res.data.message, type: 'error' })
        setLoading(false)

    } catch (error) {
        console.log('handleResendOTP: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
    }
}

export const handleForgetPasswordOtpVerification = async (e, router, email, otp) => {
    try {
        e.preventDefault()
        const { setResetPasswordToken } = useAuthStore.getState()
        if (otp.length != 4) {
            Toastr({ message: t('OTP Code must be 4 digits long!'), type: 'error' })
            return
        } else if (email == '' || email == null) {
            Toastr({ message: t('Invalid Email, Try Again!'), type: 'error' })
            return
        }
        console.log('handleForgetPasswordOtpVerification: ', email, otp);
        setLoading(true)
        const res = await axios.post(forgetPasswordOtpVerification, { email: email, otp: otp, forget: true });
        console.log('handleForgetPasswordOtpVerification: ', res.data);

        if (res.data.success) {
            Toastr({ message: res.data.message, type: 'success' })
            router.push('/auth/reset-password?email=' + email);
            setResetPasswordToken(res.data.data.token)
        } else {
            Toastr({ message: res.data.message, type: 'error' })
        }
        setLoading(false)

    } catch (error) {
        console.log('handleForgetPasswordOtpVerification: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
    }
}

export const handleSetNewPassword = async (e, router, email, password, password_confirmation) => {
    try {
        e.preventDefault()
        const { reset_password_token } = useAuthStore.getState()
        let token = (reset_password_token == null || reset_password_token == '') ? localStorage.getItem('reset_password_token') : reset_password_token

        if (email == '' || email == null) {
            Toastr({ message: t('Invalid Email, Try Again!'), type: 'error' })
            return
        } else if (password != password_confirmation) {
            Toastr({ message: t('Password and Confirm Password must be same!'), type: 'error' })
            return
        } else if (password.length < 6) {
            Toastr({ message: t('Password must be at least 6 characters long!'), type: 'error' })
            return
        } else if (token == null || token == '') {
            Toastr({ message: 'Invalid Token, Try Again!', type: 'error' })
            return
        }


        setLoading(true)
        const res = await axios.post(resetPassword, {
            token: token,
            email: email,
            password: password,
            password_confirmation: password_confirmation
        });

        console.log('handleSetNewPassword: ', res.data);

        if (res.data.success) {
            Toastr({ message: res.data.message, type: 'success' })
            router.push('/auth/login');

        } else {
            Toastr({ message: res.data.message, type: 'error' })
        }
        setLoading(false)

    } catch (error) {
        console.log('handleSetNewPassword: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
    }
}

export const handleUpdateUserProfile = async (isImageChanged) => {
    try {

        const { user_profile } = useAuthStore.getState()
        const { name, phone, image, address, city, post_code } = user_profile

        if (name == null || name == '') {
            Toastr({ message: t('Name Field Empty'), type: 'error' })
            return
        } else if (name.length < 4) {
            Toastr({ message: t('Name must be at least 4 characters long!'), type: 'error' })
            return
        }

        // console.log('handleUpdateUserProfile image: ', image);

        setLoading(true)
        const res = await axios.post(updateUserProfile, isImageChanged ?
            { name: name, phone: phone, image_url: image, address: address, city: city, post_code: post_code }
            : { name: name, phone: phone, address: address, city: city, post_code: post_code });
        console.log('handleUpdateUserProfile: ', res.data);

        if (res.data.success) {
            Toastr({ message: res.data.message, type: 'success' })
            let user = JSON.parse(localStorage.getItem('user'))
            user.name = name
            user.phone = phone
            user.address = address
            user.city = city
            user.post_code = post_code
            user.image_url = res?.data?.data?.image_url;
            localStorage.setItem('user', JSON.stringify(user))
        } else {
            Toastr({ message: res.data.message, type: 'error' })
        }
        setLoading(false)

    } catch (error) {
        console.log('handleUpdateUserProfile: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
    }
}

export const handleGetUserProfileData = async () => {
    try {
        setLoading(true)
        const res = await axios.get(userProfile);
        console.log('handleGetUserProfileData: ', res.data);

        if (res.data.success) {
            useAuthStore.getState().setUserProfileData(res.data.data);
            const user_profile_api_data = res.data.data;
            let user = JSON.parse(localStorage.getItem('user'))
            user.name = user_profile_api_data.name
            user.phone = user_profile_api_data.phone
            user.address = user_profile_api_data.address
            user.city = user_profile_api_data.city
            user.post_code = user_profile_api_data.post_code
            user.image_url = user_profile_api_data.image_url;
            user.refer_code = user_profile_api_data.refer_code;
            localStorage.setItem('user', JSON.stringify(user))
        } else {
            Toastr({ message: res.data.message, type: 'error' })
        }
        setLoading(false)

    } catch (error) {
        console.log('handleGetUserProfileData: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
    }
}

export const handleChangeNewPassword = async () => {
    try {
        const { change_password_form, resetChangePasswordFormValue } = useAuthStore.getState()
        const { old_password, password, password_confirmation } = change_password_form

        if (password != password_confirmation) {
            Toastr({ message: t('Password and Confirm Password must be same!'), type: 'error' })
            return
        } else if (password == old_password) {
            Toastr({ message: t('You cannot use this password!'), type: 'error' })
            return
        }


        setLoading(true)

        const res = await axios.post(changePassword, {
            old_password: old_password,
            password: password,
            password_confirmation: password_confirmation,
        });

        console.log('handleChangeNewPassword: ', res.data);

        if (res.data.success) {
            Toastr({ message: res.data.message, type: 'success' });
            resetChangePasswordFormValue();
        } else {
            Toastr({ message: res.data.message, type: 'error' })
        }
        setLoading(false)

    } catch (error) {
        console.log('handleChangeNewPassword: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
    }
}

export const handleToggleSettings = async (type) => {
    console.log('type: ', type);
    try {
        setLoading(true)
        const res = await axios.post(toggleSettings, { type: type });
        console.log('handleToggleSettings: ', res.data);

        setLoading(false)
        if (res.data.success) {
            return true
        } else {
            Toastr({ message: res.data.message, type: 'error' })
            return false
        }
    } catch (error) {
        console.log('handleToggleSettings: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
        return false
    }
}

export const getUserReferCode = async () => {
    try {
        setLoading(true)
        const res = await axios.get(iGetReferCode);
        console.log('getUserReferCode: ', res.data);

        setLoading(false)
        if (res.data.success) {
            useAuthStore.getState().setReferCode(res.data.data);
            return true
        } else {
            Toastr({ message: res.data.message, type: 'error' })
            return false
        }
    } catch (error) {
        console.log('getUserReferCode: ', error);
        Toastr({ message: t('An error occurred!'), type: 'error' })
        setLoading(false)
        return false
    }
}

export const getAuthUserInformation = () => {
    const { isLoggedIn } = useAuthStore.getState()
    if (isLoggedIn) {
        let user = JSON.parse(localStorage.getItem('user'));
        if (!user?.image_url?.includes('http') && user?.image_url) user.image_url = BaseUrlSrc + user?.image_url;
        return user;
    }
    else return { name: '', email: '', phone: '', image: '' }
}



export default useAuthStore