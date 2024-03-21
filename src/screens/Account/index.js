import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { black, red } from "../Splash/Constants";
import Seperator from "../../components/Seperator";
const Account = (props) => {
    return (
        <View style={styles.container1}>
            <Text style={styles.text1}>PROFILE</Text>
                <View style={styles.container2}>
                    <Image source={require('../../assets/avatar.png')} style={styles.image}/>
                    <View style={styles.container3}>
                    <Text style={{ color: black, fontSize: 15 }}>Nguyễn Khắc Trung</Text>
                    <Text>Khactrungcc18@gmail.com</Text>
                    </View>
                </View>
            <View style={styles.container4}>
                <Text style={styles.text}>Chung</Text>
                <Seperator text='-'></Seperator>
            <View style={{marginTop: 5}}>
                    <Text style={styles.text2}>Chỉnh sửa thông tin</Text>
                    <Text style={styles.text2}>Cẩm nang cây trồng</Text>
                    <Text style={styles.text2}>Lịch sử giao diện</Text>
                    <Text style={styles.text2}>Q & A</Text>
            </View>
            <Text style={{marginTop: 20, fontSize: 20}}>Bảo mật và Điều khoản</Text>
            <Seperator text='-'></Seperator>
                <View style={{marginTop: 5}}>
                    <Text style={styles.text2}>Điều khoản và điều kiện</Text>
                    <Text style={styles.text2}>Chính sách quyền riêng tư</Text>
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                    <Text style={{color: red , fontSize: 20, marginTop: 10}}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container1: {
        marginHorizontal: 5,
        marginTop: 10,
    },

    image: {
        width: 50,
        height: 50,
    },
    text: {
        fontSize: 20,
    },

    text1: {
        fontSize: 19,
        color: black,
        marginHorizontal: 150,
        fontStyle: 'normal',
        justifyContent: 'center',
        marginTop: 20,
    },

    text2: {
        fontSize: 20,
        marginTop: 12,
        color: black,
    },

    text3: {
        fontSize: 15,
        color: black,
    },

    container2: {
        flexDirection: 'row',
        marginHorizontal: 40,
        marginTop: 25,
    },

    container3: {
        flexDirection: 'column',
        marginHorizontal: 20,
    },
    container4: {
        marginHorizontal: 50,
        marginVertical: 30,
    },

    
})
export default React.memo(Account);