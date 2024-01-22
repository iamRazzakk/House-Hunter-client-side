import { Link } from "react-router-dom";

const Photo = () => {
    return (
        <div className="text-5xl text-[#3fb9be]">
            <h1 className="flex items-center justify-center">Coming.......</h1>

            <Link to={'/'}>
                <div className="flex items-center justify-center md:mt-20">
                <button className="  px-10 bg-[#30a2a7] py-2 text-white rounded-full md:ml-4">Home</button>
                </div>
            </Link>
        </div>
    );
};

export default Photo;