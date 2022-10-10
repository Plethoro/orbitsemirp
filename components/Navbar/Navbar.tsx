import React, { ComponentType, useEffect } from 'react';
import styles from "./Navbar.module.scss";

const NavBar: ComponentType<{}> = () => {
  return (
    <header id={styles.navbar} className="navbar">
      <img src='/banner.jpg' />
    </header>
  )
}

export default NavBar