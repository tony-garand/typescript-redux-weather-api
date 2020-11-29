export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';
export const SET_THEME = 'SET_THEME';
export const GET_LOCATION = 'GET_LOCATION';
export const SET_LOCATION = 'SET_LOCATION';


export interface Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface WeatherData {
    base: string;
    clouds: {
        all: number;
    };
    cod: number;
    coord: {
        lon: number;
        lat: number;
    };
    dt: number;
    id: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
    };
    timezone: number;
    visibility: number;
    weather: Weather[];
    wind: {
        speed: number;
        deg: number;
    };
}

export interface WeatherError {
    cod: string;
    message: string;
}

export interface WeatherState {
    data: WeatherData | null;
    loading: boolean;
    error: string; 
}

interface GetWeatherAction {
    type: typeof GET_WEATHER;
    payload: WeatherData;
}

interface SetLoadingAction {
    type: typeof SET_LOADING;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

export type WeatherAction = GetWeatherAction | SetErrorAction | SetLoadingAction;

export interface AlertAction {
    type: typeof SET_ALERT;
    payload: string;
}

export interface AlertState {
    message: string;
}

export interface UserData {
    locations: {
        saved: WeatherData | null;
    }
    theme: string
}    

export interface UserThemeAction {
    type: typeof SET_THEME;
    payload: string;
}

export interface SetUserLocationAction {
    type: typeof SET_LOCATION;
    payload: string;
}

export interface GetUserLocationAction {
    type: typeof GET_LOCATION;
    payload: string;
}

export type UserAction = UserThemeAction | SetUserLocationAction | GetUserLocationAction;

export interface UserState {
    data: UserData | null;
    theme: string,
}
