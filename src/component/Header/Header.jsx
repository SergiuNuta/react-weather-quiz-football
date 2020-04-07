import React, { Component } from "react";
import styles from "./Header.module.scss";
import NavItem from "./NavItem/NavItem";

export default class Header extends Component {
    render() {
        return(
            <>
            <nav>
                    <ul className={styles.navList}>
                        <NavItem  route="weather" name="Weather" />
                        <NavItem  route="quiz" name="Quiz" />
                        <NavItem  route="football" name="Football" />
                    </ul>
                </nav>
            </>
        )
    }
}