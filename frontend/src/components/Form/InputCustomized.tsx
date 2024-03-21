import React from 'react'
import { FieldError, Path, UseFormRegister } from 'react-hook-form'
import { LoginType, RegisterType } from '../../types/Types'

interface Props {
  type : string
  label : Path<RegisterType>
  placeholder: string
  register : UseFormRegister<RegisterType | LoginType>
  required?: boolean
  errors?: FieldError
}

const InputCustomized = ({type, placeholder, label, required, errors, register} : Props) => {
  return (
    <div>
      <input
        {...register(label, {required : required})}
        type={type} 
        placeholder={placeholder}
        className='border px-4 py-2 rounded w-full shadow-[0px_1px_7.5px_0px_rgba(0,0,0,.25)] mb-1'
      />
      {errors && <p className='text-red-500 bg-red-200 rounded px-2'>{errors.message}</p>}
    </div>
  )
}

export default InputCustomized