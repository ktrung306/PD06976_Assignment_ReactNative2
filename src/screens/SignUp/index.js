import React from 'react';
import {View, Text, Touchable, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { darkGreen } from '../Home/Constants';
import Seperator from '../../components/Seperator';
import Input from '../../components/TextInput';
import Button from '../Home/Button';

const Signup = props => {
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/splash.png')} style={styles.image}></Image>
        <View style={styles.container2}>
        <Text style={styles.title}>Đăng ký</Text>
          <Text style={styles.text}>Tạo tài khoản</Text>
          <Input placeholder="Họ tên"/>
          <Input placeholder="Email" keyboardType={'email-address'}/>
          <Input placeholder="Số điện thoại" keyboardType={'number'}/>
          <Input placeholder="Mật khẩu" secureTextEntry={true}/>
          <View style={styles.container3}>
            <Text style={styles.text2}>Để đăng kí tài khoản, bạn đồng ý{' '}</Text>
            <Text style={styles.text3}>Terms & Conditions</Text>
          </View>
          <View
            style={styles.container4}>
            <Text style={styles.text4}>and {" "}</Text>
            <Text style={styles.text5}>Privacy Policy</Text>
          </View>
          <Button textColor="white" bgColor={darkGreen} btnLabel="Đăng ký" Press={() => { alert('Accoutn created');
              props.navigation.navigate('Login');}}/>
          <Seperator text="Hoặc"></Seperator>
          <View
            style={styles.container5}>
            <Text style={styles.text6}> Tôi đã có tài khoản{' '}</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.text7}>Login</Text>
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
    marginTop: -160
  },

  container2: {
    height: 700,
    width: 460,
    borderTopLeftRadius: 130,
    alignItems: 'center',
  },

  container3: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'
  },

  container4: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent :"center",
    width: '78%',
    paddingRight: 16,
    marginBottom: 5
  },

  container5: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  title: {
    fontSize: 40, 
    color: darkGreen, 
    fontWeight: 'bold'
  },

  text: {
    color: 'grey',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: -5,
  },

  text2: {
    color: 'grey', 
    fontSize: 15
  },

  text3: {
    color: darkGreen, 
    fontWeight: 'bold', 
    fontSize: 15
  },

  text4: {
    color: 'grey', 
    fontSize: 16
  },

  text5: {
    color: darkGreen, 
    fontWeight: 'bold', 
    fontSize: 16
  },

  text6: {
    fontSize: 16, 
    fontWeight: 'bold'
  },

  text7: {
    color: darkGreen, 
    fontWeight: 'bold', 
    fontSize: 16
  }
});

export default Signup;