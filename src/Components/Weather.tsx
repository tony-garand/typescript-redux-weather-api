import React, {FC} from 'react';
import { WeatherData } from '../store/types'
import {Flex, View, TextField, Form } from '@adobe/react-spectrum'

interface WeatherProps {
    data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
    const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
    const celsius = (data.main.temp - 273.15).toFixed(2);

    return(
        <Flex>
            <View margin="auto">
                <View width="size-3000" margin="auto" alignSelf="center">
                    <h2 style={{textAlign: 'center'}}>{data.name} - {data.sys.country}</h2>
                    <p style={{textAlign: 'center'}}>{data.weather[0].description}</p>
                    <p style={{textAlign: 'center'}}><img alt="weather location" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} /></p>
                </View>
                <Flex >
                    <View 
                    borderWidth="thin"
                    borderColor="dark"
                    padding="size-300"
                    margin="size-300"
                    borderRadius="medium"
                    width="size-3000">
                        <h3>Temp</h3>
                        <View>
                            <p>{data.main.temp}</p>
                            <p>{fahrenheit}</p>
                            <p>{celsius}</p>
                        </View>
                    </View>
                    <View
                    borderWidth="thin"
                    borderColor="dark"
                    padding="size-300"
                    margin="size-300"
                    borderRadius="medium"
                    width="size-3000">
                        <h3>Humidity</h3>
                        <p>{data.main.humidity}</p>
                    </View>
                    <View 
                    borderWidth="thin"
                    borderColor="dark"
                    padding="size-300"
                    margin="size-300"
                    borderRadius="medium"
                    width="size-3000">
                        <h3>Pressure</h3>
                        <p>{data.main.pressure}</p>
                    </View>
                    <View 
                    borderWidth="thin"
                    borderColor="dark"
                    padding="size-300"
                    margin="size-300"
                    borderRadius="medium"
                    width="size-3000">
                        <h3>Wind</h3>
                        <p>{data.wind.speed} m/s</p>
                    </View>
                </Flex>
            </View>
        </Flex>
    )
}

export default Weather