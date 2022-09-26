import { ADD_CONTACT, DELETE_CONTACT } from "./contactTypes";

export var addContact=(temp)=>
{
    return {
        type: ADD_CONTACT,
        payload: temp
    }
}

export var deleteContact=(event, index)=>
{
    return {
        type: DELETE_CONTACT,
        payload: index
    }
}