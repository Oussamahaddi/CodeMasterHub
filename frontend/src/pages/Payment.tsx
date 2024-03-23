import React from 'react'
import PaymentInformation from '../components/PaymentInformation'
import { DARKPURPLE, DARKSHADOW } from '../styles/Color'
import { useLocation } from 'react-router-dom'

const Payment = () => {

  const location = useLocation();

  return (
    <div className='w-full relative'>
      <div className='my-14 w-10/12 mx-auto grid grid-cols-2 justify-items-center'>
        <img src="/assets/pricingbg.png" alt="" className='absolute top-1/2 right-0 -translate-y-1/2 w-[220px]' />
        <div className='absolute bottom-1/2 right-20 rounded-full shadow-[0px_0px_300px_120px_rgba(255,0,0,.5)] -z-10'></div>
        <PaymentInformation duration={location.state.monthly ? "monthly" : "yearly"} />
        <div className={`bg-[#FC72FF] text-white h-fit w-1/2 flex flex-col gap-4 rounded-lg ${DARKSHADOW} relative z-10`}>
          <div className='p-4 flex flex-col gap-4'>
            <h6 className='text-2xl font-semibold'>Summary</h6>
            <div className='flex items-center justify-between'>
              <div>
                <p className='font-semibold text-lg'>{ location.state.monthly ? "Monthly" : "Yearly"}</p>
                <p>Billed each {location.state.monthly ? "month" : "year"}</p>
              </div>
              <p>{location.state.monthly ? "$39.00" : "$390.00"}</p>
            </div>
          </div>
          <div className={`p-4 bg-[${DARKPURPLE}] flex items-center justify-between rounded-b-lg`}>
            <span className='font-bold'>Charged Today:</span> <span>{location.state.monthly ? "$39.00" : "$390.00"}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment