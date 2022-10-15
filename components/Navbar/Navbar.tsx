import Link from 'next/link';
import React, { ComponentType } from 'react';
import styles from "./Navbar.module.scss";
import ranks from '../../ranks.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSteam } from '@fortawesome/free-brands-svg-icons';

const NavBar: ComponentType<{ isLoggedIn: boolean; user: any }> = ({ isLoggedIn, user }) => {
  let selectedRank: any = { colour: 'white' };

  ranks.forEach((rank) => {
    if (user) {
      if (rank.title === user.rank) {
        selectedRank = rank
      }
    }
  })

  return (
    <header id={styles.navbar}>
      <Link href='/'>
        <a className={styles.videoContainer}>
          <video autoPlay playsInline muted loop>
            <source src="/banner.mp4" type="video/mp4" />
          </video>
        </a>
      </Link>

      <div className={styles.linksContainer}>
        <Link href={'/ranks'}>Ranks</Link>

        {!isLoggedIn && (<><FontAwesomeIcon icon={faSteam} /><Link href='/api/auth/login'>Login</Link></>)}
        {isLoggedIn && (
          <div id={styles.userInfoContainer}>
            <div>
              <h3>{user.name}</h3>
              <h3 className={styles.rank} style={{ backgroundColor: selectedRank.colour }}>{user.rank}</h3>
            </div>
            <img src={user.icon} />
          </div>
        )}
      </div>
    </header>
  )
}

export default NavBar