import { connect } from 'react-redux';
import { createCharacter } from '../actions/index.js';
import CharacterList from '../components/home/characterList.jsx';

const mapStateToProps = state => ({
  characterList: state.characters.characters,
  characterBeingCreated: state.characterBeingCreated
});

const mapDispatchToProps = dispatch => ({
  onCreateClick: () => {
    dispatch(createCharacter());
  }
});

const ShowCharacterList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);

export default ShowCharacterList;
