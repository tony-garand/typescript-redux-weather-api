import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import {Flex, View, TextField, Form } from '@adobe/react-spectrum'

import { setAlert } from '../store/actions/alertActions';
import { getWeather, setLoading } from '../store/actions/weatherActions';

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(city.trim() === '') {
      return dispatch(setAlert('City is required!'));
    }

    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity('');
  }

  return(
    <Flex>
      <View margin="auto">
          <h1 className="title">{title}</h1>
          <Form onSubmit={submitHandler}>
            <TextField value={city} onChange={setCity}/>
          </Form>
      </View>
    </Flex>
  );  
}

export default Search;