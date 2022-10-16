import Image from 'next/image';
import React, { ComponentType, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { RankType, UserData } from '../../types';
import PaypalButton from '../PaypalButton/PaypalButton';
import styles from "./RankShowcase.module.scss";

export interface RankShowcaseProps {
  ranks: RankType[];
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  selectedRank: RankType;
  isLoggedIn: boolean;
  user: UserData | null;
  setShowOverlay: Dispatch<SetStateAction<boolean>>;
  setUser: Function;
}

const generatePrice = (price: string, userRankPrice: number): string => {
  const priceNumber = Number(price);
  let priceString: string = `${Number(priceNumber) - userRankPrice}`;

  if (priceString.endsWith('.5')) {
    priceString += '0';
  } else {
    priceString += '.00';
  }

  return priceString;
}

const RankShowcase: ComponentType<RankShowcaseProps> = ({ ranks, selected, setSelected, selectedRank, isLoggedIn, user, setShowOverlay, setUser }) => {
  const [userRankIndex, setUserRankIndex] = useState<number>(-1);
  const [userRankPrice, setUserRankPrice] = useState<number>(0);

  useEffect(() => {
    if (user) {
      ranks.forEach((rank, i) => {
        if (rank.title === user.rank) {
          setUserRankIndex(i);
          setUserRankPrice(Number(rank.price));
        }
      })
    }
  }, [user]);

  return (
    <section id={styles.rankShowcase}>
      <header id={styles.rankHeader}>
        {
          ranks.map((rank, i) => {
            return (
              <button
                key={i}
                className={`${styles.rankButton} ${selected === i ? styles.selected : ''}`}
                onClick={() => { setSelected(i); }}
              >
                {rank.title}
              </button>
            )
          })
        }
      </header>

      <main id={styles.rankInfo}>
        <div id={styles.rankIcon}>
          <img src={selectedRank.icon} />
        </div>

        <div id={styles.rankContent}>
          <h3 style={{ opacity: userRankPrice > 0 && selected > userRankIndex ? 1 : 0 }}><i>Upgrade to</i></h3>
          <div id={styles.rankPaymenet}>
            <h2><b>{selectedRank.title}</b></h2>

            <div className={styles.priceContainer}>
              {userRankPrice > 0 && (selected > userRankIndex) &&
                <h3
                  className={styles.price}
                  style={{ backgroundColor: selectedRank.colour }}
                >
                  ${selectedRank.price}
                </h3>
              }

              <h2
                className={styles.price}
                style={{ backgroundColor: selectedRank.colour }}
              >
                <span style={{ textDecoration: !(selected > userRankIndex) ? 'line-through' : '' }}>
                  ${userRankPrice > 0 && (selected > userRankIndex) ? generatePrice(selectedRank.price, userRankPrice) : selectedRank.price}
                </span>
                <sup className={styles.currency}>USD</sup>
              </h2>
            </div>

            {selected > userRankIndex &&
              <PaypalButton
                cost={userRankPrice > 0 && (selected > userRankIndex) ? generatePrice(selectedRank.price, userRankPrice) : selectedRank.price}
                disabled={!isLoggedIn}
                rank={selectedRank.title}
                steamId={user ? user.steam_id : ''}
                setShowOverlay={setShowOverlay}
                setUser={setUser}
              />
            }

            {!(selected > userRankIndex) && <sup className={styles.owned}><i>Already Owned</i></sup>}
          </div>

          {/* <p>{selectedRank.description}</p> */}

          <ul>
            {
              selectedRank.details.map((detail, i) => {
                return (
                  <li key={i}>{detail}</li>
                )
              })
            }
          </ul>
        </div>
      </main>
    </section>
  )
}

export default RankShowcase