import link from "@/config"
import { useState } from "react"
import { toast } from "react-toastify"

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
        <section
            className="flex flex-col items-center justify-center max-w-lg mx-auto pt-10 gap-[4rem] bg-[#ffffff12] lg:h-[490px]"
            id="formSec"
        >
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center justify-center gap-4 mt-2 w-full">
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Nome"
                    className="text-black lg:text-lg text-sm bg-transparent uppercase rounded-[100px] px-4 py-3 border border-[#000] focus:outline-none w-full"
                />
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                    className="text-black lg:text-lg text-sm bg-transparent uppercase rounded-[100px] px-4 py-3 border border-[#000] focus:outline-none w-full"
                />
                <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    placeholder="Messaggio"
                    className=""
                    rows={10}
                />
                <button
                    type="submit"
                    className="bg-black mt-2 text-white lg:text-lg text-sm uppercase rounded-[100px] px-4 py-3 focus:outline-none w-1/2 border
                     border-[#000] transition duration-200 ease-in-out hover:bg-[#2796e5]"
                >
                    Inviare
                </button>
            </form>
        </section>
    )
}

export default Contact

