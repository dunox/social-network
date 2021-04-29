// Core
import React from 'react';

// Components


// Other
import styles from './styles/index.module.scss';
import Logo from '../../images/logo.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="" />
    </header>
  )
}