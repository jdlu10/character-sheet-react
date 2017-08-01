/*
    ./app/components/create-character/showTraits.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';

export default class ShowTraits extends React.Component {
  constructor() {
    super();
    this.state = {
      trackColor: 'grey'
    };
  }
  render() {
    const sliderTrackColor = 'bleh';

    return (
      <div id="create-character-show-traits">
        LIST OF TRAITS
      </div>
    );
  }
}

ShowTraits.propTypes = {
  attribute: PropTypes.shape({
    value: PropTypes.number
  }).isRequired,
  label: PropTypes.string
};
ShowTraits.defaultProps = {
  label: 'Label',
  pointsRemaining: 1000
};
