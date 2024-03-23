import React from 'react'
import PaymentInformation from '../components/PaymentInformation'
import { DARKSHADOW } from '../styles/Color'
import { useLocation } from 'react-router-dom'

const Payment = () => {

  const location = useLocation();

  return (
    <div className='my-14 w-10/12 mx-auto grid grid-cols-2 justify-items-center'>
      <PaymentInformation />
      <div className={`bg-gray-200 text-black h-fit w-1/2 flex flex-col gap-4 rounded-lg ${DARKSHADOW}`}>
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
        <div className='p-4 bg-gray-300 text-black flex items-center justify-between bg-[] rounded-b-lg'>
          <span className='font-bold'>Charged Today:</span> <span>{location.state.monthly ? "$39.00" : "$390.00"}</span>
        </div>
      </div>
    </div>
  )
}

export default Payment