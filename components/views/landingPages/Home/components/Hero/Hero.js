import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { setUserPublicInfo } from '@/redux/slices/userPublicInfoSlice';
import { toast } from 'react-toastify';
import ChatBotIcon from '@/components/common/ChatBotIcon'


const Hero = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleContinue = (e) => {
        e.preventDefault();
        if (!name || !email) {
            toast.error("Compila tutti i campi");
            return;
        }

        dispatch(setUserPublicInfo({ name, email }));
        router.push('/signup');
    }

    return (
        <section
            className="flex flex-col items-center justify-center max-w-3xl mx-auto pt-10 gap-2" data-aos-delay="50" data-aos-duration="1000"
            data-aos-easing="ease-in-sine" data-aos="zoom-out-up" data-aos-once="false"
        >
            <h1 className="lg:text-4xl text-2xl font-bold text-center text-black">
                Semplifica la scuola <span className="text-[#2796e5]">con un click</span>
            </h1>
            <p className="mt-4 lg:text-lg text-sm text-center text-black uppercase">
                {/* Velocizza le attività didattiche e rendi l'apprendimento più accessibile e interessante con l'Intelligenza Artificiale.
                Crea quiz e lezioni coinvolgenti utilizzando video YouTube, pagine di Wikipedia, PDF e dispense online con un semplice click. */}
                Velocizza e rendi più accessibili le attività didattiche.
                Crea lezioni coinvolgenti, outline, schemi e quiz,
                utilizzando PDF, video YouTube,
                pagine di Wikipedia, e-book
                o i tuoi file salvati in Google Drive e Dropboox

            </p>
            <div className="flex flex-col mt-10 justify-center items-center gap-3 lg:w-[70%] w-full">
                <p className="text-black lg:text-md text-sm uppercase text-center">
                    REGISTRATI PER LA PROVA GRATUITA
                </p>
                <form className="flex flex-col items-center justify-center gap-4 mt-2 w-full">

                    <input
                        type="name"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flex h-10 w-full rounded-md 
                      border 
                    border-[#000]
                      
                      px-3 
                      py-2 text-sm 
                      focus:outline-none focus:ring-2
                      text-[#030712] focus-visible:ring-offset-2"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex h-10 w-full rounded-md 
                    border-[#000]
                      border  px-3 
                      py-2 text-sm 
                      focus:outline-none focus:ring-2
                      text-[#030712] focus-visible:ring-offset-2"
                    />
                    {/* rounded-[100px]  */}
                    <button
                        type="submit"
                        className={`bg-black mt-2
                        rounded-lg 
                        w-2/4 

                         text-white lg:text-lg
                          text-sm  
                          px-2 py-2
                           focus:outline-none  border
                            border-[#000] transition duration-200 ease-in-out
                            ${!name || !email ? "opacity-50 cursor-not-allowed" : ""}
                            `}
                        onClick={handleContinue}

                        disabled={!name || !email}
                    >
                        ISCRIVITI
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Hero