// Core
import React from 'react';

// Components
import { MyPosts } from './myPosts';

// Other
import styles from './styles/index.module.scss';
import Hero from '../../images/mount-house.jpg';


export const Profile = () => {
  return (
    <div className={styles.profile}>
      <div><img src={Hero} alt=""/></div>
      <div>Ava + description</div>
      <MyPosts />
    </div>
  )
}