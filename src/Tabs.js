import CustomButton from './CustomButton';
import React from 'react';

class Tabs extends React.Component {
  render() {
    const props = this.props;

    return (
      <div className="tabs">
        <CustomButton active={props.activeSection === "home"} label="Home" />
        <CustomButton active={props.activeSection === "about"} label="About" />
      </div>
    );
  }
}

export default Tabs;
