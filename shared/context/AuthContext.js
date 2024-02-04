import { useEffect } from "react";
import { useRouter } from "next/router";
import { useContext, createContext, useState } from "react";
import { setCookie, destroyCookie } from "nookies";
import { parse } from 'cookie';
import link from "@/config";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const login = async (email, password, teacher_type) => {
        setLoading(true);
        try {
            const response = await fetch(`https://flask-hello-world-omega-ivory.vercel.app/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, teacher_type })
            });

            const data = await response.json();
            if (response.status === 200 || response.status === 201) {
                const { user_id, email, subscription_active, subscription_type, demo_active } = data;
                setCookie(null, 'uid', user_id, {
                    maxAge: 60 * 60,
                    path: '/',
                })
                setUser({ user_id, user_email : email, subscription_active, subscription_type, demo_active });
                router.push('/dashboard');
            } else {
                throw new Error(data.message);
            }
        } catch (err) {
            throw new Error(err);
        } finally {
            setLoading(false);
        }
    }

    const logout = () => {
        destroyCookie(null, 'uid');
        setUser(null);
        // window.location.reload();
    }

    useEffect(() => {
        const unsubscribe = async () => {
            setLoading(true);
            const cookies = parse(document.cookie);
            const uid = cookies.uid;
            if (uid) {
                const response = await fetch(`/api/users/status/${uid}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                const data = await response.json();

                if (response.status === 200) {
                    const { user_id, user_email, subscription_active, subscription_type, demo_active } = data.data;
                    setUser({ user_id, user_email, subscription_active, subscription_type, demo_active });
                } else {
                    setUser(null);
                }
            }
            setLoading(false);
        }
        unsubscribe();

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext)
}