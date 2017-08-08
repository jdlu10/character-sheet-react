/*
    ./app/components/TeamName.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { DEFAULT_TEAM_NAME } from '../../constants/team.js';
import TextInput from '../textInput.jsx';

export default function TeamName(props) {
  const team = props.team;
  const teamNameUpdated = (team.name !== DEFAULT_TEAM_NAME) ? ' updated' : '';

  function onSave(newVal) {
    props.setEditingMode(false);
    props.setTeamName(newVal);
  }
  function onCancel() {
    props.setEditingMode(false);
  }
  function handleEdit() {
    props.setEditingMode(true);
  }

  let element;

  if (team.editing) {
    element = (
      <TextInput
        originalText={team.name}
        defaultValue={DEFAULT_TEAM_NAME}
        editing={team.editing}
        onSave={val => onSave(val)}
        onCancel={() => onCancel()}
        cssClassNames="txt-align-center"
      />
    );
  } else {
    element = (
      <em
        className={teamNameUpdated}
        title="Double click to change"
        onDoubleClick={() => handleEdit()}
      >
        {team.name}
        &nbsp;
        <Button
          className="edit-team-name-btn mobile-only"
          onClick={() => handleEdit()}
        >
          EDIT
        </Button>
      </em>
    );
  }

  return (
    <div>
      <h3 id="team-name">
        {element}
      </h3>
    </div>
  );
}

TeamName.propTypes = {
  team: PropTypes.object.isRequired,
  setEditingMode: PropTypes.func.isRequired
};
