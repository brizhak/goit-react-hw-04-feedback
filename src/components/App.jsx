import React, { useState } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import style from './App.module.css';

export const App = () => {
  const [states, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = states;
  const total = good + neutral + bad;
  const statisticsItems = Object.keys(states);

  const onLeaveFeedback = e => {
    const idBtn = e.target.id;
    setState(prevState => ({ ...prevState, [idBtn]: prevState[idBtn] + 1 }));
  };

  const countTotalFeedback = () => {
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good * 100) / total;
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.optionContainer}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={statisticsItems}
              onLeaveFeedback={onLeaveFeedback}
            />
          </Section>
        </div>
        <div className={style.statisticsContainer}>
          {good + neutral + bad > 0 ? (
            <Section title="Statistics">
              <Statistics
                namesProperty={{ good, neutral, bad }}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            </Section>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </div>
      </div>
    </>
  );
};
