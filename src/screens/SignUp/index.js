import React from 'react';
import {View, Text, Touchable, TouchableOpacity, Image} from 'react-native';
import Background from '../Home/Background';
import { darkGreen } from '../Home/Constants';
import Field from '../../components/Field';
import Btn from '../Home/Btn';
import Seperator from '../../components/Seperator';

const Signup = props => {
  return (
      <View style={{alignItems: 'center', width: 390, backgroundColor: 'white'}}>
        <Image source={require('../../assets/splash.png')} style={{width: 400, height: 350, marginTop: -160} }></Image>
        <View
          style={{
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            alignItems: 'center',
          }}>
        <Text style={{fontSize: 40, color: darkGreen, fontWeight: 'bold'}}>
            Đăng ký
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: -5,
            }}>
            Tạo tài khoản
          </Text>
          <Field placeholder="Họ tên"/>
          <Field
            placeholder="Email"
            keyboardType={'email-address'}
          />
          <Field placeholder="Số điện thoại" keyboardType={'number'} />
          <Field placeholder="Mật khẩu" secureTextEntry={true} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'center'
             
            }}>
            <Text style={{color: 'grey', fontSize: 15}}>
              Để đăng kí tài khoản, bạn đồng ý{' '}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 15}}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 5
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              and {" "}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Đăng ký"
            Press={() => {
              alert('Accoutn created');
              props.navigation.navigate('Login');
            }}
          />
          <Seperator text="Hoặc"></Seperator>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Tôi đã có tài khoản{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
};

export default Signup;