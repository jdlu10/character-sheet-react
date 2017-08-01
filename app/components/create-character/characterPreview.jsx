/*
    ./app/components/create-character/slider.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import { DEFAULT_CHAR_NAME, DEFAULT_CHAR_BIO } from '../../constants/character.js';
import PreviewAttributeBars from './previewAttributeBars.jsx';

export default class CharacterPreview extends React.Component {
  componentDidMount() {
    if (window.innerWidth < 992) {
      this.statsPreviewPanel.setState({ expanded: false });
    }
  }
  render() {
    const { characterBeingCreated } = this.props;
    return (
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
            {(characterBeingCreated.name === DEFAULT_CHAR_NAME) ? '---' : characterBeingCreated.name }
          </ListGroupItem>
          <ListGroupItem>
            <span className="attribute-label">Strength:</span> <PreviewAttributeBars
              barValue={characterBeingCreated.attributes.strength.value}
            />
          </ListGroupItem>
          <ListGroupItem>
            <span className="attribute-label">Dexterity:</span> <PreviewAttributeBars
              barValue={characterBeingCreated.attributes.dexterity.value}
            />
          </ListGroupItem>
          <ListGroupItem>
            <span className="attribute-label">Constitution:</span> <PreviewAttributeBars
              barValue={characterBeingCreated.attributes.constitution.value}
            />
          </ListGroupItem>
          <ListGroupItem>
            <span className="attribute-label">Wisdom:</span> <PreviewAttributeBars
              barValue={characterBeingCreated.attributes.wisdom.value}
            />
          </ListGroupItem>
          <ListGroupItem>
            <span className="attribute-label">Intelligence:</span> <PreviewAttributeBars
              barValue={characterBeingCreated.attributes.intelligence.value}
            />
          </ListGroupItem>
          <ListGroupItem>
            <span className="attribute-label">Charisma:</span> <PreviewAttributeBars
              barValue={characterBeingCreated.attributes.charisma.value}
            />
          </ListGroupItem>
        </ListGroup>
        {(characterBeingCreated.bio === DEFAULT_CHAR_BIO) ? '---' : characterBeingCreated.bio }
      </Panel>
    );
  }
}

CharacterPreview.propTypes = {
  characterBeingCreated: PropTypes.object.isRequired
};
