// reducer.js
import { getUsers } from "./API/usersFetch";
const users = await getUsers();
const initialState = {
  contacts: users,
};

function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts] 
      };
    case 'DELETE_CONTACT':
      return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload) };
    case 'EDIT_CONTACT':
      return { ...state, contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact) };
    default:
      return state;
  }
};

export const selectContacts = (state) => state.contacts;

export default contactsReducer;
