
import styles from './layout.module.scss';
import {Header} from "../Header";
import {Hero} from "../Hero";
import {Steps} from "../Steps";
import {Approach} from "../Approach";
import {Info} from "../Info";
import {Partners} from "../Partners";
import {Graphiks} from "../Graphiks";
import {Information} from "../Information";
import {Press} from "../Press";
import {Where} from "../Where";
import {Footer} from "../Footer";




export function Layout() {

  return (
    <div className={styles.layout}>
        <Header/>
      <main>
          <Hero/>
          <Steps/>
          <Approach/>
          <Info/>
          <Partners/>
          <Graphiks/>
          <Information/>
          <Press/>
          <Where/>
      </main>
        <Footer/>
    </div>
  );
}
