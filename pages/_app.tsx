import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <meta charSet={'utf-8'}/>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css"
                />
                <link href="https://fonts.googleapis.com/css?family=Philosopher" rel="stylesheet"/>
                <link rel={'icon'} href={'favicon.png'} />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
