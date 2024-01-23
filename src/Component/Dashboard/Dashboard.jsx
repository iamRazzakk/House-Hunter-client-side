import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useEffect, useState } from "react";


const Dashboard = () => {
    const [users, setUser] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    const ownerUsers = users && users.filter((usr) => usr.role === "Owner")
    const rentalUsers = users && users.filter((usr) => usr.status === "baratiya")
    console.log(rentalUsers);
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-white font-Poppins flex md:mt-10 max-w-3xl lg:max-w-screen-xl">
                <div className="w-40 md:w-64 rounded-t min-h-full bg-[#3fb9be]">
                    <ul className="menu md:p-6 md:mt-6  md:text-xl">

                        {
                            ownerUsers && (
                                <>
                                    <li><NavLink to='/dashboard/add-new-house'>Add House Details</NavLink></li>
                                    <li><NavLink to='/dashboard/property'>My House</NavLink></li>
                                </>
                            )
                        }
                        {
                            rentalUsers && rentalUsers.length < 0 ? (
                                <li><NavLink to='/dashboard/rental-user'>Book Mark</NavLink></li>
                            ) : null
                        }
                    </ul>

                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>

        </div >
    );
};

export default Dashboard;