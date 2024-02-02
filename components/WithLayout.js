import React from 'react';

const WithLayout = ({ 
    component: Component,
    layout: Layout,
    className,
    ...rest
 }) => (
    <div className={`${className} sm:py-10 lg:px-[15rem] px-2`}>
        <Layout>
            <Component {...rest} />
        </Layout>
    </div>
)

export default WithLayout;