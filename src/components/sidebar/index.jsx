// Core
import React from 'react';

// Components


// Other
import styles from './styles/index.module.scss';

const sideBarMenu = ["Profile", "Messages", "News", "Music", "Settings"];

export const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      {/* {sideBarMenu.map((listItem, index) => { */}
        <nav>
          <ul>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/dialogs">Dialogs</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/music">Music</a></li>
            <li><a href="/settings">Settings</a></li>
          </ul>
        </nav>
      {/* })} */}
    </div> 
  )
}