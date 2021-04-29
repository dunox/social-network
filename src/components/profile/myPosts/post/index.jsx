// Core
import React from 'react';

// Components


// Other
import styles from './styles/index.module.scss';
import Avatar from '../../../../images/avatar.jpeg'

export const Post = (props) => {
  return (
      <div className={styles.post}>
        <img src={Avatar} alt=""/>
        <span>{props.message}</span>
        <span className={styles.like}>Likes: {props.likes}</span>
      </div>
  )
}