import { connect } from 'react-redux';
import {
  backToMain,
  setEditingNameMode,
  setCharacterName,
  setEditingBioMode,
  setCharacterBio,
  setCharAttribute,
  resetAttributes,
  autoAllocateAttributes
} from '../actions/index.js';
import CreateCharacter from '../components/create-character/index.jsx';

const mapStateToProps = state => ({
  characterBeingCreated: state.characterBeingCreated
});

const mapDispatchToProps = dispatch => ({
  onBackToMainClick: () => {
    dispatch(backToMain());
  },
  setEditingNameMode: (mode) => {
    dispatch(setEditingNameMode(mode));
  },
  setCharacterName: (name) => {
    dispatch(setCharacterName(name));
  },
  setEditingBioMode: (mode) => {
    dispatch(setEditingBioMode(mode));
  },
  setCharacterBio: (bio) => {
    dispatch(setCharacterBio(bio));
  },
  rerollAttributes: () => {
    dispatch(resetAttributes());
  },
  randomAllocateAttributes: () => {
    dispatch(autoAllocateAttributes());
  },
  setNewAttribute: (newAttribute) => {
    dispatch(setCharAttribute(newAttribute));
  }
});

const CreateCharacterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCharacter);

export default CreateCharacterContainer;
