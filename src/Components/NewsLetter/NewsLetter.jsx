

const NewsLetter = () => {
    return (
        <div className=" max-w-11/12 mx-auto py-12">
            <div className=" bg-[#c8640d] py-18 rounded-xl ">
                <h1 className=" text-white text-center font-bold text-2xl md:text-4xl">Subscribe to our newsletter</h1>
                <div className=" flex items-center gap-8 justify-center mt-8">
                <input placeholder="Full name" className=" border border-white 
                    px-2 py-3 text-white "></input>
                 <input placeholder="Email address" className="border border-white 
                  px-2 py-3 text-white "></input>
               <button className=" text-white bg-black px-6 py-3 rounded-lg font-medium">Subscribe Now</button>



                </div>



            </div>
            
        </div>
    );
};

export default NewsLetter;