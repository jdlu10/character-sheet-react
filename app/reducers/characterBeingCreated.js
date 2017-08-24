import * as actionTypes from '../constants/actionTypes.js';
import * as characterActions from '../constants/characterUpdateActions.js';
import { DEFAULT_CHAR_BIO, DEFAULT_CHAR_NAME } from '../constants/character.js';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

function initAttributePoints() {
  return getRandomInt(100, 360);
}

const baseAttributes = {
  strength: { value: 20, hidden: false },
  dexterity: { value: 20, hidden: false },
  constitution: { value: 20, hidden: false },
  intelligence: { value: 20, hidden: false },
  wisdom: { value: 20, hidden: false },
  charisma: { value: 20, hidden: false },

  leadership: { value: 1, hidden: true },
  integrity: { value: 1, hidden: true },
  bravery: { value: 1, hidden: true },
  mortality: { value: 50, hidden: true },
  luck: { value: 1, hidden: true },
  notoriety: { value: 0, hidden: true },

  pointsRemaining: 0
};
const baseAttributesCopy = JSON.parse(JSON.stringify(baseAttributes));

const baseCharacterObject = { id: 'unique1',
  name: DEFAULT_CHAR_NAME,
  bio: DEFAULT_CHAR_BIO,
  portraitId: 1,
  creationInProgress: false,
  editingName: false,
  editingBio: false,
  condition: {
    hitPoints: { value: 100, hidden: false },
    tacticPoints: { value: 100, hidden: false },
    stamina: { value: 100, hidden: false },
    age: { value: 15, hidden: false },
    criticalBonus: 0,
    meleeBonus: 0,
    tacticsBonus: 0,
    XP: 0,
    level: 1
  },
  status: {
    class: {},
    role: {},
    title: []
  },
  resistances: {
    melee: 0,
    tactics: 0,
    metal: { value: 0 },
    wood: { value: 0 },
    water: { value: 0 },
    fire: { value: 0 },
    earth: { value: 0 }
  },
  attributes: Object.assign({}, baseAttributesCopy, {
    pointsRemaining: initAttributePoints()
  }),
  affinity: '',
  sign: '',
  traits: [],
  equipment: {
    weapon: {},
    armor: {},
    accessory1: {},
    accessory2: {},
    accessory3: {},
    mount: {}
  }
};
const initialState = JSON.parse(JSON.stringify(baseCharacterObject));

const setCreationInProgress = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.CREATE_CHARACTER:
    return true;
  default:
    return state;
  }
};

const assignName = (state = initialState.name, action) => {
  switch (action.type) {
  case characterActions.ASSIGN_NAME:
    return action.newName;
  default:
    return state;
  }
};
const assignPortrait = (state = initialState.portraitId, action) => {
  switch (action.type) {
  case characterActions.ASSIGN_PORTRAIT:
    return action.newPortrait;
  default:
    return state;
  }
};
const setEditingNameMode = (state = initialState, action) => {
  switch (action.type) {
  case characterActions.SET_EDIT_NAME_MODE:
    return action.editing;
  default:
    return state;
  }
};
const setEditingBioMode = (state = initialState, action) => {
  switch (action.type) {
  case characterActions.SET_EDIT_BIO_MODE:
    return action.editing;
  default:
    return state;
  }
};
const assignBio = (state = initialState.bio, action) => {
  switch (action.type) {
  case characterActions.ASSIGN_BIO:
    return action.newBio;
  default:
    return state;
  }
};

const assignCondition = (state = initialState.condition, action) => {
  switch (action.type) {
  case characterActions.ASSIGN_AGE:
    return Object.assign({}, state, {
      age: action.newAge
    });
  default:
    return state;
  }
};

const assignAttribute = (state = initialState.attributes, action) => {
  let defaultAttributes;
  let pointDifference;
  let attributeKey;
  let randomizedAttributes;

  switch (action.type) {
  case characterActions.ASSIGN_ATTRIBUTE:
    attributeKey = Object.keys(action.attribute)[0];
    pointDifference = state[attributeKey].value - action.attribute[attributeKey].value;
    pointDifference = state.pointsRemaining + pointDifference;
    if (pointDifference < 0) {
      return state;
    }
    return Object.assign({}, state, action.attribute, { pointsRemaining: pointDifference });

  case characterActions.RESET_ATTRIBUTES:
    defaultAttributes = JSON.parse(JSON.stringify(baseAttributes)); // deep clone
    return Object.assign({}, state, defaultAttributes, {
      pointsRemaining: initAttributePoints()
    });

  case characterActions.AUTO_ATTRIBUTES:
    defaultAttributes = JSON.parse(JSON.stringify(baseAttributes)); // deep clone
    randomizedAttributes = Object.assign({}, state, defaultAttributes, {
      pointsRemaining: 0
    });
    randomizedAttributes.strength.value = getRandomInt(20, 80);
    randomizedAttributes.dexterity.value = getRandomInt(20, 80);
    randomizedAttributes.constitution.value = getRandomInt(20, 80);
    randomizedAttributes.intelligence.value = getRandomInt(20, 80);
    randomizedAttributes.wisdom.value = getRandomInt(20, 80);
    randomizedAttributes.charisma.value = getRandomInt(20, 80);
    return randomizedAttributes;

  default:
    return state;
  }
};

const assignStatus = (state = initialState.status, action) => {
  switch (action.type) {
  case characterActions.ASSIGN_CLASS:
    return Object.assign({}, state, {
      class: action.newClass
    });
  default:
    return state;
  }
};

export const getTotalAttributesCount = (state = initialState) => {
  const attributesArr = Object.entries(state.attributes);
  return attributesArr.reduce(
    (a, b) => {
      if (!b.hidden) {
        return a + b.value;
      }
      return a;
    }
  );
};

function characterBeingCreated(state = initialState, action) {
  switch (action.type) {
  case actionTypes.UPDATE_CHARACTER_ERROR:
    return initialState;

  default:
    return {
      name: assignName(state.name, action),
      portraitId: assignPortrait(state.portraitId, action),
      bio: assignBio(state.bio, action),
      editingName: setEditingNameMode(state.editingName, action),
      editingBio: setEditingBioMode(state.editingBio, action),
      creationInProgress: setCreationInProgress(state.creationInProgress, action),
      condition: assignCondition(state.condition, action),
      attributes: assignAttribute(state.attributes, action),
      status: assignStatus(state.status, action)
    };
  }
}

export default characterBeingCreated;
