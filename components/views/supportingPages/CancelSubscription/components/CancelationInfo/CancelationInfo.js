import { useRouter } from 'next/router'

const CancelationInfo = () => {
    const router = useRouter()

    return (
        <section 
            className="flex items-center justify-center w-full pt-[15rem]"
        >
            <div className="text-center">
                <h2 className="text-[1.5rem] text-[#2D2D2D] font-bold">
                    Cancel subscription
                </h2>
                <p className="text-[#2D2D2D] text-[1rem]">
                    We're sorry to see you go! If there's anything we can improve, please let us know.
                </p>
                <div className="mt-4">
                    <button
                        className="bg-black mt-[3rem] text-white lg:text-lg text-sm uppercase px-4 py-3 rounded-lg focus:outline-none w-full border border-[#c8c8c84d] transition duration-200 ease-in-out hover:bg-red-500 shadow-sm"
                        onClick={() => router.push('/')}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CancelationInfo