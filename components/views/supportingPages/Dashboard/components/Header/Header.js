import { useRouter } from "next/router";
import { useState } from "react";

const Header = ({ user, loading, userUrl, handleUrlChange, handleClear, handleSubmit}) => {
    const router = useRouter();
    const [role, setRole] = useState('');
    
    const isUserAllowedToGenerate = () => {
        return true
        if (loading) return false;
        if (!user) return false;
        if (!user?.demo_active && !user?.subscription_active) return false;
        return true;
    }

    const handleUpgradePlan = () => {
        router.push('/subscription/plans');
    };
console.log(user)
    return (
        <section 
            className="flex flex-col xl:flex-row items-center justify-between w-full pt-[5rem] lg:gap-2 gap-[2rem] px-[5rem]"
        >
            <p className="text-black lg:text-base text-xs font-bold xl:max-w-[50%] max-w-full">
                Semplifica la scuola con un click!<br />
                Accelerare le attività didattiche e rendere l'apprendimento più accessibile e interessante con l'Intelligenza Artificiale. 
                Crea quiz e lezioni coinvolgenti utilizzando video di YouTube, pagine di Wikipedia, PDF e materiali didattici online con un semplice click di un pulsante.
            </p>
            <div className="flex flex-col gap-4 lg:w-[15rem] w-full">
                <p className="text-black lg:text-base text-xs font-bold">
                    build your lesson fast
                </p>
                <input 
                    type="text"
                    value={userUrl}
                    onChange={handleUrlChange}
                    onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSubmit();
                            }
                        }
                    }
                    placeholder="Insert URL"
                    className="text-gray-800 text-sm px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200 w-full"
                />
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
                <div className="flex lg:flex-row flex-col items-center justify-end w-full gap-2">
                    <button className="bg-slate-400 hover:bg-slate-500 text-black text-sm px-3 py-2 rounded-lg focus:outline-none transition duration-200 w-full lg:w-max" onClick={handleClear}>
                        Clear
                    </button>
                    <div className={`${loading ? 'hidden' : 'block'}`}>
                        {isUserAllowedToGenerate() ? (
                            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 rounded-lg focus:outline-none transition duration-200 w-full lg:w-max" onClick={handleSubmit}>
                                Run
                            </button>
                        ) : (
                            <button className="bg-amber-400 text-black text-sm px-3 py-2 rounded-lg focus:outline-none transition duration-200 w-full lg:w-max" onClick={handleUpgradePlan}>
                                Upgrade your plan
                            </button>
                        )}
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Header