import React from 'react';
import { Topbar, Footer } from './components';
import ChatBotIcon from '@/components/common/ChatBotIcon'

const Main = ({ children }) => {
    return (
        <>
            <div className='p-0 w-full'>
                <Topbar />
            </div>
            <div>
                {children}
            </div>
            <ChatBotIcon></ChatBotIcon>

            <Footer />
        </>
    )
}

export default Main;