import React, { useState,useEffect } from 'react'
import { LOGOS, ICONS } from "@/shared/constants";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { UserAuth } from '@/shared/context/AuthContext';
import emailjs from 'emailjs-com';

const JoinFastSchool = () => {
    useEffect(() => {
        // Initialize EmailJS with your user_id
        emailjs.init('MjOxCmAuatmQMITOA'); // Replace with your actual User ID
    }, []);
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





    const handleSendEmail = async () => {
        try {
            const templateParams = {
                to_name: 'Evilz',
                from_name: 'Faizan khan',
                to_email: 'teamdeath720@gmail.com',
                message_html: 'Hello, this is a test email!',
            };

            const response = await emailjs.send(
                'service_zf4ud3b',   // Replace with your actual Service ID
                'template_sjipg24',  // Replace with your actual Template ID
                templateParams
            );

            console.log('SUCCESS!', response.status, response.text);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };



    // const response = await fetch(`/api/subscribe/${selectedPlan}/${user?.user_id}`, {
    const handleContinue = async () => {
        if (!selectedPlan) {
            toast.error('Seleziona un piano');
            return;
        }
        if (router.pathname === '/') {
            router.push('/signup');
        }
        console.log("selectedPlan", selectedPlan);

        try {
            // send both lookup_key and user_id as query params
            let formData = new FormData();
            formData.append('lookup_key', selectedPlan);

            formData.append("user_id", user?.user_id);

            fetch("flaskapinextjs.vercel.app/create-checkout-session", {
                method: 'POST',
                body: formData
            }).then((response) => {
                response.json().then(({ checkout_session }) => {
                    console.log("response", checkout_session);
                    window.location.href = checkout_session.url
                })
            })
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong, please try again later.');
        }
    };

    return (
        <section
            className="flex flex-col 
            items-center 
            justify-center max-w-5xl mx-auto 
            pt-10 gap-4 py-[4rem]
             border-gray-500 
            bg-gray-100
            rounded-lg shadow-lg
            "
            data-aos-easing="ease-in-sine" data-aos="flip-up" data-aos-once="false"
            data-aos-delay="50" data-aos-duration="1000"
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
                className={`
        flex flex-row items-center justify-center 
        bg-black text-gray-100 p-3 
        rounded-lg 
        w-2/4 
        ${!selectedPlan ? "opacity-50 cursor-not-allowed" : ""}
        focus:outline-none 
        focus:shadow-outline
    `}

                onClick={handleContinue}
                disabled={!selectedPlan}
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
