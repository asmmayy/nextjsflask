import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import link from '@/config';

const SignupForm = () => {
    const router = useRouter();
    const userPublicInfo = useSelector((state) => state.userPublicInfo);
    const [email, setEmail] = useState(userPublicInfo.email || '');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const [loading, setLoading] = useState(false);
    const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [isHidePassword, setIsHidePassword] = useState(false);
    const [isHideConfirmPassword, setIsHideConfirmPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password || !confirmPassword || !role) {
            return toast.error('Please fill in all fields');
        }

        if (password !== confirmPassword) {
            return toast.error('Passwords do not match');
        }

        try {
            setLoading(true);
            // const response = await fetch('/api/users/register', {
            // const response = await fetch(`${link}/signup`, {
            const response = await fetch(`https://flask-hello-world-omega-ivory.vercel.app/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, teacher_type: role })
            });
            
            const data = await response.json();

            if (response.status !== 200 && response.status !== 201) {
                return toast.error(data.message);
            }

            toast.success("Registered successfully");
            router.push('/login');
        } catch (err) {
            console.log(err)
            toast.error("Something went wrong :(")
        } finally {
            setLoading(false);
        }
    };

    return (
        <section 
            className="flex flex-col items-center justify-center max-w-3xl mx-auto pt-[8rem] gap-2"
        >
            <div className="max-w-sm w-full bg-white rounded-lg shadow-md p-8 m-4">
                <h1 className="text-4xl text-center text-gray-800 font-bold mb-6">Signup</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input 
                        type="email"
                        placeholder="Email"
                        className="text-gray-800 text-sm p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className='relative w-full'>
                        <input 
                            type={!isHidePassword ? "password" :"text"}
                            placeholder="Password"
                            className="text-gray-800 text-sm p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button onClick={()=>setIsHidePassword(!isHidePassword)} type='button' className='absolute inset-y-0 right-3'>
                            {
                                !isHidePassword ? <i className="fa fa-eye" aria-hidden="true"></i> :
                                <i class="fa fa-eye-slash" aria-hidden="true"></i>
                            }
                        </button>
                    </div>
                    <div className='relative w-full'>
                        <input 
                            type={!isHideConfirmPassword ? "password" :"text"}
                            placeholder="Confirm Password"
                            className="text-gray-800 text-sm p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 w-full"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button onClick={()=>setIsHideConfirmPassword(!isHideConfirmPassword)} type='button' className='absolute inset-y-0 right-3'>
                            {
                                !isHideConfirmPassword ? <i className="fa fa-eye" aria-hidden="true"></i> :
                                <i class="fa fa-eye-slash" aria-hidden="true"></i>
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
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="privacyCheckbox"
                            className="form-checkbox h-4 w-4 text-blue-500"
                            required
                            checked={acceptPrivacyPolicy}
                            onChange={(e) => setAcceptPrivacyPolicy(e.target.checked)}
                        />
                        <label htmlFor="privacyCheckbox" className="text-gray-800 text-sm">
                            I accept the <a className='text-blue-500 underline' href="/assets/Docs/Privacy-Policy-sul-Trattamento-dei-Dati.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                        </label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="termsCheckbox"
                            className="form-checkbox h-4 w-4 text-blue-500"
                            required
                            checked={acceptTerms}
                            onChange={(e) => setAcceptTerms(e.target.checked)}
                        />
                        <label htmlFor="termsCheckbox" className="text-gray-800 text-sm">
                            I accept the <a className='text-blue-500 underline' href="/assets/Docs/Termini-e-Condizioni-Sito-Web-o-App.pdf" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
                        </label>
                    </div>
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
                                className={`px-6 py-3 rounded-lg w-full text-white ${loading || !acceptPrivacyPolicy || !acceptTerms ? 'btn-disabled' : 'bg-blue-500 hover:bg-blue-600'}`}
                                disabled={loading || !acceptPrivacyPolicy || !acceptTerms}
                            >
                                Signup
                            </button>
                        )}
                    </div>
                </form>
                <p className="mt-4 text-center text-black">
                    Already have an account? 
                    <Link href="/login"className="text-blue-500 hover:text-blue-600 transition duration-200 ml-1">
                        Login
                    </Link>
                </p>
            </div>
        </section>
    );
}

export default SignupForm;
