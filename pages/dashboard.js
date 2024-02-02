import Head from 'next/head'
import WithLayout from '@/components/WithLayout'
import { Main } from '@/components/layouts'
import { Dashboard } from '@/components/views/supportingPages'
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


export default function DashboardPage() {
    return (
      <>
        <Head>
            <title>Fast School</title>
            <meta name="description" content="Fast school info" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
            <script src="bower_components/aos/dist/aos.js"></script> 
        </Head>
        <WithLayout
            component={Dashboard}
            layout={Main}
            className={'bg-white'}
        />
      </>
    )
}