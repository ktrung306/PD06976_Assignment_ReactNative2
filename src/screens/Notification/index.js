import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { black } from "../Splash/Constants";
const Notification = () => {
    return (
        <View style={styles.container1}>
            <View style={styles.container2}>
                <Image source={require('../../assets/icon_back.png')} style={styles.image}/>
                <Text style={styles.text1}>THÔNG BÁO</Text>
            </View>
            <Text style={styles.text2}>Hiện chưa có thông báo nào</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container1: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        marginTop: 10,
      },

      container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginTop: 20,
      },

      image: {
        marginRight: 120
      },

      text1: {
        fontSize: 19,
        color: black,
        marginRight: 110,
        fontStyle: 'normal'
      },

      text2: {
        marginTop: 20,
        fontSize: 15,
        color: black,
      }
})
export default React.memo(Notification);