// Core
import React from 'react';

// Components


// Other
import styles from './styles/index.module.scss';

const sideBarMenu = ["Profile", "Messages", "News", "Music", "Settings"]

export const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      {/* {sideBarMenu.map((listItem, index) => { */}
        <nav>
          <ul>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Messages</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
      {/* })} */}
    </div> 
  )
}