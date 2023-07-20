import React, { Component } from "react";

import { QuizQuestionsAnswers } from "./QuizQuestionsAnswers";
import "./Quiz.css";

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      options: [],
      end: false,
      score: 0,
      disabled: true,
      userAnswer: null,
    };
  }

  loadQuestion = () => {
    const { index } = this.state;

    this.setState(() => {
      return {
        options: QuizQuestionsAnswers[index].options,
        answer: QuizQuestionsAnswers[index].answer,
        question: QuizQuestionsAnswers[index].question,
      };
    });
  };

  componentDidMount() {
    this.loadQuestion();
  }

  componentDidUpdate(prevProps, prevState) {
    const { index } = this.state;

    if (this.state.index !== prevState.index) {
      this.setState(() => {
        return {
          question: QuizQuestionsAnswers[index].question,
          options: QuizQuestionsAnswers[index].options,
          answer: QuizQuestionsAnswers[index].answer,
        };
      });
    }
  }

  checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false,
    });
  };

  endQuizHandler = () => {
    const { answer, userAnswer, score } = this.state;
    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }
    if (this.state.index === QuizQuestionsAnswers.length - 1) {
      this.setState({
        disabled: true,
        end: true,
      });
    }
  };

  nextQuestionHandler = () => {
    const { userAnswer, answer, score } = this.state;

    if (userAnswer === answer) {
      this.setState({
        score: score + 1,
      });
    }

    this.setState({
      index: this.state.index + 1,
      userAnswer: null,
    });
  };

  restartQuizHandler = () => {
    this.setState({
      index: 0,
      options: [],
      end: false,
      score: 0,
      disabled: true,
      userAnswer: null,
    });
  };

  render() {
    <h1>Dance Quiz</h1>;
    const { question, options, index, userAnswer, end } = this.state;

    if (end) {
      return (
        <div>
          <h1>You scored: {this.state.score} out of a possible 4 questions</h1>
          <h3>The correct answers were:</h3>
          <ul className="list-options">
            {QuizQuestionsAnswers.map((item, index) => (
              <li className="options" key={index}>
                {item.answer}
              </li>
            ))}
            <button onClick={this.restartQuizHandler}>Play Again</button>
          </ul>
        </div>
      );
    }
    return (
      <>
        <h1 className="Header">Test your dance knowledge</h1>

        <div>
          <h2>{question}</h2>
          {options.map((option) => (
            <p
              key={option.id}
              className={`options ${userAnswer === option ? "selected" : null}`}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}

          {index < QuizQuestionsAnswers.length - 1 && (
            <button
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Next Question
            </button>
          )}

          {index === QuizQuestionsAnswers.length - 1 && (
            <button onClick={this.endQuizHandler}>End of Dance Quiz</button>
          )}

          <span>{`Question ${index + 1} of ${
            QuizQuestionsAnswers.length
          }`}</span>
        </div>
      </>
    );
  }
}

export default Quiz;
