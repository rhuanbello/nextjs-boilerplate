import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="" />
        <meta name="description" content="" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
