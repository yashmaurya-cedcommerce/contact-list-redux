import { createStore } from 'redux';
import contactReducer from './contacts/contactReducer';

const store = createStore(contactReducer);

export default store