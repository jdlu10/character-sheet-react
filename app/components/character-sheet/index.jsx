/*
    ./app/components/character-sheet/index.jsx
*/
import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

export default function CharacterSheet() {
  const list = (
    <div
      className="grid-item"
    >
      <div className="content">
        TEST
        <br />
        <br />
        <Button>View</Button>
      </div>
    </div>
  );

  return (
    <div id="character-sheet">
      CHARACTER SHEET
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
