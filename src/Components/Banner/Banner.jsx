import Slider from "react-slick";
import image1 from '../../assets/Banner/headphoneBaneer.jpg'
import image2 from '../../assets/Banner/airpodsBanner.jpg'
import image3 from '../../assets/Banner/moreheadphones.jpg'
import logo from '../../assets/Banner/logo.png'


const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    { id: 1, image: image1, title: "Headphones", price: 'Tk.15000' },
    { id: 2, image: image2, title: "Airpods Pro", price: 'Tk.12000' },
    { id: 3, image: image3, title: "Headphones", price: 'Tk.25000' },
  ];

  return (
    <div className="max-w-11/12 mx-auto">
      
      <div className="carousel-container">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative">

              <img
                src={slide.image}
                className="w-full h-[300px] md:h-[550px] object-cover rounded-lg"
              />

              {/* center title */}
              <div className="absolute inset-0 flex items-center justify-center">
           <h2 className="text-4xl md:text-7xl  font-extrabold uppercase text-white tracking-widest">
                {slide.title}
                </h2>
               </div>

              {/* top right logo */}
              <div className="absolute top-16 right-16">
                <img src={logo} className="w-6 md:w-8" />
              </div>

              {/* bottom left price */}
              <div className="absolute bottom-16 left-16 text-white">
                <p className="text-xl md:text-2xl ">
                  {slide.price}
                </p>
              </div>

              {/* bottom right button */}
              <div className="absolute bottom-16 right-16">
                <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-200">
                  Buy Now
                </button>
              </div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
