// Core
import React from 'react';

// Components
import { Post } from './post';

// Other
import styles from './styles/index.module.scss';

export const MyPosts = () => {
  return (
    <div className={styles.myPosts}>
      <div>My posts</div>
      <div>New post</div>
      <Post message="This is my first post" likes="15"/>
      <Post message="I'm fine" likes="27"/>
    </div>
  )
}