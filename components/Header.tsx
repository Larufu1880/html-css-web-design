import styles from "../styles/index.module.scss";
import Image from "next/image";

const Header: React.FC = () => {
    return (
        <header className={`${styles.pageHeader} ${styles.wrapper}`}>
            <h1><a href={'/'}><Image width={210} height={100} className={styles.logo} src={'/chapter4/logo.svg'}
                                     alt={'WCBカフェホーム'}/></a>
            </h1>
            <nav>
                <ul className={styles.mainNav}>
                    <li><a href={'/news'}>News</a></li>
                    <li><a href={'/menu'}>Menu</a></li>
                    <li><a href={'/contact'}>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;