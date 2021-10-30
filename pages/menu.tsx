import {NextPage} from "next";
import Head from "next/head";
import Header from "../components/Header";
import styles from '../styles/index.module.scss'
import Footer from "../components/Footer";

const Menu: NextPage = () => {
    return (
        <>
            <Head>
                <title>WCB Cafe - MENU</title>
            </Head>
            <div className={`${styles.menu} ${styles.bigBg}`}>
                <Header/>
                <div className={`${styles.menuContent} ${styles.wrapper}`}>
                    <h2 className={styles.pageTitle}>Menu</h2>
                    <p>
                        体に美味しい自然食を提供する、WCB CAFE。無添加の食材を利用したメニューが特徴です。
                        美味しいブレンドコーヒーとヘルシーなオーガニックフードで体の内側から癒やされてください
                    </p>
                </div>
            </div>
            <div className={`${styles.wrapper} ${styles.grid}`}>
                <div className={styles.bigBox}>
                    <img src={'chapter6/menu1.jpg'} alt={''} />
                    <p>写真キャプション写真キャプション</p>
                </div>
                <div>
                    <img src={'chapter6/menu2.jpg'} alt={''} />
                    <p>写真キャプション写真キャプション</p>
                </div>
                <div>
                    <img src={'chapter6/menu3.jpg'} alt={''} />
                    <p>写真キャプション写真キャプション</p>
                </div>
                <div>
                    <img src={'chapter6/menu4.jpg'} alt={''} />
                    <p>写真キャプション写真キャプション</p>
                </div>
                <div>
                    <img src={'chapter6/menu5.jpg'} alt={''} />
                    <p>写真キャプション写真キャプション</p>
                </div>
                <div>
                    <img src={'chapter6/menu6.jpg'} alt={''} />
                    <p>写真キャプション写真キャプション</p>
                </div>
                <div>
                    <img src={'chapter6/menu7.jpg'} alt={''} />
                    <p>写真キャプション写真キャプション</p>
                </div>
                <div>
                    <img src={'chapter6/menu8.jpg'} alt={''} />
                    <p>写真キャプション写真キャプション</p>
                </div>
                <div>
                    <img src={'chapter6/menu9.jpg'} alt={''} />
                    <p>写真キャプション写真キャプション</p>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Menu;