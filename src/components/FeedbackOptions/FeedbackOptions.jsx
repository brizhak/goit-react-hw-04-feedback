import style from './FeedBackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul className={style.btnList} onClick={onLeaveFeedback}>
        {options.map(option => {
          return (
            <li key={option}>
              <button className={style.btn} type="button" id={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
