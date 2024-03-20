import React from 'react';
import {View, Text, Touchable, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { darkGreen } from '../Home/Constants';
import Seperator from '../../components/Seperator';
import Input from '../../components/TextInput';
import Button from '../Home/Button';

const Login = (props) => {
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/splash.png')} style={styles.image}/>
        <View
          style={styles.container2}>
          <Text style={styles.text1}>Chào mừng bạn</Text>
          <Text style={styles.text2}>Đăng nhập tài khoản</Text>
          <Input placeholder="Nhập email hoặc số điện thoại " keyboardType={'email-address'}/>
          <Input placeholder="Mật khẩu" secureTextEntry={true}/>
          <View style={styles.container3}>
          <Text style={styles.text3}>Forgot Password ?</Text>
          </View>
          <Button textColor='white' bgColor={darkGreen} btnLabel="Đăng nhập" Press={() => alert("Logged In")} />
          <Seperator text="Hoặc"></Seperator>
          <View style={styles.container4}>
            <Text style={styles.text4}>Bạn không có tài khoản? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={styles.text5}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    width: 390, 
    backgroundColor: 'white'
  },

  image: {
    width: 400, 
    height: 350, 
    marginTop: -100
  },

  container2: {
    height: 700,
    width: 460,
    borderTopLeftRadius: 130,
    alignItems: 'center',
  },

  container3: {
    alignItems: 'flex-end', 
    width: '78%', 
    paddingRight: 16, 
    marginBottom: 10
  },

  container4: { 
    display: 'flex', 
    flexDirection :'row', 
    justifyContent: "center" 
  },

  text1: {
    fontSize: 40, 
    color: darkGreen, 
    fontWeight: 'bold'
  },

  text2: {
    color: 'grey',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  text3: {
    color: darkGreen, 
    fontWeight: 'bold', 
    fontSize: 16
  },

  text4: { 
    fontSize: 16, 
    fontWeight:"bold" 
  },

  text5: { 
    color: darkGreen, 
    fontWeight: 'bold', 
    fontSize: 16 
  }, 
});

export default Login;