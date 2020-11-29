import React, { FC , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import {Switch, View} from '@adobe/react-spectrum';
import { setTheme } from '../store/actions/userActions';

const Theme: FC = () => {
    const dispatch = useDispatch();
    const [selected] = useState('');

    const userTheme = useSelector((state:RootState) => state.user.theme);

    const themeHandler = (value: boolean) => {
        if (value === true) {
            dispatch(setTheme('light'));
        }
        if (value === false) {
            dispatch(setTheme('dark'));
        }
    }
    
    return(
        <View>
            <Switch value={selected.toString()} onChange={themeHandler}>Theme : {userTheme}</Switch> 
        </View>
    )
}

export default Theme;