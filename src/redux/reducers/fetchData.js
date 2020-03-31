import { FETCH_DATA } from '../actions/constants'


const intialState = {
    weather: {}
}

export default function fetchDataReducers(state= intialState, actions) {
    switch(actions.type) {
        case FETCH_DATA:
            return {
                ...state,
                weather: actions.payload
            };
        default:
            return state;
    }

    
}