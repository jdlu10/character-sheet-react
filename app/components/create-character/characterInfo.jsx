/*
    ./app/components//components/characterInfo.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import Slider from 'react-slick';
import CHAR_PORTRAITS from '../../constants/characterPortraits.js';
import CharacterName from './characterName.jsx';
import CharacterBio from './characterBio.jsx';

export default function CharacterInfo(props) {
  const {
    characterBeingCreated,
    setCharacterName,
    setEditingNameMode,
    setCharacterBio,
    setEditingBioMode,
    setPortrait
  } = props;
  const slickSettings = {
    initialSlide: characterBeingCreated.portraitId - 1,
    dots: false,
    speed: 500,
    slidesToShow: 5,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 3
        }
      }
    ],
    afterChange: (idx) => { setPortrait(idx + 1); }
  };
  const portraits = CHAR_PORTRAITS.map(image => (
    <div key={image.id}><Image src={image.image} rounded /></div>
    )
  );

  return (
    <Panel header="Character Info">
      <ListGroup fill>
        <ListGroupItem className="info">
          <strong>Portrait:</strong>
          <Slider {...slickSettings}>
            {portraits}
          </Slider>
        </ListGroupItem>
        <ListGroupItem className="info-heading">
          Enter the basic information of your character here. Double click to edit name and bio.
        </ListGroupItem>
        <ListGroupItem className="info">
          <strong>Name:</strong>
          <CharacterName
            characterBeingCreated={characterBeingCreated}
            setCharacterName={setCharacterName}
            setEditingNameMode={setEditingNameMode}
          />
        </ListGroupItem>
        <ListGroupItem className="info">
          <strong>Bio:</strong>
          <CharacterBio
            characterBeingCreated={characterBeingCreated}
            setCharacterBio={setCharacterBio}
            setEditingBioMode={setEditingBioMode}
          />
        </ListGroupItem>
      </ListGroup>

    </Panel>
  );
}

CharacterInfo.propTypes = {
  characterBeingCreated: PropTypes.object.isRequired,
  setCharacterName: PropTypes.func.isRequired,
  setEditingNameMode: PropTypes.func.isRequired,
  setCharacterBio: PropTypes.func.isRequired,
  setEditingBioMode: PropTypes.func.isRequired,
  setPortrait: PropTypes.func.isRequired
};
