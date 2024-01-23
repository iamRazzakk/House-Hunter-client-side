import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hook/useAxiosSeciour";
import { useEffect, useState } from "react";


const Login = () => {
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [users, setUser] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    // console.log(user);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        axios.post('http://localhost:5000/login', {
            email,
            password,
        })
            .then((res) => {
                if (res.data.message === 'Login successful') {
                    const user = { email, password, role: res.data.role }; // Assuming role is available in res.data
                    axiosSecure.post('/jwt', user)
                        .then(res => {
                            if (res.data.token) {
                                localStorage.setItem('access-token', res.data.token);
                            } else {
                                localStorage.removeItem('access-token');
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });

                    if (users.role === "Renter") {
                        navigate('/');
                    } else {
                        navigate('/dashboard');
                    }
                } else {
                    console.log('Login failed:', res.data.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    return (
        <div className="w-1/2 mx-auto bg-[#0c0f26] p-4 m-4 rounded-lg shadow-lg">
            <form onSubmit={handleLogin} className="card-body">
                <h1 className="text-4xl font-bold text-center text-white">Login Hear</h1>
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
                <h1 className="text-center font-bold">Not a Member<Link className="text-blue-500" to={'/singup'}> Register</Link></h1>
                <hr className="bg-black" />
            </form >
        </div>
    );
};

export default Login;