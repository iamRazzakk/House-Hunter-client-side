import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://y-orcin-omega.vercel.app'

})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;