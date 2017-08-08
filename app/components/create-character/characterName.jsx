/*
    ./app/components/components/characterName.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { DEFAULT_CHAR_NAME } from '../../constants/character.js';
import TextInput from '../textInput.jsx';

export default function CharacterName(props) {
  const characterBeingCreated = props.characterBeingCreated;
  const setEditingNameMode = props.setEditingNameMode;
  const setCharacterName = props.setCharacterName;
  const characterNameUpdated = (characterBeingCreated.name !== DEFAULT_CHAR_NAME) ? 'editable updated' : 'editable';

  function onSave(newVal) {
    setEditingNameMode(false);
    setCharacterName(newVal);
  }
  function onCancel() {
    setEditingNameMode(false);
  }
  function handleEdit() {
    setEditingNameMode(true);
  }

  let element;

  if (characterBeingCreated.editingName) {
    element = (
      <TextInput
        originalText={characterBeingCreated.name}
        defaultValue={DEFAULT_CHAR_NAME}
        editing={characterBeingCreated.editingName}
        onSave={val => onSave(val)}
        onCancel={() => onCancel()}
        cssClassNames="txt-align-center"
      />
    );
  } else {
    element = (
      <div
        className={characterNameUpdated}
        title="Double click to change"
        onDoubleClick={() => handleEdit()}
      >
        {characterBeingCreated.name}
        &nbsp;
        <Button
          className="edit-char-bio-btn mobile-only"
          onClick={() => handleEdit()}
        >
          EDIT
        </Button>
      </div>
    );
  }

  return (
    <div>
      <span id="character-name">
        {element}
      </span>
    </div>
  );
}

CharacterName.propTypes = {
  characterBeingCreated: PropTypes.object.isRequired,
  setCharacterName: PropTypes.func.isRequired,
  setEditingNameMode: PropTypes.func.isRequired
};
