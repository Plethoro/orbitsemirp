import React, { ComponentType } from 'react';
import styles from "./SlideShow.module.scss";

const SlideShow: ComponentType<{}> = () => (
  <aside id={styles.slideShow}>
    <img className={styles.slide1} src="example.jpg" />
    <img className={styles.slide2} src="example2.png" />
    <img className={styles.slide3} src="example3.jpg" />
    <img className={styles.slide4} src="example4.jpg" />
  </aside>
)

export default SlideShow