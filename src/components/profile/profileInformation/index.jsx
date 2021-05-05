// Core
import React from 'react';

// Components

// Other
import styles from './styles/index.module.scss'
import Hero from "../../../images/mount-house.jpg";

export const Index = () => {
    return (
        <div className={styles.profileInformation}>
            <div><img src={Hero} alt=""/></div>
            <div className={styles.profileDescription} >Ava + description</div>
        </div>
    )
}