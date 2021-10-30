import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.scss'
import Header from "../components/Header";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>WCB Cafe</title>
                <meta name={'description'} content="ブレンドコーヒーとヘルシーなオーガニックフードを提供するカフェ"/>
            </Head>
            <div className={`${styles.bigBg} ${styles.home}`}>
                <Header />
                <div className={styles.homeContent}>
                    <h2 className={styles.pageTitle}>{"We'll Make Your Day"}</h2>
                    <p>おしゃれなカフェで癒やされてみませんか？無添加の食材で体の中からリフレッシュ。</p>
                    <a href={'/menu'} className={styles.button}>メニューを見る</a>
                </div>
            </div>
        </>

    )
}

export default Home
