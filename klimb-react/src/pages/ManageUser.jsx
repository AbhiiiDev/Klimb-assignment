import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ManageUser = () => {

    const [users,setUsers]=useState([]);
    const [searchEmail,setSearchEmail]=useState("");

    const BASE_URL=import.meta.env.VITE_BASE_URL;

    useEffect(()=>{

 const fetchAllUser=async()=>{

const response=await fetch(`${BASE_URL}/api/v1/user`);
const data=await response.json();
setUsers(data.users);
console.log(data);
        }

        fetchAllUser();
    },[])



        const filteredUser=users.filter((user)=>user.email.toLowerCase().includes(searchEmail.toLowerCase()));


  return (
    <div className="container mx-auto p-6">
  <div className="bg-white shadow-md rounded-lg p-4">
<h1 className='font-bold text-2xl'>Manage Users</h1>
    <div className="flex justify-between items-center mb-4">
      <input 
        type="text" 
        placeholder="Search for email" 
        onChange={(e)=>setSearchEmail(e.target.value)}
        className="border rounded-lg p-2 w-full max-w-xs"
      />
      <Link to='/create' className="bg-green-500 text-white p-2 rounded-lg flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        Add
      </Link>
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">NAME</th>
            <th className="p-3 text-left">PHONE NO.</th>
            <th className="p-3 text-left">TYPE</th>
            <th className="p-3 text-left">LOCATION</th>
            <th className="p-3 text-left">FUNCTION</th>
          </tr>
        </thead>
        <tbody>
            {
            filteredUser.map((user)=>(
                <tr className='border-b'>
                      <td className="p-3">{user.firstName+" "+user.lastName}</td>
            <td className="p-3">{user.phone}</td>
            <td className="p-3">{user.role}</td>
            <td className="p-3">{user.location}</td>
            <td className="p-3">{user.department}</td>
                </tr>
            ))
            }   
        </tbody>
      </table>
    </div>
  </div>
</div>

  )
}

export default ManageUser
