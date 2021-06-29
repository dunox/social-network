// Core
import React from 'react';

// Components
import { ProfileInformation } from "./profileInformation";
import { MyPosts } from './myPosts';


// Other
import styles from './styles/index.module.scss';


export const Profile = (props) => {
    return (
    <div className={styles.profile}>
      <ProfileInformation />
      <MyPosts 
        posts={props.profilePage.postData}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
      />
    </div>
  )
}