import { Link } from "react-router-dom";


const NewComplex = () => {
    return (
        <div className="flex md:mt-32">
            <div className="flex-1 gap-4 my-40">
                <h3 className="text-xl mb-6 italic text-[#3fb9be]">Modern Architecture</h3>
                <h1 className="text-4xl font-semibold italic">INTRODUCING A NEW RESIDENCE</h1>
                <div className="flex mt-20">
                    <div className="w-1/3 flex items-center justify-center text-center">
                        -------
                    </div>
                    <div className=" w-2/3">
                        <p className="">
                            Each apartment has been individually designed to maximize space and light. Smart Home Technology installed as standard in each apartment putting you in total control of your home at the touch of a button from wherever you might be.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <img className="relative h-[627px] object-cover ml-14" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50fGVufDB8fDB8fHww" alt="" />
                <Link to='more-photo'>
                    <div className="absolute text-center hover:bg-sky-700 rounded -mt-[150px] ml-[480px] h-[111px] bg-[#30a2a7] w-[160px]">
                        <div className="p-6  text-white">
                            <h3 className="italic text-sm">More</h3>
                            <h1 className="text-2xl font-bold">Photo</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default NewComplex;