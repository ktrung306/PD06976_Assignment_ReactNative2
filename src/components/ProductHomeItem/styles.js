import {Dimensions, StyleSheet} from 'react-native';
import { black } from '../../screens/Splash/Constants';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  title: {
    color: black,
    paddingVertical: 8,
  },
  image: {
    width: (width - 60) / 2,
    height: 160,
    borderRadius: 8,
  },
  price: {
    color: '#000000',
    paddingBottom: 8,
  },
});