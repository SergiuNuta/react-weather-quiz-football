import React, { Component } from "react";
import styles from "./Football.module.scss";
import PlayerCard from "./PlayerCard/PlayerCard";

import data from "./data/data/football-team.data.json";


export default class Football extends Component {
    state = {
        players: data,
        team: [],
        goalkeeper: 0,
        defender: 0,
        midfielder: 0,
        attacker: 0,
    }

    handleClick = (player) => {
        const playerIndex = this.state.players.includes(player) ? this.state.players.indexOf(player) : this.state.team.indexOf(player);

        if (this.state.players.includes(player) && this.checkPlayerPosition(player)) {
            const removingPlayer = this.state.players;
            const addingPlayer = this.state.team;
            addingPlayer.push(player);
            removingPlayer.splice(playerIndex, 1);
            this.setState({
                players: removingPlayer,
                team: addingPlayer,
            });
        } else if (this.state.team.includes(player)) {
            this.adjustTeam(player);
            const removingPlayer = this.state.team;
            const addingPlayer = this.state.players;
            addingPlayer.push(player);
            removingPlayer.splice(playerIndex, 1);
            this.setState({
                players: addingPlayer,
                team: removingPlayer,
            });
        }
    };


    checkPlayerPosition = (player) => {
        if (this.state.team.length < 11) {
            switch (player.position) {
                case "Goalkeeper":
                    if (this.state.goalkeeper < 1) {
                        this.setState({ goalkeeper: this.state.goalkeeper + 1 });
                        return true;
                    }
                    break;
                case "Defender":
                    if (this.state.defender < 3) {
                        this.setState({ defender: this.state.defender + 1 });
                        return true;
                    }
                    break;
                case "Midfielder":
                    if (this.state.midfielder < 4) {
                        this.setState({ midfielder: this.state.midfielder + 1 });
                        return true;
                    }
                    break;
                case "Attacker":
                    if (this.state.attacker < 3) {
                        this.setState({ attacker: this.state.attacker + 1 });
                        return true;
                    }
                    break;
                default:
                // "Do nothing";
            }
        }
        return false;
    };

    adjustTeam = (player) => {
        switch (player.position) {
            case "Goalkeeper":
                this.setState({ goalkeeper: this.state.goalkeeper - 1 });
                break;
            case "Defender":
                this.setState({ defender: this.state.defender - 1 });
                break;
            case "Midfielder":
                this.setState({ midfielder: this.state.midfielder - 1 });
                break;
            case "Attacker":
                this.setState({ attacker: this.state.attacker - 1 });
                break;
        }
    };

    render() {
        const playerData = this.state.players;
        const teamData = this.state.team;
        return (
            <>
                <div className={styles.wrapper}>
                    <div className={styles.players}>
                        <div className={styles.card}>
                            <h2>Goalkeeper</h2>
                            {playerData.map(player => player.position === "Goalkeeper" ?
                                <PlayerCard
                                    key={player.id}
                                    playerData={player}
                                    handleClick={this.handleClick}
                                />
                                : null)}
                        </div>
                        <div className={styles.card}>
                            <h2>Defender</h2>
                            {playerData.map(player => player.position === "Defender" ?
                                <PlayerCard
                                    key={player.id}
                                    playerData={player}
                                    handleClick={this.handleClick}
                                />
                                : null)}
                        </div>
                        <div className={styles.card}>
                            <h2>Midfielder</h2>
                            {playerData.map(player => player.position === "Midfielder" ?
                                <PlayerCard
                                    key={player.id}
                                    playerData={player}
                                    handleClick={this.handleClick}
                                />
                                : null)}
                        </div>
                        <div className={styles.card}>
                            <h2>Attacker</h2>
                            {playerData.map(player => player.position === "Attacker" ?
                                <PlayerCard
                                    key={player.id}
                                    playerData={player}
                                    handleClick={this.handleClick}
                                />
                                : null)}
                        </div>
                    </div>

                    <div className={styles.stadium}>
                        <div className={styles.goalkeeperCard}>
                            {teamData.map(player => player.position === "Goalkeeper" ?
                                <PlayerCard
                                    key={player.id}
                                    playerData={player}
                                    handleClick={this.handleClick}
                                />
                                : null)}
                        </div>
                        <div className={styles.defenderCard}>
                            {teamData.map(player => player.position === "Defender" ?
                                <PlayerCard
                                    key={player.id}
                                    playerData={player}
                                    handleClick={this.handleClick}
                                />
                                : null)}
                        </div>
                        <div className={styles.midfielderCard}>
                            {teamData.map(player => player.position === "Midfielder" ?
                                <PlayerCard
                                    key={player.id}
                                    playerData={player}
                                    handleClick={this.handleClick}
                                />
                                : null)}
                        </div>
                        <div className={styles.attackerCard}>
                            {teamData.map(player => player.position === "Attacker" ?
                                <PlayerCard
                                    key={player.id}
                                    playerData={player}
                                    handleClick={this.handleClick}
                                />
                                : null)}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}