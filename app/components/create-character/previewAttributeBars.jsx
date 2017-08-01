/*
    ./app/components//components/characterBio.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';
import { DEFAULT_CHAR_ATTRIBUTES } from '../../constants/character.js';

export default function PreviewAttributeBars(props) {
  function getAttributeLabelStyle(value) {
    const attributeStyles = DEFAULT_CHAR_ATTRIBUTES;
    let attributeStyle = attributeStyles[0];
    for (let i = 0, len = attributeStyles.length; i < len; i += 1) {
      if (value > attributeStyles[i].value) {
        attributeStyle = attributeStyles[i];
      }
    }
    return attributeStyle;
  }

  const sliderTrackColor = getAttributeLabelStyle(
    props.barValue
  ).name;
  const barClassNames = `progress-bar attribute-bars progress-bar-${sliderTrackColor}`;

  return (
    <ProgressBar
      now={props.barValue}
      label={props.barValue}
      bsClass={barClassNames}
    />
  );
}

PreviewAttributeBars.propTypes = {
  barValue: PropTypes.number
};
PreviewAttributeBars.defaultProps = {
  barValue: 20
};
