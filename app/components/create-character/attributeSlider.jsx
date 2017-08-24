/*
    ./app/components/create-character/slider.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import { DEFAULT_CHAR_ATTRIBUTES } from '../../constants/character.js';
import LinkWithTooltip from '../tooltip.jsx';

export default class AttributeSlider extends React.Component {
  static getAttributeLabelStyle(value) {
    const attributeStyles = DEFAULT_CHAR_ATTRIBUTES;
    let attributeStyle = attributeStyles[0];
    for (let i = 0, len = attributeStyles.length; i < len; i += 1) {
      if (value > attributeStyles[i].value) {
        attributeStyle = attributeStyles[i];
      }
    }
    return attributeStyle;
  }
  constructor() {
    super();
    this.state = {
      trackColor: 'grey'
    };
  }
  render() {
    const minSliderValue = 20;
    const attributesSliderStyle = { width: '100%', margin: 0 };
    const attributesSliderMarks = {
      1: {},
      41: {
        style: {
          color: 'gray'
        }
      },
      61: {
        style: {
          color: 'black'
        }
      },
      76: {
        style: {
          color: 'green'
        }
      },
      86: {
        style: {
          color: 'blue'
        }
      },
      99: {
        style: {
          color: 'purple'
        }
      },
      100: {
        style: {
          color: 'orange'
        }
      }
    };
    const sliderTrackColor = AttributeSlider.getAttributeLabelStyle(
      this.props.attribute.value
    ).color;

    return (
      <div style={attributesSliderStyle}>
        <LinkWithTooltip
          tooltip={this.props.tooltip}
          href="#"
          id={this.props.tooltipId}
        >{this.props.label}</LinkWithTooltip>: <span className="attribute-value">
          {this.props.attribute.value}
        </span> (
        <span style={{
          color: sliderTrackColor
        }}
        >
          {AttributeSlider.getAttributeLabelStyle(
            this.props.attribute.value
          ).name}
        </span>)
        <Slider
          onChange={(value) => {
            let sliderValue = value;
            if (value <= minSliderValue) {
              sliderValue = minSliderValue;
            }
            if (this.props.pointsRemaining - (value - this.props.attribute.value) < 0) {
              sliderValue = this.props.attribute.value;
            }
            this.props.callback(sliderValue);
          }}
          step={1}
          min={1}
          marks={attributesSliderMarks}
          defaultValue={this.props.attribute.value}
          value={this.props.attribute.value}
          trackStyle={{ backgroundColor: sliderTrackColor, height: 10 }}
          handleStyle={{
            borderColor: sliderTrackColor
          }}
          dotStyle={{
            borderColor: sliderTrackColor,
            height: 14,
            width: 14,
            marginLeft: -7,
            marginTop: -3,
            bottom: '-8px'
          }}
          activeDotStyle={{
            borderColor: sliderTrackColor,
            height: 14,
            width: 14,
            marginLeft: -7,
            marginTop: -3,
            bottom: '-8px'
          }}
          railStyle={{ height: 10 }}
        />
      </div>
    );
  }
}

AttributeSlider.propTypes = {
  attribute: PropTypes.shape({
    value: PropTypes.number
  }).isRequired,
  label: PropTypes.string,
  pointsRemaining: PropTypes.number,
  tooltip: PropTypes.string,
  tooltipId: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};
AttributeSlider.defaultProps = {
  label: 'Label',
  pointsRemaining: 1000,
  tooltip: '---'
};
