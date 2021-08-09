// Core
import React from 'react';

// Components
import {NavLink} from "react-router-dom";

// Other
import styles from './styles/index.module.scss';

const sideBarMenu = ["Profile", "Messages", "News", "Music", "Settings"];

export const SideBar = () => {
    return (
        <div className={styles.sideBar}>
            {/* {sideBarMenu.map((listItem, index) => { */}
            <nav>
                <ul>
                    <li><NavLink to="/profile" activeClassName={styles.active} >Profile</NavLink></li>
                    <li><NavLink to="/dialogs" activeClassName={styles.active} >Dialogs</NavLink></li>
                    <li><NavLink to="/news" activeClassName={styles.active} >News</NavLink></li>
                    <li><NavLink to="/music" activeClassName={styles.active} >Music</NavLink></li>
                    <li><NavLink to="/settings" activeClassName={styles.active} >Settings</NavLink></li>
                </ul>
            </nav>
            {/* })} */}
        </div>
    );
}