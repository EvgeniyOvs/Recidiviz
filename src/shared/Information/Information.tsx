
import styles from './information.module.scss';

export function Information() {
  return (
    <section className={styles.information}>
      <div className={styles.container + " " + styles.grid + " "+ styles.information__container}>
        <div className={styles.information__left}>
          <h3 className={styles.information__title}>
            Get the right information to the right person at the right time.
          </h3>
        </div>
        <div className={styles.information__right}>
          <ul className={styles.information__list}>
            <li className={styles.information__item}>
              <h4 className={styles.information__subTitle}>
                For Leaders
              </h4>
              <p className={styles.information__descr}>
                Set goals, forecast the impact of policy or practice changes, and track their outcomes across your agency.
              </p>
            </li>
            <li className={styles.information__item}>
              <h4 className={styles.information__subTitle}>
                For Line Staff
              </h4>
              <p className={styles.information__descr}>
                Track probation and parole outcomes, see what’s leading to success, and reduce recidivism with our case management system.
              </p>
            </li>
            <li className={styles.information__item}>
              <h4 className={styles.information__subTitle}>
                For the Public
              </h4>
              <p className={styles.information__descr}>
                Use open source code, public data, interactive tools, and data visualizations to understand the state of incarceration, promote accountability, and conduct research.
              </p>
            </li>
            <li className={styles.information__item}>
              <h4 className={styles.information__subTitle}>
                For Policymakers and Advocates
              </h4>
              <p className={styles.information__descr}>
                Project the impact of policies on carceral, fiscal, and community outcomes. Understand where disparities begin, where they grow, and whether a policy is likely to increase or reduce them.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
