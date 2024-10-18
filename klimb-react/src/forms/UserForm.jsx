import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { validationSchema } from '../../configs/validations/SchemaValidation';

const UserForm = () => {

    const BASE_URL=import.meta.VITE_BASE_URL;

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit=async(data)=>{
try {
    const response=await fetch(`${BASE_URL}/`)
} catch (error) {
    
}
  }

  return (
    <div className='m-2 p-4 border-2 border-gray-400'>
         <h2 className=''>Add User Form</h2>
         <div class="text-sm text-right text-gray-500 italic mb-4">
    All fields are mandatory
  </div>
    <form onSubmit={handleSubmit(onSubmit)} className='grid col-span-2 '>
 
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className='flex flex-col'>
        <label>First Name <span className='text-red-600'>*</span></label>
        <input {...register('firstName')} placeholder="First Name" className='border-2 w-1/2 border-gray-300 rounded-md focus:outline-none' />
        <p className="text-red-700">{errors.firstName?.message}</p>
      </div>
      
      <div className='flex flex-col'>
        <label>Last Name <span className='text-red-600'>*</span></label>
        <input {...register('lastName')} placeholder="Last Name" className='border-2 w-1/2 border-gray-300 rounded-md focus:outline-none'/>
        <p className="text-red-700">{errors.lastName?.message}</p>
      </div>
      
      <div className='flex flex-col'>
        <label>Phone <span className='text-red-600'>*</span></label>
        <input {...register('phone')} placeholder="Phone Number" className='border-2 w-1/2 border-gray-300 rounded-md focus:outline-none'/>
        <p className="text-red-700">{errors.phone?.message}</p>
      </div>

      <div className='flex flex-col'>
        <label>Email <span className='text-red-600'>*</span></label>
        <input {...register('email')} placeholder="Email ID" className='border-2 w-1/2 border-gray-300 rounded-md focus:outline-none'/>
        <p className="text-red-700">{errors.email?.message}</p>
      </div>

      <div className='flex flex-col'>
        <label>Role <span className='text-red-600'>*</span></label>
        <input {...register('role')} placeholder="Role" className='border-2 w-1/2 border-gray-300 rounded-md focus:outline-none' />
        <p className="text-red-700">{errors.role?.message}</p>
      </div>

      <div className='flex flex-col'>
        <label>Location <span className='text-red-600'>*</span></label>
        <input {...register('location')} placeholder="Location" className='border-2 w-1/2 border-gray-300 rounded-md focus:outline-none' />
        <p className="text-red-700">{errors.location?.message}</p>
      </div>

      <div className='flex flex-col'>
        <label>Department <span className='text-red-600'>*</span></label>
        <input {...register('department')} placeholder="Department" className='border-2 w-1/2 border-gray-300 rounded-md focus:outline-none'/>
        <p className="text-red-700">{errors.department?.message}</p>
      </div>
    </div>

    <button type="submit" className="mt-5 bg-black text-white w-20 h-8 rounded-md ">Add User</button>
  </form>    </div>
  );
};

export default UserForm;
