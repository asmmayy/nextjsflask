import React, { useState } from 'react'
import { LOGOS, ICONS } from "@/shared/constants";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { UserAuth } from '@/shared/context/AuthContext';

const JoinFastSchool = () => {
    const { user } = UserAuth();
    const router = useRouter();
    const [selectedPlan, setSelectedPlan] = useState('');

    const plans = [
        {
            name: 'Abbonamento Mensile',
            price: '€10 / mese',
            description: 'Accesso completo per un mese',
            lookup_key: 'monthly',
        },
        {
            name: 'Abbonamento Annuale',
            price: '€60 / anno',
            description: 'Risparmia con l\'abbonamento annuale',
            lookup_key: 'yearly',
        }
    ]

    const handleContinue = async () => {
        if (!selectedPlan) {
            toast.error('Seleziona un piano');
            return;
        }
        if (router.pathname === '/') {
            router.push('/signup');
        }

        try {
            // const response = await fetch(`/api/subscribe?lookup_key=${selectedPlan}?user_id=${user?.user_id}`, {
            //     method: 'POST',
            // });
            // send both lookup_key and user_id as query params
            const response = await fetch(`/api/subscribe/${selectedPlan}/${user?.user_id}`, {
                method: 'POST',
            });

            if (response.status !== 200) {
                const data = await response.json();
                toast.error(data.message);
                return;
            }

            const data = await response.json();
            console.log(data);
            const { session_url } = data;
            
            window.location.href = session_url;
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong, please try again later.');
        }
    };

    return (
        <section 
            className="flex flex-col items-center justify-center max-w-5xl mx-auto pt-10 gap-4 py-[4rem] rounded-2xl border border-gray-500 shadow-md shadow-slate-400"  data-aos-delay="50" data-aos-duration="1000"
            data-aos-easing="ease-in-sine" data-aos="flip-up" data-aos-once="false"
        >
            <Image
                src={LOGOS.fastSchool_logo_black}
                alt="fast school logo"
                width={150}
                className="h-auto lg:max-w-[10rem] max-w-[5rem]"
            />
            <p className="mt-5 lg:text-lg text-sm text-center text-black uppercase">
                cosa aspetti?
            </p>
            <p className="lg:text-lg text-sm text-center text-black uppercase">
                entra a far parte della famiglia fastschool!
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-5 w-full px-4">
                {
                    plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white border border-gray-300 shadow-lg rounded-xl p-5 flex flex-col items-center cursor-pointer ${selectedPlan === plan.lookup_key && 'border-red-500'}`}
                            onClick={() => setSelectedPlan(plan.lookup_key)}
                        >
                            <h3 className="text-lg font-semibold text-black">{plan.name}</h3>
                            <p className="text-black">{plan.price}</p>
                            <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
                        </div>
                    ))
                }
            </div>

            <button
                className={`flex flex-row items-center justify-center ${selectedPlan ? 'bg-black' : 'bg-gray-500'} ${selectedPlan ? 'cursor-pointer' : 'cursor-auto'} mt-5 text-white lg:text-lg text-sm uppercase rounded-full px-4 py-3 focus:outline-none w-1/2 border border-gray-300 transition duration-200 ease-in-out ${selectedPlan && 'hover:bg-blue-600'} shadow-sm`}
                onClick={handleContinue}
            >
                Abbonati
                <Image
                    src={ICONS.cart_icon}
                    alt="cart icon"
                    width={25}
                    height={25}
                    className="h-auto ml-2"
                />
            </button>
        </section>
    )
}

export default JoinFastSchool;
