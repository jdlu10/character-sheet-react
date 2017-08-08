/*
    ./app/components//components/characterBio.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { DEFAULT_CHAR_BIO } from '../../constants/character.js';
import TextInput from '../textInput.jsx';

export default function CharacterBio(props) {
  const characterBeingCreated = props.characterBeingCreated;
  const setEditingBioMode = props.setEditingBioMode;
  const setCharacterBio = props.setCharacterBio;
  const characterBioUpdated = (characterBeingCreated.bio !== DEFAULT_CHAR_BIO) ? 'editable updated textLeft' : 'editable';

  function onSave(newVal) {
    setEditingBioMode(false);
    setCharacterBio(newVal);
  }
  function onCancel() {
    setEditingBioMode(false);
  }
  function handleEdit() {
    setEditingBioMode(true);
  }

  let element;

  if (characterBeingCreated.editingBio) {
    element = (
      <TextInput
        originalText={characterBeingCreated.bio}
        defaultValue={DEFAULT_CHAR_BIO}
        editing={characterBeingCreated.editingBio}
        onSave={val => onSave(val)}
        onCancel={() => onCancel()}
        cssClassNames="txt-align-center"
        inputType="textarea"
      />
    );
  } else {
    element = (
      <div
        className={characterBioUpdated}
        title="Double click to change"
        onDoubleClick={() => handleEdit()}
      >
        {characterBeingCreated.bio}
        &nbsp;
        <Button
          className="edit-char-name-btn mobile-only"
          onClick={() => handleEdit()}
        >
          EDIT
        </Button>
      </div>
    );
  }

  return (
    <div>
      <span id="character-bio">
        {element}
      </span>
    </div>
  );
}

CharacterBio.propTypes = {
  characterBeingCreated: PropTypes.object.isRequired,
  setCharacterBio: PropTypes.func.isRequired,
  setEditingBioMode: PropTypes.func.isRequired
};
