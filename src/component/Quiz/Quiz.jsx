import React, { Component } from "react";
import styles from "./Quiz.module.scss";

import data from "./questions";


export default class Quiz extends Component {
    state = {
        question: [],
        answers: [],
        correctAnswer: []
    }

    checkAnswer = (event) => {
        event.target.value === this.state.correctAnswer ? alert("Correct!") : alert("Incorrect!");
    }

    componentDidMount() {
        data.map(doc => {
            this.setState({
                question: doc.question,
                answers: doc.answers,
                correctAnswer: doc.correctAnswer

            });
        })
    }

    render() {
        const answerData = this.state.answers;
        return (
            <>
                <div className={styles.quiz}>
                    <h1>React Quiz</h1>
                    <p>{this.state.question}</p>
                    {Object.entries(answerData).map((data, index) => {
                        return (<section className={styles.row} key={index}>
                            <input type="radio" name="firstAnswer" onChange={this.checkAnswer} value={data[1]} />
                            <label>{data[1]}</label></section>)
                    })}
                </div>
            </>
        )
    }
}