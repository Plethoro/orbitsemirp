import Link from 'next/link';
import React, { ComponentType } from 'react';
import { SetType, UserData } from '../../types';
import styles from "./Set.module.scss";

export interface SetProps {
  set: SetType;
  user: UserData | null,
}

const Set: ComponentType<SetProps> = ({ set, user }) => {
  let isPurchased = false;

  user?.sets.forEach((userSet) => {
    if (userSet.name === set.title) {
      isPurchased = true;
    }
  })

  return (
    <Link href={`/sets/${set.title.toLocaleLowerCase().replace(/\s/g, '-')}`}>
      <a className={styles.set}>
        {!isPurchased && <h3>${set.price}<sup>USD</sup></h3>}
        {isPurchased && <h3 className={styles.owned}>Owned</h3>}
        <img src={set.image} />
        <h2>{set.title}</h2>
      </a>
    </Link>
  )
}

export default Set