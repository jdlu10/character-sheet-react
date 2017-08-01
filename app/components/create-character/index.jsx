/*
    ./app/components/create-character/index.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Button, Nav, NavItem, Pager, Panel, ListGroup, ListGroupItem, Image } from 'react-bootstrap';

import CharacterName from './characterName.jsx';
import CharacterBio from './characterBio.jsx';
import AttributeSlider from './attributeSlider.jsx';
import PreviewAttributeBars from './previewAttributeBars.jsx';
import ShowTraits from './showTraits.jsx';

export default class CreateCharacter extends React.Component {
  static getRandomInt(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  }
  componentDidMount() {
    if (window.innerWidth < 992) {
      this.statsPreviewPanel.setState({ expanded: false });
    }
  }

  render() {
    const {
      characterBeingCreated,
      onBackToMainClick,
      setCharacterName,
      setEditingNameMode,
      setCharacterBio,
      setEditingBioMode,
      randomAllocateAttributes,
      rerollAttributes,
      setNewAttribute
    } = this.props;
    const characterAttributes = characterBeingCreated.attributes;

    return (
      <div id="create-character">
        <Grid>
          <Row>
            <Col xsHidden md={2} />
            <Col xs={12} md={8}>
              <h2>CREATE CHARACTER</h2>
              <p>
                Adjust the character&apos;s statistics below.
                Use the navigation buttons below to move between sections.
              </p>
            </Col>
            <Col xs={12} md={2}>
              <p>
                <Button
                  className="create-button"
                  onClick={() => onBackToMainClick()}
                >BACK TO LIST</Button>
              </p>
            </Col>
          </Row>
          <Row>
            <Col xsHidden md={1} />
            <Col xs={12} md={10}>
              <Nav bsStyle="pills" justified activeKey={1}>
                <NavItem eventKey={1} title="Attributes">Attributes</NavItem>
                <NavItem eventKey={2} disabled title="Traits">Traits</NavItem>
                <NavItem eventKey={3} disabled title="Class">Class</NavItem>
                <NavItem eventKey={4} disabled title="Equipment">Equipment</NavItem>
              </Nav>
            </Col>
            <Col xsHidden md={1} />
          </Row>
          <Row>
            <Col xs={12} md={4} id="stats-preview">
              <Panel
                ref={
                  (statsPreviewPanel) => { this.statsPreviewPanel = statsPreviewPanel; }
                }
                collapsible
                defaultExpanded
                header="Character Preview"
                bsStyle="info"
              >
                <Image src="/assets/thumbnail.png" rounded />
                <ListGroup fill>
                  <ListGroupItem>
                    <CharacterName
                      characterBeingCreated={characterBeingCreated}
                      setCharacterName={setCharacterName}
                      setEditingNameMode={setEditingNameMode}
                    />
                  </ListGroupItem>
                  <ListGroupItem>
                    Strength: <PreviewAttributeBars
                      barValue={characterAttributes.strength.value}
                    />
                  </ListGroupItem>
                  <ListGroupItem>
                    Dexterity: <PreviewAttributeBars
                      barValue={characterAttributes.dexterity.value}
                    />
                  </ListGroupItem>
                  <ListGroupItem>
                    Constitution: <PreviewAttributeBars
                      barValue={characterAttributes.constitution.value}
                    />
                  </ListGroupItem>
                  <ListGroupItem>
                    Wisdom: <PreviewAttributeBars
                      barValue={characterAttributes.wisdom.value}
                    />
                  </ListGroupItem>
                  <ListGroupItem>
                    Intelligence: <PreviewAttributeBars
                      barValue={characterAttributes.intelligence.value}
                    />
                  </ListGroupItem>
                  <ListGroupItem>
                    Charisma: <PreviewAttributeBars
                      barValue={characterAttributes.charisma.value}
                    />
                  </ListGroupItem>
                </ListGroup>
                <CharacterBio
                  characterBeingCreated={characterBeingCreated}
                  setCharacterBio={setCharacterBio}
                  setEditingBioMode={setEditingBioMode}
                />
              </Panel>
            </Col>
            <Col xs={12} md={8} id="stats-container">
              <Panel header="Attributes">
                <Button
                  className="button-attributes-randomize"
                  onClick={() => randomAllocateAttributes()}
                >RANDOMIZE</Button>
                <Button
                  className="button-attributes-reroll"
                  onClick={() => rerollAttributes()}
                >REROLL</Button>
                Use the sliders to change the attribute values.
                Click on the &quot;REROLL&quot; button to refresh the point pool,
                the &quot;RANDOMIZE&quot; button to auto allocate points randomly.<br />
                <strong>Points remaining:</strong> <strong className="remaining">
                  {characterBeingCreated.attributes.pointsRemaining}
                </strong>
                <ListGroup fill>
                  <ListGroupItem className="attributes">
                    <AttributeSlider
                      attribute={characterAttributes.strength}
                      label="Strength"
                      pointsRemaining={characterBeingCreated.attributes.pointsRemaining}
                      callback={(value) => {
                        setNewAttribute({
                          strength:
                          Object.assign({}, characterAttributes.strength, { value })
                        });
                      }}
                    />
                  </ListGroupItem>
                  <ListGroupItem className="attributes">
                    <AttributeSlider
                      attribute={characterAttributes.dexterity}
                      label="Dexterity"
                      pointsRemaining={characterBeingCreated.attributes.pointsRemaining}
                      callback={(value) => {
                        setNewAttribute({
                          dexterity:
                          Object.assign({}, characterAttributes.dexterity, { value })
                        });
                      }}
                    />
                  </ListGroupItem>
                  <ListGroupItem className="attributes">
                    <AttributeSlider
                      attribute={characterAttributes.constitution}
                      label="Constitution"
                      pointsRemaining={characterBeingCreated.attributes.pointsRemaining}
                      callback={(value) => {
                        setNewAttribute({
                          constitution:
                          Object.assign({}, characterAttributes.constitution, { value })
                        });
                      }}
                    />
                  </ListGroupItem>
                  <ListGroupItem className="attributes">
                    <AttributeSlider
                      attribute={characterAttributes.wisdom}
                      label="Wisdom"
                      pointsRemaining={characterBeingCreated.attributes.pointsRemaining}
                      callback={(value) => {
                        setNewAttribute({
                          wisdom:
                          Object.assign({}, characterAttributes.wisdom, { value })
                        });
                      }}
                    />
                  </ListGroupItem>
                  <ListGroupItem className="attributes">
                    <AttributeSlider
                      attribute={characterAttributes.intelligence}
                      label="Intelligence"
                      pointsRemaining={characterBeingCreated.attributes.pointsRemaining}
                      callback={(value) => {
                        setNewAttribute({
                          intelligence:
                          Object.assign({}, characterAttributes.intelligence, { value })
                        });
                      }}
                    />
                  </ListGroupItem>
                  <ListGroupItem className="attributes">
                    <AttributeSlider
                      attribute={characterAttributes.charisma}
                      label="Charisma"
                      pointsRemaining={characterBeingCreated.attributes.pointsRemaining}
                      callback={(value) => {
                        setNewAttribute({
                          charisma:
                          Object.assign({}, characterAttributes.charisma, { value })
                        });
                      }}
                    />
                  </ListGroupItem>
                </ListGroup>
                <strong>Eligible traits:</strong>
                <ShowTraits />
              </Panel>
            </Col>
          </Row>
          <Row>
            <Col xsHidden md={2} />
            <Col xs={12} md={8}>
              <Pager>
                <Pager.Item previous href="#" disabled>&larr; Previous</Pager.Item>
                <Pager.Item next href="#" disabled>Next &rarr;</Pager.Item>
              </Pager>
            </Col>
            <Col xsHidden md={2} />
          </Row>
        </Grid>
      </div>
    );
  }
}

CreateCharacter.propTypes = {
  characterBeingCreated: PropTypes.object.isRequired,
  onBackToMainClick: PropTypes.func.isRequired,
  setNewAttribute: PropTypes.func.isRequired,
  setCharacterName: PropTypes.func.isRequired,
  setEditingNameMode: PropTypes.func.isRequired,
  setCharacterBio: PropTypes.func.isRequired,
  setEditingBioMode: PropTypes.func.isRequired,
  rerollAttributes: PropTypes.func,
  randomAllocateAttributes: PropTypes.func
};
CreateCharacter.defaultProps = {
  rerollAttributes: () => {},
  randomAllocateAttributes: () => {}
};
