import React, { useState } from 'react'
import Head from 'next/head'
import WithLayout from '@/components/WithLayout'
import { Main } from '@/components/layouts'
import { WriteReview } from '@/components/views/supportingPages'
import { parse } from 'cookie';

export async function getServerSideProps(context) {
    const cookies = context.req.headers.cookie;
    
    if (typeof cookies !== 'string') {
        return {
            props: {},
        }
    }
    
    const userAuth = parse(cookies).uid;
    if (userAuth === undefined) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
  
    return {
        props: {}, 
    };
  }

function Writereview() {
    return (
        <>
            <Head>
                <title>Fast School</title>
                <meta name="description" content="Fast school info" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <WithLayout
                component={WriteReview}
                layout={Main}
                className={'bg-white'}
            />
            <h1>sadasd</h1>
        </>
    )
}

export default Writereview