import { UserState, UserAction, SET_LOCATION, GET_LOCATION, SET_THEME } from "../types";

const initialState: UserState = {
    data: null,
    theme: 'dark',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: UserAction ): UserState => {
    switch(action.type) {
        case SET_THEME:
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state;
    }
}