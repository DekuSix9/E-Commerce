import { useEffect, useState } from "react";
import phoneImg from '../../assets/Category/phone.svg'
import laptopImg from '../../assets/Category/pc.svg'
import watchImg from '../../assets/Category/watch.svg'
import headphoneImg from '../../assets/Category/headphone.svg'
import accessoryImg from '../../assets/Category/image 13.svg'
import arrow from '../../assets/Category/arrow.svg'


const Category = () => {

    const [categories,setCategories]=useState([]);

    useEffect(()=>{
           fetch('products.json')
           .then(res=>res.json())
           .then(data=>setCategories(data))

         },[]);

         const uniqueCategory=[...new Set(categories.map(item=>item.category))];
         
         const Categoryimage={
            phone: phoneImg,
            laptop: laptopImg,
            watch: watchImg,
            headphone: headphoneImg,
            accessory: accessoryImg
          }

    return (
        <div className=" max-w-11/12 mx-auto py-16">

            <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
                   {
                uniqueCategory.map((cate)=>
                
                <div className=" bg-[#F8F8F8] rounded-2xl py-8" key={cate.id}>
                    <div className=" flex justify-between items-center mb-4 px-4 ">
                        <div>
                            <p className=" text-[#737373] text-lg ">{categories.filter(item=>item.category===cate).length} Items</p>
                          <h2 className=" capitalize text-xl md:text-2xl font-semibold">{cate}</h2>
                        </div>
                        <div>
                            <img className=" w-8 md:w-12 h-8 md:h-12" src={arrow}></img>
                        </div>
                    </div>
                   
                  <img className="w-28 h-28 mx-auto mb-4" src={Categoryimage[cate]}>
                  </img>
  

                </div>)
            }
            </div>
           
        </div>
    );
};

export default Category;