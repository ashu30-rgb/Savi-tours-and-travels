import React from 'react';
import SupportCard from '../components/SupportCard';
import car from "../assets/car-svgrepo-com.svg";
import help from "../assets/help-svgrepo-com.svg";
import contact from "../assets/contact-headset-communication-svgrepo-com.svg";
import payment from "../assets/payment.svg";
import location from "../assets/location.svg";
import discount from "../assets/discount.svg";

function Support() {
  return (
    <>
    <div className='bg-gray-900 min-h-screen w-full'>
      <div className='text-center text-white py-12 lg:py-24'> 
        <p className='uppercase text-md md:text-xl tracking-widest font-light mb-4'>Welcome to Xplore Wheels support</p>
        <h1 className=' text-4xl md:text-7xl font-bold'>How Can We Help?</h1>
      </div>
      <div className='grid grid-col md:grid-cols-2 lg:grid-cols-3 container mx-auto w-full gap-4 lg:gap-8 px-4'>
        <SupportCard image={help} text="Booking Assistance"/>
        <SupportCard image={payment} text="Payment Queries"/>
        <SupportCard image={discount} text="Student Discounts"/>
        <SupportCard image={car} text="Vehicle Specifications:"/>
        <SupportCard image={location} text="Location Information"/>
        <SupportCard image={contact} text="Contact Us"/>
      </div>
    </div>
    </>
  )
}

export default Support