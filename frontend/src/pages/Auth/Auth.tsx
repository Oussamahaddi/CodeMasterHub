import InputCustomized from '../../components/Form/InputCustomized'
import Button from '../../components/Partials/Button'
import { FaCircleArrowRight } from "react-icons/fa6";
import { LoginType, UserResponseT, RegisterType } from '../../types/Types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useAppDispatch, useAppSelector } from '../../hook';
import { switchForm } from '../../features/Authentification/authSlice';
import { loginThunk, signUpThunk } from '../../features/Authentification/authApi';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {

  const {auth} = useAppSelector(state => state.authentification)
  const dispatch = useAppDispatch();

  const navigate = useNavigate()

  const authSchema = yup.object({
    firstname : auth ? yup.string().required() : yup.string(),
    lastname : auth ? yup.string().required() : yup.string(),
    email : yup.string().email().required(),
    password : yup.string().min(6).max(20).required(),
    confirmpassword : auth ? yup.string().required() : yup.string(),
    phoneNumber : auth ? yup.string().required() : yup.string()
  })

  const {
    handleSubmit,
    register,
    formState : {errors},
  } = useForm<RegisterType | LoginType>({
    resolver : yupResolver(authSchema),
  })

  const onSubmit : SubmitHandler<RegisterType | LoginType> = (data) => {
    if (auth) {
      dispatch(signUpThunk(data as RegisterType))
    } else {
      dispatch(loginThunk(data))
    }
  };

  useEffect(() => {
    const user : UserResponseT = JSON.parse(localStorage.getItem("user")!);
    if (user) {
      if (user.user.role === "instructor") navigate("/dashboard")
      else navigate("/")
    }
  }, [navigate])
  

  return (
    <>
      <img src="assets/authbg.png" alt="" className='absolute top-0 right-0 -z-10 object-cover h-full' />
      <div className='w-full'>
        <div className='md:w-1/2 mx-auto flex flex-col items-center gap-10 mt-14'>
          <div className='text-4xl font-bold'>
            {auth ? 'Register' : 'Login'}
            <span className='flex bg-gradient-to-br from-[#B873FF] to-[#FC72FF] h-2 w-full mt-3'></span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='w-3/5 mx-auto flex flex-col gap-4'>
            {
              auth &&
              <div className='flex items-center gap-8'>
                <div>
                  <InputCustomized
                    placeholder='First Name'
                    type='text'
                    label='firstname'
                    register={register}
                    errors={errors.firstname}
                    required
                  />
                </div>
                <div>
                  <InputCustomized
                    placeholder='Last Name'
                    type='text'
                    label='lastname'
                    register={register}
                    errors={errors.lastname}
                    required
                  />
                </div>
              </div>
            }
            <div>
              <InputCustomized
                placeholder='Email'
                type='email'
                label='email'
                register={register}
                errors={errors.email!}
                required
              />
            </div>
            <div>
              <InputCustomized
                placeholder='Password'
                type='password'
                label='password'
                register={register}
                errors={errors.password!}
                required
              />
            </div>
            { 
              auth &&
              <InputCustomized
                placeholder='Confirm Password'
                type='password'
                label='confirmpassword'
                register={register}
                errors={errors.confirmpassword!}
                required
              />
            }
            { 
              auth &&
              <InputCustomized
                placeholder='Phone Number'
                type='text'
                label='phoneNumber'
                register={register}
                errors={errors.phoneNumber!}
                required
              />
            }
            {
              auth &&
              <div className='flex flex-col'>  
                <div className='flex gap-4'>
                  <div className='flex gap-2 items-center'>
                    <input {...register("role")} type="radio" id='student' value="student" />
                    <label htmlFor="student" className=' font-semibold'>Student</label>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <input {...register("role")} type="radio" id='instructor' value="instructor" />
                    <label htmlFor="instructor" className=' font-semibold'>Insctructor</label>
                  </div>
                </div>
              </div>
            }
            <Button
              addionalStyle='flex items-center gap-4 justify-center w-full py-2 rounded-md'
              btnTitle='Continue'
              icon={<FaCircleArrowRight />}
            />
            <div className='my-4'>
              <p>You don't have account? 
                <button 
                  type='button' 
                  onClick={() => dispatch(switchForm())}
                  className='text-[#B974FF] font-bold ml-2 transition-all duration-100 ease-linear hover:text-[#FC72FF]'
                >
                  Sign Up
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login