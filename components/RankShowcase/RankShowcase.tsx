import React, { ComponentType, useState } from 'react';
import { RankType } from '../../types';
import styles from "./RankShowcase.module.scss";

export interface RankShowcaseProps {
  ranks: RankType[]
}

const RankShowcase: ComponentType<RankShowcaseProps> = ({ ranks }) => {
  const [selected, setSelected] = useState<number>(0);
  const selectedRank: RankType = ranks[selected];

  return (
    <section id={styles.rankShowcase}>
      <header id={styles.rankHeader}>
        {
          ranks.map((rank, i) => {
            return (
              <button
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
          <p>{selectedRank.description}</p>
          <ul>
            {
              selectedRank.kit.map((item) => {
                return (
                  <li>{item}</li>
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