import styles from "./navbar.module.scss";
import CartWidget from "../CartWidget/cartwidget";
const navbar = () => {
    return (
    <div className={styles.container}>
        <nav className={styles.navbar}>
            <div>
                <a className={styles.logo} href="#">Compra Gamer</a>
            </div>
            <ul className={styles.nav_list}>
                <li>
                    <a className={styles.nav_link} href="#">Home</a>
                </li>
                <li>
                    <a className={styles.nav_link} href="#">About</a>
                </li>
                <li>
                    <a className={styles.nav_link} href="#">Contact</a>
                </li>
            </ul>
            <a className={styles.nav_link} href="#">
                <CartWidget />
                    </a>
        </nav>
    </div>
    );
};

export default navbar;