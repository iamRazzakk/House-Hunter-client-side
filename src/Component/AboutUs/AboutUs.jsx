// import aboutImg from '../../../src/assets/about-img-2.jpeg'
// import slider from '../../../src/assets/slider-01.jpeg'
// import Founder from '../../../src/assets/Office.png'
// import sosa from '../../../src/assets/sosa.jpeg'
import CountUp from 'react-countup';
const AboutUs = () => {
    const countValue = 89;
    const countValue1 = 80;
    const countValue2 = 40;
    const countValue3 = 25;
    return (
        <div className="font-jost p-4">
            <div className="mt-4 relative">
                <div className=" h-[88.2vh] rounded-lg overflow-hidden">
                    <img className=" opacity-50 h-full w-full object-cover" src="https://t4.ftcdn.net/jpg/03/23/77/55/360_F_323775551_l0HLcvl0V5ozqssjzCy8VbvPcXwjR703.jpg" alt="" />
                </div>
            </div>
            <div className="absolute text-white ml-[400px] -mt-80">
                <h1 className="text-7xl font-bold mb-3">About Orgado</h1>
                <h3 className="text-3xl font-bold">An organic and ideal food shop</h3>
            </div>
            <div className='flex mt-24'>
                <div className='flex-1 w-[450px] mx-auto'>
                    <img className='h-[550px]' src='https://www.thehousedesigners.com/images/plans/01/URD/bulk/6583/the-destination-front-rendering_m.webp' alt="" />
                </div>
                <div className='flex-1 md:p-4'>
                    <h1 className='font-jost text-xl text-[#699c47] mb-2'>About Us</h1>
                    <h2 className="text-5xl p-4 mb-2 font-jost font-bold">
                        We believe in pure and organic quality
                    </h2>
                    <div className="flex ">
                        <div className="flex-1">
                            <img src='https://media.istockphoto.com/id/1322575582/photo/exterior-view-of-modern-apartment-building-offering-luxury-rental-units-in-silicon-valley.jpg?s=612x612&w=0&k=20&c=7ipOB2nGt7JB-rln2YM1wxQ2NI4ZZirsxSn8Ko9pk-k=' alt="" />
                        </div>
                        <div className="flex-1 p-6">
                            <p>
                                We had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level. Always be able to find the phone that you are looking for in our offer, have made us stand out in the market, but they are simply symptoms of our dedication to what we are doing and our desire to constantly.
                            </p>
                            <div className='flex mt-4'>
                                <div>
                                    <img className='h-20 w-20 rounded-full' src='https://thumbs.dreamstime.com/b/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg' alt="" />
                                </div>
                                <div className='p-4'>
                                    <h3 className='text-xl font-bold'>
                                        Md Abdur Razzak
                                    </h3>
                                    <p>Founder & CEO, Orgado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='ml-20 mt-4'>
                <img src='' alt="" />
            </div>
            {/* count down */}
            <div className=' h-[289px] w-[1116px] mx-auto'>
                <div className='flex text-center p-24 text-white'>
                    <div className="flex-1 rounded-lg  flex justify-around items-center bg-cover bg-center">
                        <div className=''>
                            <CountUp className='text-5xl font-bold' end={countValue} duration={3} separator="," suffix="k" />
                            <h2 className='text-xl font-bold'>Client</h2>
                        </div>
                    </div>
                    <div className="flex-1 rounded-lg  flex justify-around items-center bg-cover bg-center">
                        <div className=''>
                            <CountUp className='text-5xl font-bold' end={countValue1} duration={3} separator="," suffix="k" />
                            <h2 className='text-xl font-bold'>Deal Done</h2>
                        </div>
                    </div>
                    <div className="flex-1 rounded-lg  flex justify-around items-center bg-cover bg-center">
                        <div className=''>
                            <CountUp className='text-5xl font-bold' end={countValue2} duration={3} separator="," suffix="k" />
                            <h2 className='text-xl font-bold'>Experienced Employ</h2>
                        </div>
                    </div>
                    <div className="flex-1 rounded-lg  flex justify-around items-center bg-cover bg-center">
                        <div className=''>
                            <CountUp className='text-5xl font-bold' end={countValue3} duration={3} separator="," suffix="k" />
                            <h2 className='text-xl font-bold'>Awards Win</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;