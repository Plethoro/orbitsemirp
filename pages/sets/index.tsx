import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Sets.module.scss'
import sets from '../../sets.json'
import { SetType, UserData } from '../../types'
import Set from '../../components/Set/Set'

const Sets: NextPage<{ user: UserData | null, }> = ({ user }) => {
  return (
    <>
      <Head>
        <title>Sets | Orbit Semi-Rp</title>
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

      <div id={styles.backgroundImg}>
        <div id={styles.overlay} />
        <img src={`/slide3.png`} />
      </div>

      <div id={styles.setsPage}>
        <div className={styles.header}>
          <h1>Available Sets:</h1>
        </div>

        <main >
          <h2>Sets are given every server wipe, take a screenshot of this page to show to the admins to obtain them.</h2>
          <div className={styles.setsShowcase}>
            {sets.map((set: SetType, i) => {
              return <Set key={i} set={set} user={user} />
            })}
          </div>
        </main>
      </div>
    </>
  )
}

export default Sets