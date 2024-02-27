
import styles from './footer.module.scss';
import {LogoMin} from "../../Icons/LogoMin.tsx";

export function Footer() {
  return (
      <footer className={styles.footer}>
        <div className={styles.footer__top}>
          <div className={styles.container + " " + styles.grid}>
            <div className={styles.footer__column}>
              <h3 className={styles.footer__title}>
                Company
              </h3>
              <ul className={styles.footer__list}>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    About
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Team
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Supporters
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Diversity
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Blog
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Press
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Careers
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.footer__column}>
              <h3 className={styles.footer__title}>
                Product
              </h3>
              <ul className={styles.footer__list}>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Our Approach
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Corrections Leaders
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Corrections Staff
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Policy Impact
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Public Data
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Security
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.footer__column}>
              <h3 className={styles.footer__title}>
                States
              </h3>
              <ul className={styles.footer__list}>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Overview
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Idaho
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Maine
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Michigan
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Missouri
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    North Dakota
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Pennsylvania
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Tennessee
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.footer__column}>
              <h3 className={styles.footer__title}>
                Network
              </h3>
              <ul className={styles.footer__list}>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Twitter
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    Medium
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    GitHub
                  </a>
                </li>
                <li className={styles.footer__item}>
                  <a href="#" className={styles.footer__link}>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={styles.container + " " + styles.flex + " " + styles.footer__container}>
            <a href="#" className={styles.footer__logo}>
              <LogoMin/>
            </a>
            <div className={styles.footer__text}>
              <ul className={styles.footer__subList}>
                <li className={styles.footer__subList__item}>
                  <a href="#" className={styles.footer__subList__link}>
                    Terms of Service
                  </a>
                </li>
                <li className={styles.footer__subList__item}>
                  <a href="#" className={styles.footer__subList__link}>
                    Privacy
                  </a>
                </li>
                <li className={styles.footer__subList__item}>
                  <a href="#" className={styles.footer__subList__link}>
                    Responsible Disclosure
                  </a>
                </li>
              </ul>
              <div className={styles.footer__text__bottom}>
                <div className={styles.footer__copy}>
                  Copyright © 2017-2022, Recidiviz.
                </div>
                <div className={styles.footer__rights}>
                    All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
