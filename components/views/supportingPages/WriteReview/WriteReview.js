import React, { useState } from 'react'
import ContainerCustom from '../../../common/Container'
// import { Header, LessonPlan } from './components'
import { toast } from 'react-toastify';
import { UserAuth } from '@/shared/context/AuthContext';
import { Header } from '../Dashboard/components';
import link from '../../../../config'

function WriteReview() {
    const [review, setReview] = useState("")
    const [gender, setGender] = useState("male")
    const [isLoading, setIsLoading] = useState(false)
    const { user, loading } = UserAuth();

    console.log(user)
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(review, gender, link)
        if (review == "") {
            toast.error('All fields required')
            return
        }

        try {
            setIsLoading(true);
            const response = await fetch(`${link}/create-review`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message:review, gender, user_id:user.user_id })
            });
            setReview("")
        } catch (error) {
            console.log(error);
            toast.error('Qualcosa è andato storto, riprova più tardi.')
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex flex-col gap-[10rem]">
            <ContainerCustom className="relative">
                <section
                    className="flex flex-col items-center justify-center max-w-lg mx-auto pt-10 gap-[4rem]"
                    id="contact"
                >
                    <h1 className="lg:text-4xl text-2xl font-bold text-center text-black capitalize">
                        Scrivere una recensione
                    </h1>
                    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center justify-center gap-4 mt-2 w-full">
                        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 w-full">
                            <input onChange={(e) => setGender(e.target.value)} checked={gender == "male"} id="male" type="radio" value="male" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label for="male" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-900">Male</label>
                        </div>
                        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 w-full">
                            <input onChange={(e) => setGender(e.target.value)} checked={gender == "female"} id="female" type="radio" value="female" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label for="female" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-900">Female</label>
                        </div>
                        <textarea
                            placeholder="Revisione"
                            className="text-black lg:text-lg text-sm bg-transparent uppercase rounded-[20px] px-4 py-3 border border-[#000] focus:outline-none w-full resize-none"
                            rows={10}
                            onChange={e => setReview(e.target.value)}
                            value={review}
                        />
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="bg-black mt-2 text-white lg:text-lg text-sm uppercase rounded-[100px] px-4 py-3 focus:outline-none w-1/2 border border-[#000] transition duration-200 ease-in-out hover:bg-[#2796e5]"
                        >
                            {isLoading ? "Caricamento" : "Inviare"}
                        </button>
                    </form>
                </section>
            </ContainerCustom>
        </div>
    )
}

export default WriteReview