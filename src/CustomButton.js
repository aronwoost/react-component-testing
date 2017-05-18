import React from 'react';
import classnames from 'classnames';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.actions.onButtonClicked(this.props.id);
  }

  render() {
    return (
      <button onClick={this.onClick}>{this.props.label}</button>
    );
  }
}

export default CustomButton;
