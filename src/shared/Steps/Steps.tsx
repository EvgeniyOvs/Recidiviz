
import styles from './steps.module.scss';

export function Steps() {
  return (
    <section className={styles.steps}>
      <div className={styles.container}>
          <h3 className={styles.steps__title}>
            We are a non-profit that partners with state criminal justice agencies to advance their use of data and reduce incarceration.
          </h3>
        <ul className={styles.steps__list + " " + styles.flex}>
          <li className={styles.steps__item}>
            <p className={styles.steps__descr}>
              intake an agency’s disjointed data
            </p>
          </li>
          <li className={styles.steps__item + " " + styles.steps__item__line} aria-hidden="true"></li>
          <li className={styles.steps__item}>
            <p className={styles.steps__descr}>
              deploy tools for all levels of decision making
            </p>
          </li>
          <li className={styles.steps__item + " " + styles.steps__item__line} aria-hidden="true"></li>
          <li className={styles.steps__item}>
            <p className={styles.steps__descr}>
              improve outcomes for justice-impacted individuals
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
