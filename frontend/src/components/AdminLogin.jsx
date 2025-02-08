import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/user";
import { useDispatch } from "react-redux";
import { signin } from '../components/store/authSlice.js'


const AdminLogin = ({ onClose }) => {
   const [email,setEmail] = useState('')
   const [password,setPAssword] = useState('')
   const dispatch = useDispatch()
   const navigate = useNavigate();
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await login({email,password})
      if(response.status === 200){
        dispatch(signin(response.data.user))
        navigate('/AdminPanel')
      }
      alert(response.data.message)
    };
    
    return (
      <div className="modal fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Admin Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={((e)=>setEmail(e.target.value))}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
  
            {/* Password Input */}
            <div>
              <label htmlFor="Password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e)=>setPAssword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
  
            {/* Submit and Cancel Buttons */}
            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default AdminLogin;