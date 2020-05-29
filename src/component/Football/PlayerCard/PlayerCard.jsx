import React, { Component } from "react";
import styles from "./PlayerCard.module.scss";


export default class PlayerCard extends Component {
    render() {
        console.log(this.props.playerData);
        return (
            <>
                <div className={styles.eachPlayer} onClick={() => this.props.handleClick(this.props.playerData)}>
                    <div className={styles.playerCard} >{this.props.playerData[0].name}</div>
                    <div className={styles.playerCard}>{this.props.playerData[0].position}</div>
                </div>
            </>
        );
    }
}