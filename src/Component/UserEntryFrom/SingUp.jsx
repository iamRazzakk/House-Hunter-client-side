import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loginImg from "../../assets/animation.json";

const SingUp = () => {
    return (
        <div className="md:flex md:p-6">
            <div className="flex-1 md:p-4 md:mt-14">
                <Lottie className='md:h-[450px] ' animationData={loginImg} loop={true} />
            </div>
            <div className="w-1/2 mx-auto bg-[#0c0f26] p-4 m-4 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center text-white">Register Please</h1>
                <form className="card-body">
                    < div className="form-control" >
                        <label className="label">
                            <span className="label-text text-white font-bold">Name</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your Name" className="input input-bordered bg-white text-black" required />
                    </div >
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
                </form >
            </div>
        </div>
    );
};

export default SingUp;