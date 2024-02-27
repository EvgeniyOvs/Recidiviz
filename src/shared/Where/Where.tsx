
import styles from './where.module.scss';
import map from '../../img/map.png'
export function Where() {
  return (
    <section className={styles.where}>
      <div className={styles.container + " " + styles.grid}>
          <div className={styles.where__content}>
            <h3 className={styles.where__title}>
              Where we work
            </h3>
            <p className={styles.where__descr}>
              We're expanding. Get in touch and start turning your data into action.
            </p>
            <button className={styles.btn + " " + styles.where__btn}>
              Get in touch
            </button>
          </div>
          <div className={styles.where__map}>
            <img src={map} loading="lazy" alt="Карта"/>
          </div>
      </div>
    </section>
  );
}
