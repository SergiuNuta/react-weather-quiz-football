import React, { Component } from "react";
import styles from "./PlayerCard.module.scss";


export default class PlayerCard extends Component {
    render() {
        const playerData = this.props.playerData;
        return (
            <>
                <div className={styles.eachPlayer} onClick={() => this.props.handleClick(this.props.playerData)}>
                    <div className={styles.playerCard} >{playerData.name}</div>
                    <div className={styles.playerCard}>{playerData.position}</div>
                </div>
            </>
        );
    }
}