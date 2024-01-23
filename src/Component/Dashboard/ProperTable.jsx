import { LuFileEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";


const ProperTable = ({ Data, index }) => {
    console.log(Data);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>{index + 1}</th>
                            <td>{Data?.Name}</td>
                            <td>{Data?.number}</td>
                            <td className="text-center text-2xl"><LuFileEdit></LuFileEdit></td>
                            <td className="text-center text-2xl"><MdDelete></MdDelete></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProperTable;