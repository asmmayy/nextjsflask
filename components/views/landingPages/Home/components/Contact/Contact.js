import link from "@/config"
import { useState } from "react"
import { toast } from "react-toastify"
import Image from "next/image"
import { IMAGES } from "@/shared/constants"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(name,
            email,
            message,)
        if (name == "" ||
            email == "" ||
            message == "") {
            toast.error('Tutti i campi richiesti')
            return
        }

        try {
            setIsLoading(true);
            const response = await fetch(`${link}/contact-us`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            });
            setName("")
            setEmail("")
            setMessage("")
        } catch (error) {
            console.log(error);
            toast.error('Qualcosa è andato storto, riprova più tardi.')
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <div
                className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Per favore traducilo in italiano! </h2>
                        <div className="text-gray-700 mt-8">
                            Não gosta de formulários?<span className="underline">Envie-nos um Email </span>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <Image alt="" src={IMAGES.contact}></Image>
                    </div>
                </div>
                <div className="">
                    <div>
                        <span className="uppercase text-sm text-gray-600 font-bold">Nome</span>
                        <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" />
                    </div>
                    <div className="mt-8">
                        <span className="uppercase text-sm text-gray-600 font-bold">Messaggio</span>
                        <textarea
                            className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div className="mt-8">
                        <button
                            className="uppercase text-sm font-bold tracking-wide bg-black text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                           Invia Messaggio
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact

