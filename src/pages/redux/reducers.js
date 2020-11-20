import {ACTION_TAKE_TURN} from './actions.js'

const defaultState = {
    xNext: true,
    squares: Array(9).fill(null)
}

export function accountReducer(state = defaultState, action) {
    
    switch(action.type) {
        case ACTION_TAKE_TURN:
            return {
                ...state,
                [action.payload.xNext]: state.xNext,
                [action.payload.squares]: state.squares.slice(action.payload.squares)
            }

        default: 
            return state;
    }

}