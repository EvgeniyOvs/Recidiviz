
import styles from './info.module.scss';

export function Info() {
  return (
      <section className={styles.info}>
          <div className={styles.info__content}>
              <div className={styles.info__text}>
                  <h3 className={styles.info__title}>
                      See the forest and the trees.
                  </h3>
                  <p className={styles.info__descr}>
                      The criminal justice system can't support safe, whole communities without feedback on what’s working and what’s not. We stitch together data from fragmented systems to provide decision-makers with the information they need to improve outcomes. With this data, we surface opportunities to safely chart a path to a smaller system, and to track the impact of policy and practice changes over time.
                  </p>
              </div>
          </div>
      </section>
  );
}
