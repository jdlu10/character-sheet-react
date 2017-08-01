/*
    ./app/components//components/characterBio.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Pager } from 'react-bootstrap';

export default function CharacterCreationPager(props) {
  const { stage, stageTotal, nextPagerHandler, previousPagerHandler } = props;
  let previousDisabled = true;
  let nextDisabled = true;
  if (stage > 1) {
    previousDisabled = false;
  }
  if (stage >= 1 && stage < stageTotal) {
    nextDisabled = false;
  }
  return (
    <Pager>
      <Pager.Item
        previous
        href="#"
        disabled={previousDisabled}
        onSelect={previousPagerHandler}
      >&larr; Previous</Pager.Item>
      <Pager.Item
        next
        href="#"
        disabled={nextDisabled}
        onSelect={nextPagerHandler}
      >Next &rarr;</Pager.Item>
    </Pager>
  );
}

CharacterCreationPager.propTypes = {
  stage: PropTypes.number.isRequired,
  stageTotal: PropTypes.number.isRequired,
  nextPagerHandler: PropTypes.func.isRequired,
  previousPagerHandler: PropTypes.func.isRequired
};
