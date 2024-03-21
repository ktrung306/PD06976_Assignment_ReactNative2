import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { black } from "../Splash/Constants";
const Search = () => {
        const [searchText, setSearchText] = useState('');
      
        const handleSearch = () => {
          // Xử lý tìm kiếm ở đây, ví dụ: console.log(searchText);
          alert('Chưa xử lí dữ liệu: ' + searchText);
        };
    return (
    <View style={styles.container1}>
        <View style={styles.container2}>
        <Image source={require('../../assets/icon_back.png')} style={styles.image}/>
        <Text style={styles.text1}>Tìm kiếm sản phẩm</Text>
        </View>
        <View style={styles.container3}>
      <TextInput
        style={styles.input}
        placeholder="sản phẩm"
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Tìm kiếm</Text>
      </TouchableOpacity>
      </View>
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
        marginRight: 90
      },

      text1: {
        fontSize: 19,
        color: black,
        marginRight: 80,
      },
      container3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginTop: 20,
      },
      
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
      },
      button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
});
export default React.memo(Search);