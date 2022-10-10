import React, { ComponentType } from 'react';
import styles from "./Navbar.module.scss";

const NavBar: ComponentType<{}> = () => (
  <header id={styles.navbar}>
    <div>
      <video autoPlay playsInline muted loop>
        <source src="/banner.mp4" type="video/mp4" />
      </video>
    </div>
  </header>
)

export default NavBar