/*
    ./app/components/create-character/index.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Button, Nav, NavItem } from 'react-bootstrap';

import CharacterPreview from './characterPreview.jsx';
import CharacterInfo from './characterInfo.jsx';
import CharacterAttributes from './characterAttributes.jsx';
import CharacterCreationPager from './pager.jsx';

export default class CreateCharacter extends React.Component {
  static getRandomInt(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  }
  constructor() {
    super();
    this.state = {
      stage: 1,
      stageTotal: 5
    };
  }
  gotoNextStage() {
    if (this.state.stage < this.state.stageTotal) {
      this.setState({ stage: this.state.stage + 1 });
    }
  }
  gotoPreviousStage() {
    if (this.state.stage > 1) {
      this.setState({ stage: this.state.stage - 1 });
    }
  }
  handleNavSelect(selectedKey) {
    if (selectedKey >= 1 && selectedKey <= this.state.stageTotal) {
      this.setState({ stage: selectedKey });
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
      setPortrait,
      randomAllocateAttributes,
      rerollAttributes,
      setNewAttribute
    } = this.props;
    let appStage;
    switch (this.state.stage) {
    case 1:
      appStage = (
        <CharacterInfo
          characterBeingCreated={characterBeingCreated}
          setCharacterName={setCharacterName}
          setEditingNameMode={setEditingNameMode}
          setCharacterBio={setCharacterBio}
          setEditingBioMode={setEditingBioMode}
          setPortrait={setPortrait}
        />
      );
      break;
    case 2:
      appStage = (
        <CharacterAttributes
          characterBeingCreated={characterBeingCreated}
          randomAllocateAttributes={randomAllocateAttributes}
          rerollAttributes={rerollAttributes}
          setNewAttribute={setNewAttribute}
        />
      );
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    default:
    }

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
                  bsStyle="danger"
                  onClick={() => onBackToMainClick()}
                >BACK TO LIST</Button>
              </p>
            </Col>
          </Row>
          <Row>
            <Col xsHidden md={1} />
            <Col xs={12} md={10}>
              <Nav
                bsStyle="pills"
                justified
                onSelect={(selectedKey) => { this.handleNavSelect(selectedKey); }}
              >
                <NavItem
                  eventKey={1}
                  active={(this.state.stage === 1) !== false}
                  title="Info"
                >Info</NavItem>
                <NavItem
                  eventKey={2}
                  active={(this.state.stage === 2) !== false}
                  title="Attributes"
                >Attributes</NavItem>
                <NavItem
                  eventKey={3}
                  active={(this.state.stage === 3) !== false}
                  title="Traits"
                >Traits</NavItem>
                <NavItem
                  eventKey={4}
                  active={(this.state.stage === 4) !== false}
                  title="Class"
                >Class</NavItem>
                <NavItem
                  eventKey={5}
                  active={(this.state.stage === 5) !== false}
                  title="Equipment"
                >Equipment</NavItem>
              </Nav>
            </Col>
            <Col xsHidden md={1} />
          </Row>
          <Row>
            <Col xs={12} md={4} id="stats-preview">
              <CharacterPreview
                characterBeingCreated={characterBeingCreated}
              />
            </Col>
            <Col xs={12} md={8} id="stats-container">
              {appStage}
            </Col>
          </Row>
          <Row>
            <Col xsHidden md={2} />
            <Col xs={12} md={8}>
              <CharacterCreationPager
                stage={this.state.stage}
                stageTotal={this.state.stageTotal}
                nextPagerHandler={() => { this.gotoNextStage(); }}
                previousPagerHandler={() => { this.gotoPreviousStage(); }}
              />
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
  setPortrait: PropTypes.func.isRequired,
  rerollAttributes: PropTypes.func,
  randomAllocateAttributes: PropTypes.func
};
CreateCharacter.defaultProps = {
  rerollAttributes: () => {},
  randomAllocateAttributes: () => {}
};
