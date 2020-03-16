import { FETCH_COURSES } from '../actions/types';
//import { combineReducers } from "redux";

export default function(state=[], action){
    console.log('Action->', action.type)
    switch(action.type){
        case FETCH_COURSES:
            console.log(action.payload);
            return [...state, ...action.payload]
        default:
            return state
    }
}