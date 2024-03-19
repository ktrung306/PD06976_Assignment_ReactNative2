import React from 'react';
import {View, Text, Touchable, TouchableOpacity, Image} from 'react-native';
import Background from '../Home/Background';
import Field from '../../components/Field';
import { darkGreen } from '../Home/Constants';
import Btn from '../Home/Btn';
import Seperator from '../../components/Seperator';

const Login = (props) => {
  return (
      <View style={{alignItems: 'center', width: 390, backgroundColor: 'white'}}>
        <Image source={require('../../assets/splash.png')} style={{width: 400, height: 350, marginTop: -100} }></Image>
        <View
          style={{
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: darkGreen, fontWeight: 'bold'}}>
            Chào mừng bạn
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Đăng nhập tài khoản
          </Text>
          <Field placeholder="Nhập email hoặc số điện thoại " keyboardType={'email-address'}/>
          <Field placeholder="Mật khẩu" secureTextEntry={true} />
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 10}}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <Btn textColor='white' bgColor={darkGreen} btnLabel="Đăng nhập" Press={() => alert("Logged In")} />
          <Seperator text="Hoặc"></Seperator>
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Bạn không có tài khoản? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
};

export default Login;