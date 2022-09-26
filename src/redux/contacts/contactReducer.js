import { ADD_CONTACT, DELETE_CONTACT } from "./contactTypes";

export const initialState = {
    contacts: []
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            var tempArray = state.contacts;
            tempArray.push(action.payload);
            return {
                ...state,
                contacts: tempArray
            }
        case DELETE_CONTACT:
            var tempArray2 = state.contacts;
            tempArray2.splice(action.payload,1);
            return {
                ...state,
                contacts: tempArray2
            }
        default: return state
    }

}

export default contactReducer

