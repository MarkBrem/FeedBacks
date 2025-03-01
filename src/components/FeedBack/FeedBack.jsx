import { Component } from 'react';

export const FeedBack = ({ good, neutral, bad }) => {
    const countTotalFeedback = () => {
        let total = 0;
        return (total = Math.round(good + bad + neutral));
      };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  };
  let total = countTotalFeedback();
  let percentage = countPositiveFeedbackPercentage()
  return (
    <div>
      <h1>Статистика</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Позитивні відгуки:{percentage}%</p>
    </div>
  );
};
