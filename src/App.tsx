import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import { lightTheme, darkTheme } from '@adobe/react-spectrum';
import { Provider as UserTheme } from '@adobe/react-spectrum';

import { RootState } from './store'
import Search from './Components/Search'
import Theme from './Components/Theme'
import Alert from './Components/Alert'
import Weather from './Components/Weather'
import { setAlert } from './store/actions/alertActions'
import { setError } from './store/actions/weatherActions'
import { View } from '@adobe/react-spectrum'

const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state:RootState) => state.weather.data);
  const loading = useSelector((state:RootState) => state.weather.loading);
  const error = useSelector((state:RootState) => state.weather.error);
  const alertMsg = useSelector((state:RootState) => state.alert.message);
  const userTheme = useSelector((state:RootState) => state.user.theme);

  return (
      <UserTheme theme={userTheme === 'light'?lightTheme:darkTheme } colorScheme={userTheme === 'light' ? 'light': 'dark'}>
        <div style={{minHeight:'100vh', margin:"auto"}}>
          <Theme/>
          <Search title="Type a city name and press enter" />
          {loading
            ? <div style={{width:'100%', margin: 'auto'}}><h3 style={{width:'100%', textAlign: 'center'}}>Loading...</h3></div> 
            : weatherData && <Weather data={weatherData}/>
          }
          {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
          {error && <Alert message={error} onClose={() => dispatch(setError())}/>}
        </div>
      </UserTheme>
  );
}

export default App;
