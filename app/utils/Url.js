export const BaseUrlSrc = "https://gifty-api.non-logic.com/";
// export const BaseUrlSrc = "https://gifty-api-dev.non-logic.com/";
// export const BaseUrlSrc = "http://192.168.0.212:8003/";
// export const BaseUrlSrc = "http://127.0.0.1:8000/";

const BaseUrl = BaseUrlSrc + "api/v1";
export default BaseUrl;

export const home_url = '/common/home';
export const postcards_data_url = '/common/post-card/index';
export const kuPostcardDetails = '/common/post-card/show';
export const shops_data_url = '/common/shop/index';
export const iContactUs = "/common/contact-us/add";


//! Auth Urls
export const auth_user_url = "/auth/user";
export const userLogin = "/common/auth/login";
export const kuUserSocialLogin = "/common/auth/social-login";
export const userRegister = "/common/auth/register";
export const otpVerification = "/common/auth/verify";
export const forgetPasswordOtpVerification = "/common/auth/forget-password-otp-verify";
export const resendOTP = "/common/auth/resend-otp";
export const resetPassword = "/common/auth/reset-password";
export const userProfile = "/common/auth/profile/index";
export const updateUserProfile = "/common/auth/profile/update";
export const changePassword = "/common/auth/profile/change-password";
export const toggleSettings = "/common/auth/profile/toggle-settings";
export const iGetReferCode = "/common/auth/profile/get-refer-code";
export const iUserVerificationInfo = "/common/auth/profile/user-verification-info";
export const kSubmitUserVerificationInfo = "/common/auth/profile/user-verification-id-upload";
export const kuDeleteAccountInfo = "/common/auth/profile/get-delete-view";
export const kuDeleteAccount = "/common/auth/profile/delete";


//! address book Urls
export const allAddresses = "/customer/address-books/index";
export const kuAddAddress = "/customer/address-books/add";
export const kuUpdateAddress = "/customer/address-books/update";
export const kuDeleteAddress = "/customer/address-books/delete";

//! order history
export const kuOrderHistory = "/customer/order/history/filter";

export const kuGetGeneralInfo = "/common/general-info";
export const kuGetVoucherInfo = "/common/check-voucher";
export const kuSetupStripPaymentIntent = "/common/stripe-payment-intent";
export const kuAddCustomerOrder = "/customer/order/add";
export const kuConfirmCustomerOrder = "/customer/order/confirm-payment";
export const kuSubmitOrderFeedback = "/customer/order/feedback/add";

export const kuChangeLanguage = "/common/auth/profile/change-language";
