import watch from '../../assets/PromoBanner/watch.svg'
import mobile from '../../assets/PromoBanner/mobile.svg'

const PromoBanner = () => {
    return (
        <div className="max-w-11/12 mx-auto py-6 md:py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                {/* First Banner */}
                <div
                    className="rounded-xl text-white bg-red-800 bg-no-repeat bg-right bg-contain"
                    style={{ backgroundImage: `url(${watch})` }}>
                    <div className="flex flex-col items-start px-4 md:px-6 py-12  rounded-xl">
                        <p className="text-xl font-medium ">$590</p>
                        <h2 className="text-2xl md:text-3xl font-medium mb-3">
                            Apple Watch Series 9
                        </h2>
                        <button className="bg-[#E27A1E] px-3 py-1.5 rounded-lg font-medium">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* Second Banner */}
                <div
                    className="rounded-xl text-white bg-no-repeat bg-right bg-cover"
                    style={{ backgroundImage: `url(${mobile})` }}>
                    <div className="flex flex-col items-start px-4 md:px-6 py-12  rounded-xl">
                        <p className="text-xl font-medium mb-0.5 ">Up to 50%</p>
                        <h2 className="text-2xl md:text-3xl  font-medium mb-3">
                            WINTER SALE!
                        </h2>
                        <button className="px-3 py-1.5 rounded-lg font-medium border-2 border-l-[#E27A1E]
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