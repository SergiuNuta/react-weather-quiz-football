import React, { Component } from 'react';
import styles from "./App.module.scss";
import Header from '../../component/Header/Header';
import Routes from '../../routes/Routes';

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.header}>
          <Header />
        </header>
        <Routes />
      </div>
    );
  }

}
