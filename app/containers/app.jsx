/*
    ./app/components/App.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MAIN_SCREEN, CREATING_CHARACTER, VIEWING_CHARACTER, EDITING_CHARACTER } from '../constants/modes.js';

import Header from '../components/header/header.jsx';
import TeamContainer from '../containers/team.jsx';
import ShowCharacterList from '../containers/showCharacterList.jsx';
import CreateCharacterContainer from '../containers/createCharacter.jsx';
import CharacterSheet from '../components/character-sheet/index.jsx';

const mapStateToProps = state => ({
  mode: state.characters.mode
});

function AppMain(props) {
  let showContent;
  const mode = props.mode;

  switch (mode) {
  case CREATING_CHARACTER:
    showContent = <CreateCharacterContainer />;
    break;
  case VIEWING_CHARACTER:
  case EDITING_CHARACTER:
    showContent = (<CharacterSheet />);
    break;
  default:
    showContent = <ShowCharacterList />;
  }

  return (
    <div id="main-container" style={{ textAlign: 'center' }}>
      <Header />
      <TeamContainer />
      <hr style={{ marginTop: '5px' }} />
      {showContent}
    </div>
  );
}

AppMain.propTypes = {
  mode: PropTypes.string
};

AppMain.defaultProps = {
  mode: MAIN_SCREEN
};

const App = connect(
  mapStateToProps
)(AppMain);

export default App;
