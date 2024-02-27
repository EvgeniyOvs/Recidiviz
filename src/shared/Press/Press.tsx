
import styles from './press.module.scss';
import {Ted} from "../../Icons/Ted.tsx";
import {Correctial} from "../../Icons/Correctial.tsx";
import {Departament} from "../../Icons/Departament.tsx";
import {NY} from "../../Icons/NY.tsx";
import {Corrections} from "../../Icons/Corrections.tsx";
import {RightOnCrime} from "../../Icons/RightOnCrime.tsx";

export function Press() {
  return (
    <section className={styles.press}>
      <div className={styles.container}>
        <div className={styles.press__top + " " + styles.flex}>
          <h3 className={styles.press__title}>
            Recidiviz in the Press
          </h3>
          <a href="#" className={styles.btn + " " + styles.press__link}>
            See All
          </a>
        </div>
        <ul className={styles.press__list + " " + styles.grid}>
          <li className={styles.press__item}>
            <article className={styles.card}>
              <div className={styles.card__top}>
                <Ted/>
                <div className={styles.card__author}>
                  TED Talks
                </div>
                <time className={styles.card__date} dateTime="2022-02-02">2.2.2022</time>
              </div>
              <h4 className={styles.card__title}>
                <a className={styles.card__link} href="#"> Meet the 2022 class of TED Fellows </a>
              </h4>
            </article>
          </li>
          <li className={styles.press__item}>
            <article className={styles.card}>
              <div className={styles.card__top}>
                <Correctial/>
                <div className={styles.card__author}>
                  Correctional News
                </div>
                <time className={styles.card__date} dateTime="2022-02-02">2.2.2022</time>
              </div>
              <h4 className={styles.card__title}>
                <a className={styles.card__link} href="#"> New Partnership Aims to Help Transform Prison Conditions </a>
              </h4>
            </article>
          </li>
          <li className={styles.press__item}>
            <article className={styles.card}>
              <div className={styles.card__top}>
                <Departament/>
                <div className={styles.card__author}>
                  Department of Justice
                </div>
                <time className={styles.card__date} dateTime="2022-02-26">1.26.22</time>
              </div>
              <h4 className={styles.card__title}>
                <a className={styles.card__link} href="#"> Justice Department Establishes Initiative to Strengthen States’ Use of Criminal Justice Data </a>
              </h4>
            </article>
          </li>
          <li className={styles.press__item}>
            <article className={styles.card}>
              <div className={styles.card__top}>
                <NY/>
                <div className={styles.card__author}>
                  The New York Times
                </div>
                <time className={styles.card__date} dateTime="2021-12-27">12.27.21</time>
              </div>
              <h4 className={styles.card__title}>
                <a className={styles.card__link} href="#"> The 2021 Good Tech Awards </a>
              </h4>
            </article>
          </li>
          <li className={styles.press__item}>
            <article className={styles.card}>
              <div className={styles.card__top}>
                <Corrections/>
                <div className={styles.card__author}>
                  Corrections
                </div>
                <time className={styles.card__date} dateTime="2021-11-18">11.18.21</time>
              </div>
              <h4 className={styles.card__title}>
                <a className={styles.card__link} href="#"> Maine DOC to better harness correctional data to improve outcomes </a>
              </h4>
            </article>
          </li>
          <li className={styles.press__item}>
            <article className={styles.card}>
              <div className={styles.card__top}>
                <RightOnCrime/>
                <div className={styles.card__author}>
                  Right on Crime
                </div>
                <time className={styles.card__date} dateTime="2021-09-09">9.9.21</time>
              </div>
              <h4 className={styles.card__title}>
                <a className={styles.card__link} href="#"> Together, We Can Make Mississippi Safer and Reentry-Ready </a>
              </h4>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
}
