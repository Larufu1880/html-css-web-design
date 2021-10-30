import {NextPage} from "next";
import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/index.module.scss";
import Image from "next/image";
import Footer from "../components/Footer";

const News: NextPage = () => {
    return (
        <>
            <Head>
                <title>WCB Cafe - NEWS</title>
            </Head>
            <div className={styles.news}>
                <Header />
                <div>
                    <h2 className={styles.pageTitle}>News</h2>
                </div>
            </div>
            <div className={`${styles.newsContents} ${styles.wrapper}`}>
                <article>
                    <header className={styles.postInfo}>
                        <h2 className={styles.postTitle}>店内ギャラリーの絵が新しくなりました</h2>
                        <p className={styles.postDate}>3/30 <span>2021</span></p>
                        <p className={styles.postCat}>カテゴリー: お店の紹介</p>
                    </header>
                    <img src={'chapter5/wall.jpg'} alt={'店内の様子'} />
                    <p>
                        体に優しい自然食を提供する、WCB CAFE。無添加の食材を利用したメニューが特徴です。
                        美味しいブレンドコーヒーとヘルシーなオーガニックフードで体の内側から癒やされてください。
                        体に優しい自然食を提供する、WCB CAFE。無添加の食材を利用したメニューが特徴です。
                        美味しいブレンドコーヒーとヘルシーなオーガニックフードで体の内側から癒やされてください。
                    </p>
                    <p>
                        体に優しい自然食を提供する、WCB CAFE。無添加の食材を利用したメニューが特徴です。
                        美味しいブレンドコーヒーとヘルシーなオーガニックフードで体の内側から癒やされてください。
                        体に優しい自然食を提供する、WCB CAFE。無添加の食材を利用したメニューが特徴です。
                        美味しいブレンドコーヒーとヘルシーなオーガニックフードで体の内側から癒やされてください。
                    </p>
                    <p>
                        体に優しい自然食を提供する、WCB CAFE。無添加の食材を利用したメニューが特徴です。
                        美味しいブレンドコーヒーとヘルシーなオーガニックフードで体の内側から癒やされてください。
                    </p>
                </article>
                <aside>
                    <h3 className={styles.subTitle}>カテゴリー</h3>
                    <ul className={styles.subMenu}>
                        <li><a href={'#'}>お店の紹介</a> </li>
                        <li><a href={'#'}>期間限定メニュー</a> </li>
                        <li><a href={'#'}>イベント</a> </li>
                        <li><a href={'#'}>お客様との会話</a> </li>
                    </ul>

                    <h3 className={styles.subTitle}>このお店について</h3>
                    <p>
                        体に優しい自然食を提供する、WCB CAFE。無添加の食材を利用したメニューが特徴です。
                        美味しいブレンドコーヒーとヘルシーなオーガニックフードで体の内側から癒やされてください
                    </p>
                </aside>
                <div className={styles.ad}>
                    <img src={'chapter5/banner.jpg'} alt={"新メニュー登場"} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default News;