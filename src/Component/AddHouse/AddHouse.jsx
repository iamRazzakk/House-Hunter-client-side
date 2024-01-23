import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddHouse = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const Name = form.Name.value;
        const address = form.address.value;
        const city = form.city.value;
        const bedrooms = form.bedrooms.value;
        const bathrooms = form.bathrooms.value;
        const roomsize = form.roomsize.value;
        const url = form.url.value;
        const dueDate = form.dueDate.value;
        const RFM = form.RFM.value;
        const number = form.number.value;
        // console.log(Name, address, city, bedrooms, bathrooms, roomsize, url, dueDate, RFM, number);
        const addData = {
            Name: Name,
            address: address,
            city: city,
            bedrooms: bedrooms,
            bathrooms: bathrooms,
            roomsize: roomsize,
            url: url,
            dueDate: dueDate,
            RFM: RFM,
            number: number,
        }
        axios.post('http://localhost:5000/owner', addData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (response.data.acknowledged) {
                    toast.success('data added successfully');
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
        <div className="">
            <form onSubmit={handleSubmit} className="card-body md:ml-10 bg-[#3fb9be] rounded-md text-white">
                <h1 className="text-3xl font-bold text-center text-white md:mb-5">Add Details</h1>
                <div className="form-control">
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-white font-bold">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="Name" className="input input-bordered md:w-full bg-white text-black" required />
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text text-white font-bold">Address</span>
                            </label>
                            <input type="text" placeholder="address" name="address" className="input input-bordered md:w-full bg-white text-black" required />
                        </div>
                    </div>


                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="text-white font-bold">City</span>
                    </label>
                    <input type="text" name="city" placeholder="City" className="input input-bordered md:w-full bg-white text-black" required />
                </div>
                <div className="flex gap-4">
                    <div className="flex-1 form-control">
                        <label className="label">
                            <span className="text-white font-bold">Bedrooms</span>
                        </label>
                        <input type="text" name="bedrooms" placeholder="Bedrooms" className="input input-bordered md:w-full bg-white text-black" required />
                    </div>
                    <div className="flex-1 form-control">
                        <label className="label">
                            <span className="text-white font-bold">Bathrooms</span>
                        </label>
                        <input type="text" name="bathrooms" placeholder="Bathrooms" className="input input-bordered md:w-full bg-white text-black" required />
                    </div>
                </div>
                <div className="flex-1 form-control">
                    <label className="label">
                        <span className="text-white font-bold">Room Size</span>
                    </label>
                    <input type="text" name="roomsize" placeholder="Room Size" className="input input-bordered md:w-full bg-white text-black" required />
                </div>

                <div className="flex">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="text-white font-bold">Photo URL</span>
                        </label>
                        <input type="url" name="url" placeholder="Photo URL From Imgbb Direct Link" className="input input-bordered md:w-full bg-white text-black" required />
                    </div>
                    <div className="flex-1 ml-4">
                        <label className="text-white font-bold">Date:</label>
                        <input type="date" name="dueDate" className="w-full rounded-md md:py-3 md:mt-3 mx-auto text-black bg-white" />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="text-white font-bold">Rent for month</span>
                        </label>
                        <input className="input input-bordered md:w-full bg-white text-black p-3" name="RFM" id="" cols="30" rows="10" placeholder="Rent for month">
                        </input>
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="text-white font-bold">Phone Number</span>
                        </label>
                        <input className="input input-bordered md:w-full bg-white text-black p-3" name="number" id="" cols="30" rows="10" placeholder="Rent for month">
                        </input>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="bg-[#0c0f26] text-white md:py-3 font-bold rounded-lg">Add Details</button>
                </div>
            </form>
            <Toaster></Toaster>

        </div>
    );
};

export default AddHouse;