import ProperTable from "./ProperTable";
import useAxiosSecure from './../Hook/useAxiosSeciour';
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const MyProperty = () => {
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const { data: apartments, isLoading, isError, error } = useQuery({
        queryKey: ['owner'],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get('/owner');
                return res.data;
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    handleUnauthorized();
                } else {
                    throw new Error(`Error fetching data: ${error.response ? error.response.data.message : error.message}`);
                }
            }
        },
    });

    const handleUnauthorized = () => {
        // Redirect the user to the login page or any other authentication page
        navigate('/login');
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            {apartments?.map((Data, index) => (
                <ProperTable key={Data._id} index={index} Data={Data} />
            ))}
        </div>
    );
};

export default MyProperty;
