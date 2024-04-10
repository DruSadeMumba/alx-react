import React from "react";
import {oneOfType, string, element} from "prop-types";
import BodySection from "./BodySection";
import './BodySectionWithMarginBottom.css';

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className='bodySectionWithMargin'>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: string.isRequired,
  children: oneOfType([string, element]),
}

export default BodySectionWithMarginBottom;
