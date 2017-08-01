import * as actionTypes from '../constants/actionTypes.js';
import * as teamActions from '../constants/teamUpdateActions.js';
import { DEFAULT_TEAM_NAME } from '../constants/team.js';

const initialState = {
  name: DEFAULT_TEAM_NAME,
  editing: false
};

const assignTeamName = (state = initialState, action) => {
  switch (action.type) {
  case teamActions.ASSIGN_TEAM_NAME:
    if (!action.newName) {
      return state;
    }
    return action.newName;

  default:
    return state;
  }
};

const setEditingMode = (state = initialState, action) => {
  switch (action.type) {
  case teamActions.SET_EDIT_MODE:
    return action.editing;
  default:
    return state;
  }
};

function teamManager(state = initialState, action) {
  switch (action.type) {
  case actionTypes.UPDATE_TEAM_ERROR:
    return initialState;

  default:
    return {
      name: assignTeamName(state.name, action),
      editing: setEditingMode(state.editing, action)
    };
  }
}

export default teamManager;
