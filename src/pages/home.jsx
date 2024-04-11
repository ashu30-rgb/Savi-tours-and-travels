import { ReactTyped } from "react-typed";
import FeatureCard from '../components/featureCard';
import Banner from "../components/Banner";
import off_road from "../assets/offroad.svg";
import car from "../assets/car.svg";
import streets from "../assets/streets.svg";
import group from "../assets/business-goal.svg"
import AllVehicles from "../Vehicles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {

  const [randomArray, setRandomArray] = useState([]);

  const generateRandomNumbers = () => {
    const newNumbers = [];
    while (newNumbers.length < 10) {
        const randomNumber = Math.floor(Math.random() * (AllVehicles.length-1)) + 1;
        if (!newNumbers.includes(randomNumber)) {
            newNumbers.push(randomNumber);
        }
    }
    setRandomArray(newNumbers);
};

  useEffect(()=>{
    generateRandomNumbers()
   const intId =  setInterval(() => {
    generateRandomNumbers()
    }, 3000);
    return()=>{
      clearInterval(intId)
    }
  },[])
  
  return (
    <>
    <div id="home" className="head-top min-h-screen bg-black text-white flex flex-col items-center justify-center relative ">
      <div className="top-overlay"></div>
      <div className='w-full h-screen flex flex-col justify-center items-center relative'>
        <div className='text-3xl md:text-7xl xl:text-8xl text-center font-semibold '>
        <div>Your One Stop</div>
        <div>Rental Solution for</div>
        </div>
        <div className='text-3xl md:text-7xl font-bold text-red-500 h-1'>
        <ReactTyped showCursor={false} strings={["Bikes","5 Seater cars", "7 Seater Cars", "Premium cars"]} typeSpeed={51} backSpeed={21} loop/> 
        </div>
      </div>
      <div className='flex pt-20 md:pt-28 container pb-12 lg:pb-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto px-4 md:px-12'>
            <FeatureCard head="Off-Road Explorers" desc="Conquer diverse terrain with rugged SUVs and versatile mountain bikes." icon={off_road}/>
            <FeatureCard head="Luxury Drives" desc="Indulge in luxury with premium cars and bikes for sophisticated travels." icon={car}/>
            <FeatureCard head="Group Excursions" desc="Seamless transportation for group outings with spacious 7 Seater vehicles." icon={group}/>
            <div className='hidden md:block lg:hidden'>
            <FeatureCard head="City Commuters" desc="Navigate urban streets effortlessly with compact cars and bikes." icon={streets}/>
            </div>
        </div>
      </div>
    </div>

    <Banner/>

    <section className="text-gray-300 body-font bg-gray-900">
      <div className="container px-5 py-12 pb-24 mx-auto">
        <div className="text-center pb-20 text-3xl text-white font-semibold tracking-wide fleet-understyle">
          OUR FLEET
        </div>
        <div className="flex flex-wrap -m-4">
          {randomArray.slice(0,3).map((item)=>{return(
          <div className={`lg:w-1/4 md:w-1/2 p-4 w-full relative `}>
            <a className="block relative h-48 rounded overflow-hidden">
              <img alt={AllVehicles[item]?.name} className="object-cover object-center w-full h-full block transition-all duration-700" style={{ transition: 'opacity 0.7s ease-in-out' }} src={AllVehicles[item]?.imageUrl}/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">{AllVehicles[item]?.category.split(",")[0]}</h3>
              <h2 className="text-white title-font text-lg font-medium">{AllVehicles[item]?.name}</h2>
              <p className="mt-1"><b>&#8377;{AllVehicles[item]?.price[0]}</b> / hrs.</p>
            </div>
          </div>
          )})}
          <div className={`lg:w-1/4 md:w-1/2 p-4 w-full relative  !z-10`}>
            <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center !z-50">
              <Link to="/services/all" className="font-semibold text-2xl text-white hover:text-red-500">View More....</Link>
            </div>
            <a className="block relative h-48 rounded overflow-hidden opacity-40">
              <img alt={AllVehicles[randomArray[3]]?.name} className="object-cover object-center w-full h-full block transition-all duration-700"  src={AllVehicles[randomArray[3]]?.imageUrl}/>
            </a>
            <div className="mt-4 opacity-40">
              <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">{AllVehicles[randomArray[3]]?.category.split(",")[0]}</h3>
              <h2 className="text-white title-font text-lg font-medium">{AllVehicles[randomArray[3]]?.name}</h2>
              <p className="mt-1"><b>&#8377;{AllVehicles[randomArray[3]]?.price[0]}</b> / hrs.</p>
            </div>
          </div>
          
        </div>
        <div className="text-center pt-8">
        *All prices are exclusive of taxes and fuel. Images used for representation purposes only, actual color may vary.
        </div>
      </div>
    </section>

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Unmatched Variety, Endless Possibilities</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-xl">Dive into the boundless possibilities offered by our extensive array of vehicles, ensuring that every traveler finds their perfect match, tailored precisely to their unique travel requirements, preferences, and aspirations.</p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src={AllVehicles[randomArray[4]]?.imageUrl}/>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src={AllVehicles[randomArray[5]]?.imageUrl}/>
            </div>
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src={AllVehicles[randomArray[6]]?.imageUrl}/>
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src={AllVehicles[randomArray[7]]?.imageUrl}/>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src={AllVehicles[randomArray[8]]?.imageUrl}/>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src={AllVehicles[randomArray[9]]?.imageUrl}/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home