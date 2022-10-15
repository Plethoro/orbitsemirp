import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import NavBar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { NextRouter, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SteamLoginData } from '../types'
import axios from 'axios'

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<any | null>(null);
  const router: NextRouter = useRouter();

  useEffect(() => {
    if (router.query.user) {
      const userData: SteamLoginData = JSON.parse(router.query.user as string);
      const orbitUser = {
        id: userData.id,
        name: userData._json.personaname,
        rank: "Free",
        icon: userData._json.avatarmedium
      }

      axios.post('/api/users/new', { newUser: orbitUser })
        .then((res) => {
          const newUser: any = res.data.user;
          orbitUser.rank = newUser.rank;

          document.cookie = `user=${JSON.stringify(orbitUser)}`;
          setIsLoggedIn(true);
          setUser(orbitUser);

          router.push('/');
        })
        .catch(() => {
          router.push('/');
        })
    }
  }, [router.query]);

  useEffect(() => {
    const cookies: string[] = document.cookie.split(';');

    cookies.forEach((cookie) => {
      const crumbs: string[] = cookie.split('=');

      if (crumbs[0] === 'user') {
        setIsLoggedIn(true);
        setUser(JSON.parse(crumbs[1]))
      }
    })
  }, [])

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} user={user} />
      <Component {...pageProps} isLoggedIn={isLoggedIn} user={user} setUser={setUser} />
      <Footer />
    </>
  )
}

export default MyApp
