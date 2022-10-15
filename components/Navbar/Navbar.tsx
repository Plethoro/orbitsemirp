import React, { ComponentType } from 'react';
import styles from "./Navbar.module.scss";

const NavBar: ComponentType<{ isLoggedIn: boolean; user: any }> = ({ isLoggedIn, user }) => (
  <header id={styles.navbar}>
    <div>
      <video autoPlay playsInline muted loop>
        <source src="/banner.mp4" type="video/mp4" />
      </video>
    </div>

    {!isLoggedIn && (<a href='/api/auth/login'>Login</a>)}
    {isLoggedIn && (
      <img src={user.icon} />
    )}
  </header>
)

export default NavBar