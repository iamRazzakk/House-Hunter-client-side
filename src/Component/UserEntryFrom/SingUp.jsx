import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loginImg from "../../assets/animation.json";
import axios from 'axios'
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../Hook/useAxiosSeciour";

const SingUp = () => {
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const role = form.role.value;
        const number = form.number.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, role, number, email, password);
        const addData = {
            name: name,
            role: role,
            number: number,
            email: email,
            password: password,
        }
        axios.post('http://localhost:5000/users', addData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (response.data.acknowledged) {
                    toast.success('Registration successfully');
                    const user = { email, password }

                    axiosSecure.post('/jwt', user)
                        .then(res => {
                            if (res.data.token) {
                                localStorage.setItem('access-token', res.data.token)
                            } else {
                                localStorage.removeItem('access-token')
                            }
                        })
                    navigate('/dashboard')
                } else {
                    toast.error('Something is Wrong');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error('An error occurred while adding the assignment');
            });


    }
    return (
        <div className="md:flex md:p-6">
            <div className="flex-1 md:p-4 md:mt-14">
                <Lottie className='md:h-[450px] ' animationData={loginImg} loop={true} />
            </div>
            <div className="w-1/2 mx-auto bg-[#0c0f26] md:p-4 m-4 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center text-white">Register Please</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    < div className="form-control" >
                        <label className="label">
                            <span className="label-text text-white font-bold">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered bg-white text-black" required />
                    </div >
                    {/* label start*/}
                    < div className="form-control" >
                        <label className="abel-text text-white font-bold">Role:</label>
                        <select name="role" className="w-full rounded-md md:py-3 md:mt-3 mx-auto text-black bg-white" id="cars">
                            <option value="Renter" selected>Renter</option>
                            <option value="House" >Owner</option>
                        </select>
                    </div>
                    {/* label end */}
                    < div className="form-control" >
                        <label className="label">
                            <span className="label-text text-white font-bold">Phone</span>
                        </label>
                        <input type="text" name="number" placeholder="Enter your Phone Number" className="input input-bordered bg-white text-black" required />
                    </div >
                    < div className="form-control" >
                        <label className="label">
                            <span className="label-text text-white font-bold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered bg-white text-black" required />
                    </div >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-bold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered bg-white text-black" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="bg-[#3d90e9] text-white py-3 rounded-full button">Login</button>
                    </div>
                    <h1 className="text-center font-bold">All ready have an account Please<Link className="text-blue-500" to={'/login'}> Login</Link></h1>
                    <hr className="bg-black" />
                    <Toaster></Toaster>
                </form >
            </div>
        </div>
    );
};

export default SingUp;