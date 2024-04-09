import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AllVehicles from '../Vehicles';

function Services() {
    let { type } = useParams();
    const [vehicleType, setVehicleType] = useState(type)

    useEffect(()=>{
        setVehicleType(type)
    },[type])
    return (
    <>
        <div className='container text-center py-6 mx-auto'>
            <div className='text-4xl font-semibold tracking-wide'>Vehicle rental tariffs in Law Gate</div>
            <div>*All prices are exclusive of taxes and fuel. Images used for representation purposes only, actual color may vary</div>
        </div>
        {/* Toggle */}
        <div className=''>
            <ul className='flex flex-wrap items-center justify-center mx-auto w-fit md:border-2  p-1 rounded-full'>
                <li className={`${vehicleType==="all"?"bg-red-500 rounded-full text-white font-semibold":""} cursor-pointer px-2 md:px-4 md:py-1`} onClick={()=>setVehicleType("all")}>All</li>
                <li className={`${vehicleType==="bike"?"bg-red-500 rounded-full text-white font-semibold":""} cursor-pointer px-2 md:px-4 md:py-1`} onClick={()=>setVehicleType("bike")}>Bikes</li>
                <li className={`${vehicleType==="5seater"?"bg-red-500 rounded-full text-white font-semibold":""} cursor-pointer px-2 md:px-4 md:py-1`} onClick={()=>setVehicleType("5seater")}>5 Seaters</li>
                <li className={`${vehicleType==="7seater"?"bg-red-500 rounded-full text-white font-semibold":""} cursor-pointer px-2 md:px-4 md:py-1`} onClick={()=>setVehicleType("7seater")}>7 Seaters</li>
                <li className={`${vehicleType==="luxury"?"bg-red-500 rounded-full text-white font-semibold":""} cursor-pointer px-2 md:px-4 md:py-1`} onClick={()=>setVehicleType("luxury")}>Luxury Cars</li>
            </ul>
        </div>
        {/* Toggle */}
        <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 pb-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {AllVehicles.filter((vehicle)=>vehicle.category.includes(vehicleType)).sort((a, b) => b.price - a.price).map((item)=>{return(
                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={item.imageUrl} alt="blog"/>
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{item.category.split(",")[0]}</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.name}</h1>
                                    <p className="leading-relaxed mb-3"><b>&#8377;{item.price}</b> / 24hrs.</p>
                                    <div className="flex items-center flex-wrap ">
                                    <Link to="/vehicleDetails" state={{item}} className='bg-red-500 rounded w-full p-2 text-white uppercase text-center'>Book now</Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
        </section>
    </>
  )
}

export default Services