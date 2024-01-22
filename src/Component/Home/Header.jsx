
const Header = () => {
    return (
        <div>
            <div className="carousel w-full rounded md:h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://c4.wallpaperflare.com/wallpaper/396/394/415/city-apartment-design-wallpaper-preview.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="bg-white text-[#0c0f26] btn-circle btn">❮</a>
                        <a href="#slide2" className="bg-white text-black btn-circle btn">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://w0.peakpx.com/wallpaper/106/692/HD-wallpaper-luxury-vacation-apartment-luxury-vacation-luxury-apartment-apartment-luxury.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="bg-white text-black btn-circle btn">❮</a>
                        <a href="#slide3" className="bg-white text-black btn-circle btn">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://w0.peakpx.com/wallpaper/603/264/HD-wallpaper-luxury-apartment-architecture-luxury-view-home-elegant-apaprtment.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="bg-white text-black btn-circle btn">❮</a>
                        <a href="#slide4" className="bg-white text-black btn-circle btn">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://free4kwallpapers.com/uploads/originals/2015/05/15/cool-apartment-presentation.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="bg-white text-black btn-circle btn">❮</a>
                        <a href="#slide1" className="bg-white text-black btn-circle btn">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;