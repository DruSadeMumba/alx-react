import React from "react";
import {oneOfType, string, element} from "prop-types";

class BodySection extends React.Component {
  render() {
    return (
      <div className='bodySection'>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

BodySection.propTypes = {
  title: string.isRequired,
  children: oneOfType([string, element]),
}

export default BodySection;
