import React, { Component } from "react";
import styles from "./Weather.module.scss";
import axios from "axios";
import WeatherList from "./WeatherList/WeatherList";

export default class Weather extends Component {
    state = {
        cities: [],
        apiUrl: 'http://api.openweathermap.org/data/2.5/group?id=2643744,4749005,4219762&units=metric&appid=0f33f5c78acf44e7d38b5f6706f6f59d'
    }

    async componentDidMount() {
        const apiKey = "0f33f5c78acf44e7d38b5f6706f6f59d";
        const result = await axios.get(this.state.apiUrl);
        this.setState({ cities: result.data['list'] });
        console.log(this.state.cities)

    }


    render() {
        return (
            <>
                {this.state.cities ? (
                    <section className={styles.cardWrapper}>
                        {this.state.cities.map((city, index) => (
                            <div className={styles.cards} key={index}>
                                <p>Name: {city.name}</p>
                                <p>Temperature: {city.main.temp}</p>
                                <p>Humidity: {city.main.humidity}</p>
                                <p>Minimum: {city.main.temp_min}</p>
                                <p>Maximum: {city.main.temp_max}</p>
                            </div>
                        ))}
                    </section>) : (
                        <h1>Loading data...</h1>
                    )}
            </>
        )
    }
}