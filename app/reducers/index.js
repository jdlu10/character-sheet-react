import { combineReducers } from 'redux';
import * as modes from '../constants/modes.js';
import * as types from '../constants/actionTypes.js';
import characterBeingCreated, * as fromCreateCharacter from './characterBeingCreated.js';
import teamManager from './team.js';

function characters(state = {
  characters: [],
  mode: modes.MAIN_SCREEN
}, action) {
  switch (action.type) {
  case types.SHOW_CHARACTERS:
  case types.MAIN_SCREEN:
    return Object.assign({}, state, {
      mode: modes.MAIN_SCREEN
    });

  case types.CREATE_CHARACTER:
    return Object.assign({}, state, {
      mode: modes.CREATING_CHARACTER
    });

  case 'VIEW_CHARACTER':
    return action.subreddit;

  case 'EDIT_CHARACTER':
    return action.subreddit;

  default:
    return state;
  }
}

function updateCharacter(state = 'reactjs', action) {
  switch (action.type) {
  case 'UPDATE_ATTRIBUTE':
    return action.subreddit;
  default:
    return state;
  }
}

const characterManApp = combineReducers({
  characters,
  characterBeingCreated,
  updateCharacter,
  teamManager
});

export default characterManApp;
