import { Component } from 'react';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

class Statistics extends Component {
  static defaultProps = {
    namesProperty: {},
  };
  static propTypes = {
    namesProperty: PropTypes.objectOf(PropTypes.number).isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  render() {
    const { namesProperty, total, positivePercentage } = this.props;
    const percentage = positivePercentage;

    let percentageValue;
    if (Number.isNaN(percentage)) {
      percentageValue = 0;
    } else {
      percentageValue = percentage.toFixed(0);
    }
    return (
      <ul className={style.statisticsList}>
        <li key="good">Good : {namesProperty.good}</li>
        <li key="neutral">Neutral : {namesProperty.neutral}</li>
        <li key="bad">Bad : {namesProperty.bad}</li>
        <li key="total">Total : {total}</li>
        <li key="percentage">Positive Feedback : {percentageValue}%</li>
      </ul>
    );
  }
}

export default Statistics;
