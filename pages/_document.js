import ChatBotIcon from '@/components/common/ChatBotIcon'
import Document, { Html, Head, Main, NextScript } from 'next/document'
 
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link
            rel="stylesheet"
            type="text/css"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <ChatBotIcon />
        </body>
      </Html>
    )
  }
}