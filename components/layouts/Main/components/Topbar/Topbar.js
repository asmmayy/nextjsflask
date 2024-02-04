import { useEffect, useState } from "react";
import { LOGOS } from "@/shared/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { UserAuth } from "@/shared/context/AuthContext";

const Topbar = () => {
    const { user, logout, loading } = UserAuth();
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (user) {
            setIsLoggedIn(true);
        }
    }, [user]);

    const isSignUpOrSignIn = router.pathname === '/login' || router.pathname === '/signup';

    return (
        <header className="bg-transparent w-full flex flex-row items-center justify-between z-50 xl:px-20 px-2 min-h-[5rem]">
            <Link href={'/'} className={"relative"}>
                <Image
                    src={LOGOS.fastSchool_logo_black}
                    alt="fast school logo"
                    width={100}
                    className="h-auto lg:max-w-[10rem] max-w-[5rem]"
                    pointerEvents={isLoggedIn ? 'none' : 'auto'}
                />
            </Link>
            <div className={`${loading ? 'hidden' : 'flex'} flex-row items-center w-max lg:gap-10 gap-5`}>
                {isLoggedIn && user?.demo_active && (user?.subscription_type === "FREE_DEMO") && router.pathname !== '/subscription/plans' && (
                    <>
                        <Link
                            href={'/subscription/plans'}
                        >
                            <p className={`text-black uppercase hover:text-blue-500 lg:text-base text-xs font-bold`}>
                                Aggiorna il tuo piano
                            </p>
                        </Link>
                        <Link
                            href={'/write_review'}
                        >
                            <p className={`text-black uppercase hover:text-blue-500 lg:text-base text-xs font-bold`}>
                                Review
                            </p>
                        </Link>
                    </>
                )}
                {/* <Link
                    href={router.pathname === '/' ? '#contact-form': router.pathname}
                >
                    <p className={`text-black uppercase hover:text-blue-500 lg:text-base text-xs font-bold`}>
                        Contattaci
                    </p>
                </Link> */}
                {
                    router.pathname !== '/dashboard' && isLoggedIn && (
                        <Link href={'/dashboard'} >
                            <p className={`text-black uppercase hover:text-blue-500 lg:text-base text-xs font-bold`}>
                                Dashboard
                            </p>
                        </Link>
                    )
                }
                {
                    !isLoggedIn && !isSignUpOrSignIn && (
                        <Link href={'/login'} >
                            <p className={`text-black uppercase hover:text-blue-500 lg:text-base text-xs font-bold`}>
                                Accedi
                            </p>
                        </Link>
                    )
                }
                {isLoggedIn && (
                <p
                    className={`text-red-500 uppercase lg:text-base text-xs font-bold cursor-pointer hover:scale-105 transition duration-200 ease-in-out`}
                    onClick={logout}
                >
                    Esci
                </p>
                )}
            </div>
        </header>
    )
}

export default Topbar;
