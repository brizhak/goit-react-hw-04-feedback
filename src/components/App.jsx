import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import style from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    let idBtn = e.target.id;
    for (let id in this.state) {
      if (id === idBtn) {
        this.setState(prevState => ({ [idBtn]: (prevState[idBtn] += 1) }));
      }
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return (good * 100) / total;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const statisticsItems = Object.keys(this.state);

    return (
      <>
        <div className={style.container}>
          <div className={style.optionContainer}>
            <Section title="Please leave feedback">
              <FeedbackOptions
                options={statisticsItems}
                onLeaveFeedback={this.onLeaveFeedback}
              />
            </Section>
          </div>
          <div className={style.statisticsContainer}>
            {good + neutral + bad > 0 ? (
              <Section title="Statistics">
                <Statistics
                  namesProperty={{ good, neutral, bad }}
                  total={this.countTotalFeedback()}
                  positivePercentage={this.countPositiveFeedbackPercentage()}
                />
              </Section>
            ) : (
              <Notification message="There is no feedback"></Notification>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default App;
