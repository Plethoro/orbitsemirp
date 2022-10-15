import React, { ComponentType, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { RankType } from '../../types';
import PaypalButton from '../PaypalButton/PaypalButton';
import styles from "./RankShowcase.module.scss";

export interface RankShowcaseProps {
  ranks: RankType[];
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  selectedRank: RankType;
  isLoggedIn: boolean;
  user: any | null;
  setShowOverlay: Dispatch<SetStateAction<boolean>>;
  setUser: Function;
}

const RankShowcase: ComponentType<RankShowcaseProps> = ({ ranks, selected, setSelected, selectedRank, isLoggedIn, user, setShowOverlay, setUser }) => {
  const [userRankIndex, setUserRankIndex] = useState<number>(-1);
  useEffect(() => {
    if (user) {
      ranks.forEach((rank, i) => {
        if (rank.title === user.rank) {
          setUserRankIndex(i);
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
          <div id={styles.rankPaymenet}>
            <h2><b>{selectedRank.title}</b></h2>
            <h2
              className={styles.price}
              style={{ backgroundColor: selectedRank.colour }}
            >
              ${selectedRank.price}<sup>USD</sup>
            </h2>
            {selected > userRankIndex &&
              <PaypalButton
                cost={selectedRank.price}
                disabled={!isLoggedIn}
                rank={selectedRank.title}
                steamId={user ? user.id : ''}
                setShowOverlay={setShowOverlay}
                setUser={setUser}
              />
            }
            {!(selected > userRankIndex) && <sup><i>Already Owned</i></sup>}
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