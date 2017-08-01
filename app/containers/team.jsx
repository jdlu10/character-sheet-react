import { connect } from 'react-redux';
import { setTeamNameEditMode, setTeamName } from '../actions/index.js';
import TeamName from '../components/home/teamName.jsx';

const mapStateToProps = state => ({
  team: state.teamManager
});

const mapDispatchToProps = dispatch => ({
  setEditingMode: (mode) => {
    dispatch(setTeamNameEditMode(mode));
  },
  setTeamName: (name) => {
    dispatch(setTeamName(name));
  }
});

const TeamContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamName);

export default TeamContainer;
