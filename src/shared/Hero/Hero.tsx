
import styles from './hero.module.scss';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container + " " + styles.grid+ " " + styles.hero__container}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>
            Every person who safely transitions back to the community is a step toward a better society.
          </h1>
          <p className={styles.hero__descr}>
            Criminal justice leaders use Recidiviz to get a real-time picture of their system, diagnose issues, and drive meaningful changes.
          </p>
          <button className={styles.btn + " " + styles.hero__btn}>
            See our work in action
          </button>
        </div>
      </div>
      <div className={styles.container + " " + styles.hero__containerBottom}>
        <div className={styles.hero__bottom}>
          <h3 className={styles.hero__subTitle}>
            Trusted in:
          </h3>
          <ul className={styles.hero__list + " " + styles.grid}>
            <li className={styles.hero__item}>
              <a className={styles.hero__link}>
                Idaho
              </a>
            </li>
            <li className={styles.hero__item}>
              <a className={styles.hero__link}>
                Maine
              </a>
            </li>
            <li className={styles.hero__item}>
              <a className={styles.hero__link}>
                Missouri
              </a>
            </li>
            <li className={styles.hero__item}>
              <a className={styles.hero__link}>
                North Dakota
              </a>
            </li>
            <li className={styles.hero__item}>
              <a className={styles.hero__link}>
                Pennsylvania
              </a>
            </li>
            <li className={styles.hero__item}>
              <a className={styles.hero__link}>
                Tennessee
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
