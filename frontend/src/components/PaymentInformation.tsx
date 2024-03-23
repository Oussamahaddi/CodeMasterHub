import { useState } from 'react';
import { BACKGROUNDGRADIENT, DARKSHADOW } from '../styles/Color';
import { FaCheck } from 'react-icons/fa';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from './Partials/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../hook';
import { createSubsriptionThunk } from '../features/Subscription/subscriptionApi';

interface PaymentInput {
  cardHolder : string
  cardNumber : string
  expirationDate : string
  cvv : string
}

type MethodType = "mastercard" | "visa" | "paypal"; 

const PaymentInformation = ({duration} : {duration : string}) => {

  const [defaultMethod, setDefaultMethod] = useState<MethodType>('mastercard');
  const dispatch = useAppDispatch();

  const authSchema = yup.object({
    cardHolder : yup.string().required(),
    cardNumber : yup.string().required(),
    expirationDate : yup.string().max(5).required(),
    cvv : yup.string().max(3).required(),
  })

  const {
    handleSubmit,
    register,
  } = useForm<PaymentInput>({
    resolver : yupResolver(authSchema)
  })

  const methods = [
    { id: 'mastercard', img: '/assets/paymentMethods/mastercard.png' },
    { id: 'visa', img: '/assets/paymentMethods/visa.png' },
    { id: 'paypal', img: '/assets/paymentMethods/paypal.png' },
  ];

  const selectMethod = (method : MethodType) => {
    setDefaultMethod(method);
  };

  const onSubmit : SubmitHandler<PaymentInput> = (data) => {
    console.log(data);
    const payload = {
      type : duration
    }
    dispatch(createSubsriptionThunk(payload))
  }

  return (
    <div className="w-9/12">
      <div className={`${BACKGROUNDGRADIENT} rounded-lg p-4 ${DARKSHADOW}`}>
        <h3 className="text-white text-4xl font-semibold my-4">Payment Info.</h3>
        <hr className="my-4 border-gray-300" />
        <div className="my-2">
          <h4 className="text-white font-semibold text-xl my-2">Payment methods</h4>
          <div className="flex justify-around my-4">
            {methods.map((method) => (
              <div
                key={method.id}
                onClick={() => selectMethod(method.id as MethodType)}
                className={`border border-gray-300 bg-white rounded-md px-2 cursor-pointer relative ${
                  defaultMethod === method.id ? `after:content-[${<FaCheck />}] after:absolute after:right-0 after:top-0 after:translate-x-1/2 after:-translate-y-1/2 after:w-5 after:aspect-square after:bg-[#E985C1] after:rounded-full` : ''
                }`}
                title={method.id}
              >
                <img id={method.id} src={method.img} alt="" className="w-10 aspect-square object-contain" />
              </div>
            ))}
          </div>
        </div>
        <hr className="my-4 border-gray-200" />
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <div className="relative z-0">
              <input {...register("cardHolder")} type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0  peer" placeholder=" " />
              <label htmlFor="floating_standard" className="absolute text-sm text-gray-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                Card holder
              </label>
            </div>
            <div className="relative z-0">
              <input {...register("cardNumber")} type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0  peer" placeholder=" " />
              <label htmlFor="floating_standard" className="absolute text-sm text-gray-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                Card Number
              </label>
            </div>
            <div className='flex gap-4 w-full'>
              <div className="relative z-0">
                <input {...register("expirationDate")} type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0  peer" placeholder=" " />
                <label htmlFor="floating_standard" className="absolute text-sm text-gray-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Experation Date
                </label>
              </div>
              <div className="relative z-0">
                <input {...register("cvv")} type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white focus:outline-none focus:ring-0  peer" placeholder=" " />
                <label htmlFor="floating_standard" className="absolute text-sm text-gray-200  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  CVV
                </label>
              </div>
            </div>
            <div className="flex justify-center w-full my-4">
              <Button 
                btnTitle='Pay Now'
                addionalStyle='py-3 rounded-md'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentInformation;
