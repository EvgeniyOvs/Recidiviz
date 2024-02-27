import styles from './header.module.scss';
import {Logo} from "../../Icons/Logo.tsx";
import {useState} from "react";

export function Header() {
    const [isMenuOpen, toggleMenu] = useState(false);

    function toggleMenuMode() {
        toggleMenu(!isMenuOpen);
    }
    const clickHandler = () => {
        toggleMenuMode();
    };
  return (
      <header className={styles.header + " " + styles.header__position}>
        <div className={styles.container + " " + styles.flex + " " + styles.header__container}>
            <a className={styles.header__logo}>
                <Logo/>
            </a>
            <nav className={isMenuOpen ? styles.nav + " " + styles.nav__active : styles.nav + " " + styles.flex} title="Main navigation">
                <ul className={styles.nav__list + " " + styles.flex}>
                    <li className={styles.nav__item}>
                        <a className={styles.nav__link} href="#">
                            States
                        </a>
                    </li>
                    <li className={styles.nav__item}>
                        <a className={styles.nav__link} href="#">
                            Tools
                        </a>
                    </li>
                    <li className={styles.nav__item}>
                        <a className={styles.nav__link} href="#">
                            People
                        </a>
                    </li>
                    <li className={styles.nav__item}>
                        <a className={styles.nav__link} href="#">
                            Learn More
                        </a>
                    </li>
                    <li className={styles.nav__item}>
                        <a className={styles.nav__link} href="#">
                            Donate
                        </a>
                    </li>
                </ul>
                <a href="#" className={styles.nav__link}>Log In</a>
            </nav>
            <button onClick={clickHandler} className={isMenuOpen ? styles.burger + " " + styles.burger__active : styles.burger}>
                <span className={styles.burger__line}></span>
            </button>
        </div>
      </header>
  );
}
