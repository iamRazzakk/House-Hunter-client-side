import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="w-1/2 mx-auto bg-[#0c0f26] p-4 m-4 rounded-lg shadow-lg">
            <form className="card-body">
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