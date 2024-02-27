
import styles from './partners.module.scss';
import partners_1 from "../../img/parters_1.png"
import partners_2 from "../../img/parters_2.png"
import partners_3 from "../../img/parters_3.png"
import partners_4 from "../../img/parters_4.png"
import partners_5 from "../../img/parters_5.png"
import partners_6 from "../../img/parters_6.png"
export function Partners() {
  return (
      <section className={styles.partners}>
            <div className={styles.container + " " + styles.partners__container + " " + styles.flex}>
                <h3 className={styles.partners__title}>
                    Partners
                </h3>
                <ul className={styles.partners__list}>
                    <li className={styles.partners__item}>
                        <a className={styles.partners__link} href="#" target="_blank">
                            <img src={partners_1} loading='lazy' width="160px" height="67px" alt="Reform logo" className={styles.partners__logo}/>
                        </a>
                    </li>
                    <li className={styles.partners__item}>
                        <a className={styles.partners__link} href="#" target="_blank">
                            <img src={partners_2} loading='lazy' width="160px" height="67px" alt="Shmidt logo" className={styles.partners__logo}/>
                        </a>
                    </li>
                    <li className={styles.partners__item}>
                        <a className={styles.partners__link} href="#" target="_blank">
                            <img src={partners_3} loading='lazy' width="160px" height="67px" alt="Right on Crime logo" className={styles.partners__logo}/>
                        </a>
                    </li>
                    <li className={styles.partners__item}>
                        <a className={styles.partners__link} href="#" target="_blank">
                            <img src={partners_4} loading='lazy' width="160px" height="67px" alt="Moz logo" className={styles.partners__logo}/>
                        </a>
                    </li>
                    <li className={styles.partners__item}>
                        <a className={styles.partners__link} href="#" target="_blank">
                            <img src={partners_5} loading='lazy' width="160px" height="67px" alt="Aclu logo" className={styles.partners__logo}/>
                        </a>
                    </li>
                    <li className={styles.partners__item}>
                        <a className={styles.partners__link} href="#" target="_blank">
                            <img src={partners_6} loading='lazy' width="160px" height="67px" alt="Y logo" className={styles.partners__logo}/>
                        </a>
                    </li>
                </ul>
                <a href="#" className={styles.partners__more}>See All</a>
            </div>
      </section>
  );
}
