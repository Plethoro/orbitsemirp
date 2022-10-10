import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSteam, faDiscord } from '@fortawesome/free-brands-svg-icons'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id={styles.homePage}>
        <main className={styles.main}>
          <h1>Lorem Ipsum!</h1>

          <section id={styles.groupInformation}>
            <div className={styles.group}>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={faSteam} />
              </div>
              <span>876</span>
            </div>

            <div className={styles.group}>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={faDiscord} />
              </div>
              <span>1.23K</span>
            </div>
          </section>
        </main>
        <aside>

        </aside>
      </div>
    </>
  )
}

export default Home
