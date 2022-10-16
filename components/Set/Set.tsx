import Link from 'next/link';
import React, { ComponentType } from 'react';
import { SetType } from '../../types';
import styles from "./Set.module.scss";

export interface SetProps {
  set: SetType;
}

const Set: ComponentType<SetProps> = ({ set }) => (
  <Link href={`/sets/${set.title.toLocaleLowerCase().replace(/\s/g, '-')}`}>
    <a className={styles.set}>
      <h3>${set.price}<sup>USD</sup></h3>
      <img src={set.image} />
      <h2>{set.title}</h2>
    </a>
  </Link>
)

export default Set