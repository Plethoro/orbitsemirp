import React, { ComponentType } from 'react';
import styles from "./SlideShow.module.scss";

const SlideShow: ComponentType<{}> = () => (
  <aside id={styles.slideShow}>
    <img className={styles.slide1} src="slide1.png" />
    <img className={styles.slide2} src="slide2.png" />
    <img className={styles.slide3} src="slide3.png" />
    <img className={styles.slide4} src="slide4.png" />
  </aside>
)

export default SlideShow