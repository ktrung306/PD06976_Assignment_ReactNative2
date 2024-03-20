import React from 'react';
import {TextInput} from 'react-native';
import { darkGreen } from '../screens/Splash/Constants';


const Input = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 10,  paddingHorizontal: 15, width: '70%', backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}></TextInput>
  );
};

export default Input;