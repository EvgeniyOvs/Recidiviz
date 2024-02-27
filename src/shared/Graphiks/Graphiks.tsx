
import styles from './graphiks.module.scss';
import graphiks from "../../img/graphiks.png";
import graphiks2 from "../../img/graphiks_2x.png"
export function Graphiks() {
  return (
    <section className={styles.graphiks}>
      <img className={styles.graphiks__image} src={graphiks} srcSet={graphiks2} loading="lazy" alt="" aria-hidden="true"/>
    </section>
  );
}
