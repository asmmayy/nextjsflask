import Head from 'next/head'
import WithLayout from '@/components/WithLayout'
import { Main } from '@/components/layouts'
import { CancelSubscription } from '@/components/views/supportingPages'

export default function CancelSubscriptionPage() {
    return (
      <>
        <Head>
            <title>Fast School</title>
            <meta name="description" content="Fast school info" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <WithLayout
            component={CancelSubscription}
            layout={Main}
            className={'app-background'}
        />
      </>
    )
}