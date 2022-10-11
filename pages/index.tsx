import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSteam, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { HomepageProps } from '../types'
import homePageProps from '../ssr'
import SlideShow from '../components/SlideShow/SlideShow'

export const getServerSideProps: GetServerSideProps = homePageProps;

const Home: NextPage<HomepageProps> = ({ steamMembers, discordMembers, unturnedPlayers }) => {
  return (
    <>
      <Head>
        <title>Orbit Semi-Rp</title>
        <meta name="description" content="Orbit Semi-RP is a new upcoming server , with a custom map and soon custom mods . We plan on making a server where the players have a choice on whats going to be on our server and making the server easy to play and most importantly fun to play!" />
        <link rel="icon" href="a/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/meta/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/meta/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/meta/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/meta/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/meta/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/meta/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/meta/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/meta/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/meta/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/meta/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/meta/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/meta/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/meta/favicon-16x16.png" />
        <link rel="manifest" href="/meta/manifest.json" />
        <meta name="msapplication-TileColor" content="#10131a" />
        <meta name="msapplication-TileImage" content="/meta/ms-icon-144x144.png" />
        <meta name="theme-color" content="#10131a" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property='og:locale' content='en_CA' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content="Orbit Semi-Rp" />
        <meta property='og:description' content="Orbit Semi-RP is a new upcoming server , with a custom map and soon custom mods . We plan on making a server where the players have a choice on whats going to be on our server and making the server easy to play and most importantly fun to play!" />
        <meta property='og:image' content="/orbit.png" />
      </Head>

      <div id={styles.homePage}>
        <main className={styles.main}>
          <div id={styles.header}>
            <div className={styles.icon}>
              <div className={styles.mask1}>
                <div className={styles.mask2}>
                  <img src="/orbit.png" />
                </div>
              </div>
            </div>

            <h1><i>Unturned Modded PVP</i></h1>
          </div>

          <h3>Join our Community:</h3>

          <section id={styles.groupInformation}>
            {/* Steam */}
            <a
              href='https://steamcommunity.com/groups/Orbit-SemiRP'
              target="_blank"
              rel="noreferrer"
              className={styles.group}
            >
              <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={faSteam} />
              </div>
              <span>{steamMembers}</span>
            </a>

            {/* Discord */}
            <a
              href='https://discord.gg/jqGxERcFEe'
              target="_blank"
              rel="noreferrer"
              className={styles.group}
            >
              <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={faDiscord} />
              </div>
              <span>{discordMembers}</span>
            </a>

            {/* Unturned Servers */}
            <a
              href='https://unturned-servers.net/server/299182/'
              target="_blank"
              rel="noreferrer"
              className={styles.group}
            >
              <div className={styles.iconContainer}>
                <img src="unturned.png" />
              </div>
              <span>{unturnedPlayers}</span>
            </a>
          </section>

          <p><b>Orbit Semi-RP</b> is a new upcoming server , with a custom map and soon custom mods . We plan on making a server where the players have a choice on whats going to be on our server and making the server easy to play and most importantly fun to play!</p>

          <ul>
            <li><b>Economy:</b> Buy and sell items, purchase higher ranks and gain access to new, more powerful kits!</li>
            <li><b>New Content:</b> Modded weapons, items, and vehicles are available to be found scattered about, or purchased with credits!</li>
            <li><b>Custom Safezone:</b> A massive custom safezone with housing and apartments available for purchase and customisation!</li>
            <li><b>Rare Items:</b> Find rare, epic, legendary and mythical loot scattered about the map and dropped from zombies!</li>
          </ul>
        </main>

        <SlideShow />
      </div>
    </>
  )
}

export default Home
