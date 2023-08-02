import style from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ namesProperty, total, positivePercentage }) => {
  const percentage = positivePercentage;

  let percentageValue;
  if (Number.isNaN(percentage)) {
    percentageValue = 0;
  } else {
    percentageValue = percentage.toFixed(0);
  }
  const { good, neutral, bad } = namesProperty;
  return (
    <ul className={style.statisticsList}>
      <li key="good">Good : {good}</li>
      <li key="neutral">Neutral : {neutral}</li>
      <li key="bad">Bad : {bad}</li>
      <li key="total">Total : {total}</li>
      <li key="percentage">Positive Feedback : {percentageValue}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  namesProperty: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
