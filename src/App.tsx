import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';

import { RootState } from './store'
import Search from './Components/Search'
import Alert from './Components/Alert'
import Weather from './Components/Weather'
import { setAlert } from './store/actions/alertActions'
import { setError } from './store/actions/weatherActions'


const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state:RootState) => state.weather.data);
  const loading = useSelector((state:RootState) => state.weather.loading);
  const error = useSelector((state:RootState) => state.weather.error);
  const alertMsg = useSelector((state:RootState) => state.alert.message);
  
  return (
    <div className="App">
      <Search title="Type a city name and press enter" />
      {loading ? <h3>Loading...</h3> : weatherData && <Weather data={weatherData}/>}
      {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
      {error && <Alert message={error} onClose={() => dispatch(setError())}/>}
    </div>
  );
}

export default App;
