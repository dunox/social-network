// Corestore.getState()
import React from 'react';

// Components
import { ProfileInformation } from "./profileInformation";
import { MyPostsContainer } from "./myPosts/myPostsContainer";

// Other
import styles from './styles/index.module.scss';



export const Profile = () => {
    return (
    <div className={styles.profile}>
      <ProfileInformation />
      <MyPostsContainer />
    </div>
  )
}