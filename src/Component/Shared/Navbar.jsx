import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/logo-3.jpeg'
import { useEffect, useState } from "react";

const Navbar = () => {
    const navigate = useNavigate()
    // console.log(user);
    const [user, setUser] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    const handleLogout = () => {
        fetch('http://localhost:5000/logout', {
            method: 'POST',
        })
            .then(() => {
                setUser(null);
                navigate('/login')
            })
            .catch(error => {
                console.error('Logout failed:', error.message);
            });
    }
    const navLink = <>
        <ul className=" md:flex gap-6 text-white">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-[#30a2a7]" : "font-normal"
                    }
                >
                    Home
                </NavLink>
            </li>
            {/* <li>
                <NavLink
                    to="/add-new-house"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-[#30a2a7]" : "font-normal"
                    }
                >
                    Add House
                </NavLink>
            </li> */}
            <li>
                <NavLink
                    to="/about-us"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-[#30a2a7]" : "font-normal"
                    }
                >
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact-us"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-[#30a2a7]" : "font-normal"
                    }
                >
                    Contact Us
                </NavLink>
            </li>
        </ul>


    </>

    return (
        <div className="navbar px-5 text-black  w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-[#3d90e9] rounded-box w-52">
                        <li className="menu menu-horizontal px-1 font-bold">
                            {navLink}
                        </li>
                    </ul>
                </div>
                <Link to='/'><img className="w-24 h-10 object-cover " src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" text-[#3d90e9] menu-horizontal px-1 font-bold">

                    {
                        navLink
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex justify-center items-center">

                    {/* <p className="md:mr-4">{user?.displayName}</p> */}
                </div>
                {
                    user ? <>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <Link to='/login'>
                                    <button className="px-10 bg-[#30a2a7] py-2 text-white rounded-full md:ml-4">Login</button>
                                </Link>

                                <Link to={'/dashboard'}>
                                    <button className="px-10 mt-2 bg-[#30a2a7] py-2 text-white rounded-full md:ml-4">Dashboard</button>
                                </Link>
                            </ul>
                        </div>


                    </> :
                        <> <Link to='/login'>
                            <button onClick={handleLogout} className="px-10 bg-[#30a2a7] py-2 text-white rounded-full md:ml-4">Log out</button>
                        </Link>
                        </>
                }
            </div>

        </div>
    );
};

export default Navbar;