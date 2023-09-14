import axios from "axios";
import useAuthStore from "../authStore";
import useGeneralStore from "../stores/GeneralController";
import BaseUrl from "./Url";

const AxiosHeader = ({ token: token = null }) => {
    const { setIsLoggedIn } = useAuthStore.getState();
    const is_verified = localStorage.getItem("is_verified");

    // console.log('token' + token);
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        if (is_verified && is_verified == 1) setIsLoggedIn(true)
        else setIsLoggedIn(false);
        // console.log("is_verified: ", is_verified);
    } else {
        delete axios.defaults.headers.common["Authorization"];
        localStorage.setItem("is_verified", 0);
        setIsLoggedIn(false)
        // console.log("is_verified: ", is_verified);
    }

    axios.defaults.baseURL = BaseUrl;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.common['app-role'] = 'customer';
    // set access control allow origin
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.timeout = 60000; // 60s
    useGeneralStore.getState().setIsAxiosInit(true);
};

export default AxiosHeader;