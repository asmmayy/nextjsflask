"use client"
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import CookieConsentContainer from '@/components/common/CookieConsentContainer'
import { Provider } from 'react-redux'
import { store } from "../redux/store"
import { AuthContextProvider } from '@/shared/context/AuthContext'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
export default function App({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({});

    }, [])
    return (
        <>
            <Provider store={store}>
                <AuthContextProvider>
                    <ToastContainer />
                    <Component {...pageProps} />
                    <CookieConsentContainer />
                </AuthContextProvider>
            </Provider>
        </>
    )
}