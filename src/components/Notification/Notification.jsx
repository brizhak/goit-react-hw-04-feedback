import { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
  static defaultProps = {
    message: 'No feedback given',
  };
  static propTypes = {
    message: PropTypes.string,
  };
  render() {
    return (
      <>
        <p>{this.props.message}</p>
      </>
    );
  }
}

export default Notification;
