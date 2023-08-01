import { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  static defaultProps = {
    title: 'Default Title',
  };
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    const { title, children } = this.props;
    return (
      <>
        <h2>{title}</h2>
        {children}
      </>
    );
  }
}

export default Section;
