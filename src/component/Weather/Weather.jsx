import React, { Component } from "react";
import styles from "./Weather.module.scss";
import axios from "axios";

export default class Weather extends Component {
    state = {
        cities: [],
        apiUrl: 'http://api.openweathermap.org/data/2.5/group?id=2643744,4749005,4219762&units=metric&appid=0f33f5c78acf44e7d38b5f6706f6f59d'
    }

    async componentDidMount() {
        const result = await axios.get(this.state.apiUrl);
        this.setState({ cities: result.data['list'] });
    }


    render() {
        return (
            <>
                {this.state.cities ? (
                    <section className={styles.cardWrapper}>
                        {this.state.cities.map((city, index) => (
                            <div className={styles.cards} key={index}>
                                <h1>{city.name}</h1>
                                <h3>Temperature: {city.main.temp} &deg;C</h3>
                                <h5>Humidity: {city.main.humidity}%</h5>
                                <h5>Minimum: {city.main.temp_min} &deg;C</h5>
                                <h5>Maximum: {city.main.temp_max} &deg;C</h5>
                            </div>
                        ))}
                    </section>) : (
                        <h1>Loading data...</h1>
                    )}
            </>
        )
    }
}