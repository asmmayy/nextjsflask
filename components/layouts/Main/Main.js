import React from 'react';
import { Topbar, Footer } from './components';

const Main = ({ children }) => {
    return (
        <>
            <div className='p-0 w-full'>
                <Topbar />
            </div>
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Main;