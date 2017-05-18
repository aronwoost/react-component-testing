import React from 'react';
import classnames from 'classnames';

class CustomButton extends React.Component {
  render() {
    const props = this.props;
    const classNames = classnames({
      active: props.active,
    });

    return (
      <button className={classNames}>{props.label}</button>
    );
  }
}

export default CustomButton;
