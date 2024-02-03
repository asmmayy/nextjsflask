import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { UserAuth } from '@/shared/context/AuthContext';

const LoginForm = () => {
    const { login, loading } = UserAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isHidePassword, setIsHidePassword] = useState(false)
    const [role, setRole] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password || !role) {
            return toast.error('Please fill in all fields');
        }
        
        try {
            await login(email, password, role);
        } catch (err) {
            console.log(err)
            toast.error(err.message || "Login Failed")
        }
    };

    return (
        <section 
            className="flex flex-col items-center justify-center max-w-3xl mx-auto pt-[8rem] gap-2"
        >
            <div className="max-w-sm w-full bg-white rounded-lg shadow-sm shadow-slate-400 p-8 m-4">
                <h1 className="text-4xl text-center text-gray-800 font-bold mb-6">Login</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input 
                        type="email"
                        placeholder="Email"
                        className="text-gray-800 text-sm p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className='relative w-full'>
                        <input 
                            type={!isHidePassword ? "password" :"text"}
                            placeholder="Password"
                            className="text-gray-800 text-sm p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={()=>setIsHidePassword(!isHidePassword)} type='button' className='absolute inset-y-0 right-3'>
                            {
                                !isHidePassword ? <i className="fa fa-eye" aria-hidden="true"></i> :
                                <i className="fa fa-eye-slash" aria-hidden="true"></i>
                            }
                        </button>
                    </div>
                    <select 
                        className="text-gray-800 text-sm p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 capitalize"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="" disabled>Select Role</option>
                        <option value="elementary school teacher" className="capitalize">insegnante di scuola elementare</option>
                        <option value="middle school teacher" className="capitalize">insegnante di scuola media</option>
                        <option value="high school professor" className="capitalize">professore di liceo</option>
                        <option value="university professor" className="capitalize">professore universitario</option>
                    </select>
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                        {loading ? (
                            <div className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg w-full transition duration-200 flex items-center justify-center">
                                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                </svg>
                            </div>
                        ) : (
                            <button 
                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg w-full"
                                disabled={loading}
                            >
                                Login
                            </button>
                        )}
                    </div>
                </form>
                <p className="mt-4 text-center text-black">
                    Don't have an account? 
                    <Link href="/signup"className="text-blue-500 hover:text-blue-600 transition duration-200 ml-1">
                        Sign up
                    </Link>
                </p>
            </div>
        </section>
    );
}

export default LoginForm;
