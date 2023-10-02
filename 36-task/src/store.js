// store.js
import { createStore } from 'redux';
import contactsReducer from './reducer';

const store = createStore(contactsReducer);
export default store;
