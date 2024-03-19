import React from 'react';
import {View, ImageBackground} from 'react-native';

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground source={{ uri: 'https://t3.ftcdn.net/jpg/04/99/59/06/360_F_499590698_EU8lygMrqcmlstDETLFpZWmQ5zvOh8kw.jpg' }}
      style={{ height: '100%' }}/>
      <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
  );
}

export default Background;