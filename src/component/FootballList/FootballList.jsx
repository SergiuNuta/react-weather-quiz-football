import React, { Component } from "react";
import styles from "./FootballList.module.scss";
import Football from "../Football/Football";

import data from "../Football/data/data/football-team.data.json";

export default class FootballList extends Component {
    state = {
        players: [],
    }

    componentDidMount() {
        const players = data.map(player => player);
        this.setState({ players: [...this.state.players, players] });

    }
    render() {
        return (
            <>
                <section className={styles.wrapper}>
                    {this.state.players.map((player, index) => (
                        <Football playerData={player} key={index} />
                    ))}
                </section>
            </>
        );
    }
}