import * as types from '../constants/actionTypes.js';
import * as teamActions from '../constants/teamUpdateActions.js';
import * as characterActions from '../constants/characterUpdateActions.js';

/* Navigation actions */
export const backToMain = () => ({ type: types.MAIN_SCREEN });
export const createCharacter = () => ({ type: types.CREATE_CHARACTER });
export const viewCharacter = id => ({ type: types.VIEW_CHARACTER, id });
export const editCharacter = id => ({ type: types.EDIT_CHARACTER, id });

/* Team management actions */
export const setTeamNameEditMode = editing => ({ type: teamActions.SET_EDIT_MODE, editing });
export const setTeamName = newName => ({ type: teamActions.ASSIGN_TEAM_NAME, newName });

/* Character creation actions */
export const setEditingNameMode = editing => ({
  type: characterActions.SET_EDIT_NAME_MODE, editing
});
export const setCharacterName = newName => ({
  type: characterActions.ASSIGN_NAME, newName
});
export const setEditingBioMode = editing => ({
  type: characterActions.SET_EDIT_BIO_MODE, editing
});
export const setCharacterBio = newBio => ({
  type: characterActions.ASSIGN_BIO, newBio
});
export const setCharAge = newAge => ({ type: characterActions.ASSIGN_AGE, newAge });
export const setCharClass = newClass => ({ type: characterActions.ASSIGN_CLASS, newClass });
export const resetAttributes = () => ({ type: characterActions.RESET_ATTRIBUTES });
export const autoAllocateAttributes = () => ({ type: characterActions.AUTO_ATTRIBUTES });
export const setCharAttribute = attribute => ({
  type: characterActions.ASSIGN_ATTRIBUTE, attribute
});
