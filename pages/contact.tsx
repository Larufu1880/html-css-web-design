import {NextPage} from "next";
import Head from 'next/head'
import Header from "../components/Header";
import styles from '../styles/index.module.scss';
import Footer from "../components/Footer";
import TweetEmbed from "react-tweet-embed";

const Contact: NextPage = () => (
    <>
        <Head>
            <title>WCB Cafe - CONTACT</title>
        </Head>
        <div className={`${styles.bigBg} ${styles.contact}`}>
            <Header/>
            <div className={styles.wrapper}>
                <h2 className={styles.pageTitle}>Contact</h2>
                <form action={'#'}>
                    <div>
                        <label htmlFor={'name'}>お名前</label>
                        <input type={'text'} id={"name"} name={"your-name"}/>
                    </div>
                    <div>
                        <label htmlFor={'email'}>メールアドレス</label>
                        <input type={'email'} id={'email'} name={'your-email'}/>
                    </div>
                    <div>
                        <label htmlFor={'message'}>メッセージ</label>
                        <textarea id={'message'} name={'your-message'}></textarea>
                    </div>
                    <input type={'submit'} value={'送信'} className={styles.button}/>
                </form>
            </div>
        </div>
        <section className={styles.location}>
            <div className={styles.wrapper}>
                <div className={styles.locationInfo}>
                    <h3 className={styles.subTitle}>
                        カフェ東駅前店
                    </h3>
                    <p>
                        住所: 東京都〇〇区<br/>
                        〇〇〇〇〇〇 000-22-1<br/>
                        〇〇〇〇<br/>
                        電話: xxx-xxxx-xxxx<br/>
                        営業時間: 10:00 ~ 20:00<br/>
                        休日: 水曜日
                    </p>
                </div>
                <div className={styles.locationMap}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51866.94823281228!2d139.7299401082065!3d35.66014990603336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018897833b6c397%3A0x908219c3273d1336!2z5ZCJ6YeO5a62IOaZtOa1t-ODiOODquODiOODs-OCueOCr-OCqOOCouW6lw!5e0!3m2!1sja!2sjp!4v1635612207973!5m2!1sja!2sjp"
                        width="600" height="450" style={{border: 0}} allowFullScreen loading="lazy"></iframe>
                </div>
            </div>
        </section>
        <section className={styles.sns}>
            <div className={styles.wrapper}>
                <div className={styles.snsBox}>
                    <h3 className={styles.subTitle}>Facebook</h3>
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=315&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                        width="340" height="315" style={{border: "none", overflow: "hidden"}} scrolling="no"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
                <div className={styles.snsBox}>
                    <h3 className={styles.subTitle}>Twitter</h3>
                    <TweetEmbed id={'1454285730545602562'} />
                </div>
                <div className={styles.snsBox}>
                    <h3 className={styles.subTitle}>YouTube</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hsC7LsreXdQ"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </div>
        </section>
        <Footer/>
    </>
)

export default Contact;