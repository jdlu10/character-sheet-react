/*
    ./app/components/characterList.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Button } from 'react-bootstrap';

export default function CharacterList(props) {
  const list = props.characterList.map(character =>
    (<div
      className="grid-item"
      key={character.id}
    >
      <div className="content">
        {character.name}, STR: {character.attributes.strength.value}
        <br />
        <br />
        <Button>View</Button>
      </div>
    </div>)
  );
  const createCharButtonText = props.characterBeingCreated.creationInProgress ? 'Resume Character Creation' : 'Create New Character';

  return (
    <div className="character-list">
      <Button
        className="create-button"
        bsStyle="success"
        onClick={() => props.onCreateClick()}
      >
        {createCharButtonText}
      </Button>
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            {list}
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

CharacterList.propTypes = {
  characterBeingCreated: PropTypes.object.isRequired,
  characterList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCreateClick: PropTypes.func.isRequired
};
