import React, { ComponentType, useEffect } from 'react';
import styles from "./Navbar.module.scss";

const NavBar: ComponentType<{}> = () => (
  <header id={styles.navbar} className="navbar">
    <div>
      <video autoPlay playsInline muted loop>
        <source src="/banner.mp4" type="video/mp4" />
      </video>
    </div>
  </header>
)

export default NavBar