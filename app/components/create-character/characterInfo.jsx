/*
    ./app/components//components/characterInfo.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import CharacterName from './characterName.jsx';
import CharacterBio from './characterBio.jsx';

export default function CharacterInfo(props) {
  const {
    characterBeingCreated,
    setCharacterName,
    setEditingNameMode,
    setCharacterBio,
    setEditingBioMode
  } = props;

  return (
    <Panel header="Character Info">
      Enter the basic information of your character here. Double click to edit name and bio.

      <ListGroup fill>
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
  setEditingBioMode: PropTypes.func.isRequired
};
