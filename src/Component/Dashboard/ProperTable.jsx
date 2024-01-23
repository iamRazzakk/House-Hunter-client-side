import { LuFileEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hook/useAxiosSeciour";


const ProperTable = ({ Data, index, refetch }) => {
    console.log(Data);
    const axiosSecure = useAxiosSecure()
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/owner/${Data._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={Data?.url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Owner: {Data?.Name}
                    </h2>
                    <div className="flex">
                        <p>
                            Bedroom: {Data?.bedrooms}
                        </p>
                        <p>
                            Bathroom: {Data?.bathrooms}
                        </p>
                        <p>
                            Room Size: {Data?.roomsize}
                        </p>
                    </div>
                    <div className="flex">
                        <p>
                            City: {Data?.city}
                        </p>
                        <p>
                            Address: {Data?.address}
                        </p>
                        <p>
                            Due Date: {Data?.dueDate}
                        </p>
                    </div>

                    <p><span>Rent: </span>$ {Data?.RFM}</p>
                    <p><span>Contact: </span>{Data?.number}</p>
                    <div className="card-actions justify-end">
                        {/* for edit */}
                        <Link to={`/dashboard/owner/${Data._id}`}>
                            <div className="badge badge-outline">
                                <LuFileEdit></LuFileEdit>
                            </div>
                        </Link>
                        {/* for delete */}

                        <div className="badge badge-outline">
                            <button onClick={handleDelete}>
                                <MdDelete></MdDelete>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProperTable;