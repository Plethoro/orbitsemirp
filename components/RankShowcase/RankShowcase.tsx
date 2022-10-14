import React, { ComponentType, useState } from 'react';
import { RankType } from '../../types';
import styles from "./RankShowcase.module.scss";

export interface RankShowcaseProps {
  ranks: RankType[]
}

const RankShowcase: ComponentType<RankShowcaseProps> = ({ ranks }) => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <section id={styles.rankShowcase}>
      <header id={styles.rankHeader}>
        {ranks.map((rank, i) => {
          return (
            <button
              className={`${styles.rankButton} ${selected === i ? styles.selected : ''}`}
              onClick={() => { setSelected(i); }}
            >
              {rank.title}
            </button>
          )
        })}
      </header>
    </section>
  )
}

export default RankShowcase