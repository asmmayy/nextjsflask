import Head from 'next/head'
import WithLayout from '@/components/WithLayout'
import { Main } from '@/components/layouts'
import { Signup } from '@/components/views/landingPages'
import { parse } from 'cookie';

export async function getServerSideProps(context) {
    const cookies = context.req.headers.cookie;
    
    if (typeof cookies !== 'string') {
        return {
            props: {},
        }
    }
    
    const userAuth = parse(cookies).uid;
    if (userAuth) {
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false,
            },
        }
    }
  
    return {
        props: {}, 
    };
}

export default function HomePage() {
    return (
      <>
        <Head>
            <title>Fast School</title>
            <meta name="description" content="Fast school info" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <WithLayout
            component={Signup}
            layout={Main}
            className={'app-background'}
        />
      </>
    )
}