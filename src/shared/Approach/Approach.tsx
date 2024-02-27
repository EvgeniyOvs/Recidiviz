
import styles from './approach.module.scss';
import {Ted} from "../../Icons/Ted.tsx";
import {NY} from "../../Icons/NY.tsx";
import {State} from "../../Icons/State.tsx";
import {Ap} from "../../Icons/Ap.tsx";
import {Time} from "../../Icons/Time.tsx";
import {Free} from "../../Icons/Free.tsx";

import ap1 from "../../img/ap_1.png";
import ap2 from "../../img/ap_2.png";
import ap_1x from "../../img/ap_1x.png";
import ap_2x from "../../img/ap_2x.png";

export function Approach() {
  return (
      <section className={styles.approach}>
        <div className={styles.approach__top}>
          <div className={styles.grid  + " " + styles.container}>
          <div className={styles.approach__left}>
            <h3 className={styles.approach__title}>
              A human–centered definition of success.
            </h3>
            <p className={styles.approach__descr}>
              Our approach is shaped by the perspective and experience of people impacted by the justice system. Together, we are focused on restoring equity and supporting success in the community.
            </p>
            <button className={styles.btn + " " + styles.approach__btn}>
              Our approach
            </button>
          </div>
            <div className={styles.approach__right}>
              <img className={styles.approach__image1} src={ap1} srcSet={ap_1x} loading="lazy" alt="картинака 1"/>
              <img className={styles.approach__image2}  src={ap2} srcSet={ap_2x} loading="lazy" alt="картинака 2"/>
            </div>
          </div>
        </div>
        <div className={styles.container + " " + styles.approach__bottom}>
          <ul className={styles.approach__list + " " + styles.grid}>
            <li className={styles.approach__item  + " " + styles.flex}>
              <Ted/>
              <a className={styles.approach__link}>
                TED Talks
              </a>
            </li>
            <li className={styles.approach__item  + " " + styles.flex }>
              <NY/>
              <a className={styles.approach__link}>
                The New York Times
              </a>
            </li>
            <li className={styles.approach__item  + " " + styles.flex}>
              <State/>
              <a className={styles.approach__link}>
                StateScoop
              </a>
            </li>
            <li className={styles.approach__item  + " " + styles.flex}>
              <Ap/>
              <a className={styles.approach__link}>
                Associated Press
              </a>
            </li>
            <li className={styles.approach__item  + " " + styles.flex}>
              <Time/>
              <a className={styles.approach__link}>
                Time
              </a>
            </li>
            <li className={styles.approach__item  + " " + styles.flex}>
              <Free/>
              <a className={styles.approach__link}>
                Freethink
              </a>
            </li>
          </ul>
        </div>
      </section>
  );
}
