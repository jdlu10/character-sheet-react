/*
    ./app/components//components/characterAttributes.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import AttributeSlider from './attributeSlider.jsx';
import ShowTraits from './showTraits.jsx';

export default function CharacterAttributes(props) {
  const {
    characterBeingCreated,
    randomAllocateAttributes,
    rerollAttributes,
    setNewAttribute
  } = props;
  const characterAttributes = characterBeingCreated.attributes;

  return (
    <Panel header="Character Attributes">
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
        {characterAttributes.pointsRemaining}
      </strong>
      <ListGroup fill>
        <ListGroupItem className="attributes">
          <AttributeSlider
            attribute={characterAttributes.strength}
            label="Strength"
            tooltip="Affects personal combat damage"
            tooltipId="tooltip-strength"
            pointsRemaining={characterAttributes.pointsRemaining}
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
            tooltip="Affects personal combat accuracy and avoidance"
            tooltipId="tooltip-dexterity"
            pointsRemaining={characterAttributes.pointsRemaining}
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
            tooltip="Affects resistance to damage and various ailments"
            tooltipId="tooltip-constitution"
            pointsRemaining={characterAttributes.pointsRemaining}
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
            tooltip="Affects resistance to enemy tactics"
            tooltipId="tooltip-wisdom"
            pointsRemaining={characterAttributes.pointsRemaining}
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
            tooltip="Affects the potency of your tactics"
            tooltipId="tooltip-intelligence"
            pointsRemaining={characterAttributes.pointsRemaining}
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
            tooltip="Affects leadership and how others will react to you"
            tooltipId="tooltip-charisma"
            pointsRemaining={characterAttributes.pointsRemaining}
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
  );
}

CharacterAttributes.propTypes = {
  characterBeingCreated: PropTypes.object.isRequired,
  randomAllocateAttributes: PropTypes.func.isRequired,
  rerollAttributes: PropTypes.func.isRequired,
  setNewAttribute: PropTypes.func.isRequired
};
