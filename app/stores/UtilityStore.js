import create from 'zustand'


const useUtilityStore = create((set, get) => ({
    //states
    isLoading: false,

    // state modifications
    setLoading: (status) => set((state) => state.isLoading = status)

}))

export const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

export const formatDateOrTime = (dateTime, type = 'time') => {
    // console.log('formatDateOrTime: ', dateTime, type);
    const date = new Date(dateTime);
    if (type === "date") {
        return `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}. ${date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
            }. ${date.getFullYear()}`;
    } else {
        //return time
        return `${date.getHours() < '10' ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < '10' ? '0' + date.getMinutes() : date.getMinutes()}`;
    }
};

export const formatDate = (date) => {
    if (!date) return null;
    const months = [];
    months["en"] = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    months["da"] = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    return `${new Date(date).getDate()} ${months["da"][new Date(date).getMonth()]
        }, ${new Date(date).getFullYear()}`;
};


export default useUtilityStore