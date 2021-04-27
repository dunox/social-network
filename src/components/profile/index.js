// Core
import React from 'react';

// Components


// Other
import styles from './styles/index.module.scss';
import Hero from '../../images/mount-house.jpg';

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <div><img src={Hero} alt=""/></div>
      <div>Ava + description</div>
      <div>My posts</div>
      <div>New post</div>
      <div>Post 1</div>
      <div>Post 2</div>
    </div>
  )
}