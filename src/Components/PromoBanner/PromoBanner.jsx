import watch from '../../assets/PromoBanner/watch.svg'
import mobile from '../../assets/PromoBanner/mobile.svg'


const PromoBanner = () => {
    return (
        <div className=" max-w-11/12 mx-auto py-18">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 ">
                {/* left side content */}
                <div className=' bg-black rounded-xl'>
                    <div className=' flex items-center justify-between text-white px-12 py-12 '>
                        {/* left side */}
                        <div>
                              <p className=' text-xl font-medium mb-2'>$590</p>
                              <h2 className=' font-2xl md:text-4xl font-medium mb-8'>Apple Watch Series 9</h2>
                              <button className=' bg-[#E27A1E] px-4 py-2 rounded-lg font-medium'>Shop Now</button>
                        </div>

                        {/* right side */}
                        <div>
                            <img src={watch} className=' object-cover'></img>
                            
                      </div>

                    </div>
                  </div>

                {/* right side content */}
              <div className="  bg-no-repeat bg-contain  rounded-xl text-white"
               style={{ backgroundImage: `url(${mobile})` }}>
         <div className="flex flex-col  items-start  px-12 py-12">
            
               <p className="text-xl font-medium mb-2">Up to 50%</p>

                  <h2 className="font-2xl md:text-4xl font-medium mb-4">WINTER SALE!</h2>

         <button className=" px-4 py-2 rounded-lg font-medium border-2 
          border-l-[#E27A1E] border-t-[#E27A1E]  border-r-[#FFB703] border-b-[#FFB703]">
                                     Shop Now
            </button>
         

         
        </div>
         </div>



         </div>
    </div>

    );
};

export default PromoBanner;