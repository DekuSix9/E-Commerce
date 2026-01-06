import watch from '../../assets/PromoBanner/watch.svg'
import mobile from '../../assets/PromoBanner/mobile.svg'


const PromoBanner = () => {
    return (
        <div className=" max-w-11/12 mx-auto py-8 md:py-12">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 ">
                {/* left side content */}
                <div className=' bg-black rounded-xl'>
                    <div className=' flex flex-col lg:flex-row items-center lg:items-center justify-between text-white px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-12 gap-6 '>
                        {/* left side */}
                        <div className='text-center lg:text-left'>
                              <p className=' text-xl font-medium mb-2'>$590</p>
                              <h2 className=' text-2xl md:text-3xl lg:text-4xl font-medium mb-4 md:mb-6'>Apple Watch Series 9</h2>
                              <button className=' bg-[#E27A1E] px-4 py-2 rounded-lg font-medium'>Shop Now</button>
                        </div>

                        {/* right side */}
                        <div className="flex justify-center">
                            <img src={watch} className=' w-32 sm:w-36 md:w-44 lg:w-52 object-contain'></img>
                            
                      </div>

                    </div>
                  </div>

                {/* right side content */}
              <div className="  rounded-xl text-white bg-no-repeat bg-right bg-cover"
               style={{ backgroundImage: `url(${mobile})` }}>
         <div className="flex flex-col items-start px-6 md:px-10 py-10 
                       backdrop-brightness-95 rounded-xl">
            
               <p className="text-xl font-medium mb-2">Up to 50%</p>

                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">WINTER SALE!</h2>

         <button className=" px-4 py-2 rounded-lg font-medium border-2 border-l-[#E27A1E]
          border-t-[#E27A1E] border-r-[#FFB703] border-b-[#FFB703]">
                                     Shop Now
            </button>
         

         
        </div>
         </div>



         </div>
    </div>

    );
};

export default PromoBanner;