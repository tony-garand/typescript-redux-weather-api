import { SET_LOCATION, GET_LOCATION, SET_THEME, UserAction} from '../types'

export const getLocation = ( city: string): UserAction => {
    return {
        type: GET_LOCATION,
        payload: city
    }
}

export const setLocation = ( city: string): UserAction => {
    return {
        type: SET_LOCATION,
        payload: city
    }
}

export const setTheme = (theme: string): UserAction => {
    return {
        type: SET_THEME,
        payload: theme
    }
}