/*
    ./app/components/create-character/slider.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListGroup, ListGroupItem, Image, Table } from 'react-bootstrap';
import { DEFAULT_CHAR_NAME, DEFAULT_CHAR_BIO } from '../../constants/character.js';
import CHAR_PORTRAITS from '../../constants/characterPortraits.js';
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
        <Table id="preview-info" condensed>
          <tbody>
            <tr>
              <td rowSpan="5" className="preview-info-portrait">
                <Image
                  src={CHAR_PORTRAITS[characterBeingCreated.portraitId - 1].image}
                  rounded
                />
              </td>
              <td className="preview-info-label">Name:</td>
              <td className="preview-info-value">{(characterBeingCreated.name === DEFAULT_CHAR_NAME) ? '---' : characterBeingCreated.name }</td>
            </tr>
            <tr>
              <td className="preview-info-label">Age:</td>
              <td>---</td>
            </tr>
            <tr>
              <td className="preview-info-label">Sign:</td>
              <td>---</td>
            </tr>
          </tbody>
        </Table>
        <ListGroup fill>
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
          {(characterBeingCreated.bio === DEFAULT_CHAR_BIO) ? '---' : characterBeingCreated.bio }
        </ListGroup>
      </Panel>
    );
  }
}

CharacterPreview.propTypes = {
  characterBeingCreated: PropTypes.object.isRequired
};
