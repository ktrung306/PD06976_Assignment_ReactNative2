import React, { useState } from "react";
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { black, darkGreen, green } from "../Splash/Constants";
import { products } from "../../components/Data/products";
import ProductHomeItem from "../../components/ProductHomeItem";
const Home = () => {
    //filteredProducts là trạng thái hiện tại
    const [filteredProducts] = useState(products);
    /*renderProductItem là một hàm được sử dụng 
    hiển thị sản phẩm (ProductHomeItem) thông qua mảng filteredProducts.*/
    const renderProductItem = ({item}) => {
        return <ProductHomeItem {...item} />;
    };
    return (
        <SafeAreaView style={styles.container}>
        <Image source={require('../../assets/shopping-cart.png')} style={styles.image1}/>
        <Text style={styles.text1}>Planta - toả sáng</Text>
        <Text style={styles.text2}>không gian nhà bạn</Text>
        <Text style={styles.text3}>Hàng mới về rất đẹp</Text>
        <Image source={require('../../assets/home2.png')} style={styles.image2}/>
        <Text style={styles.text4}>Cây trồng</Text>
        <FlatList
        style={styles.productsList} numColumns={2}  data={filteredProducts} 
        renderItem={renderProductItem} keyExtractor={item => String(item.id)} 
        ListFooterComponent={<View style={{height: 200}} />}
        />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    text1: {
        color: black, 
        fontWeight: 'normal', 
        fontSize: 20,
        marginTop: -95,
        marginHorizontal: 25,
    },

    text2: {
        color: black, 
        marginTop: 10,
        fontWeight: 'normal', 
        fontSize: 20,
        marginHorizontal: 25,
    },

    text3: {
        color: darkGreen, 
        marginTop: 10,
        fontWeight: 'normal', 
        fontSize: 15,
        marginHorizontal: 25,
    },

    text4: {
        color: black, 
        marginTop: 10,
        fontWeight: 'normal', 
        fontSize: 25,
        marginHorizontal: 25,
    },

    text5: {
        color: black, 
        fontWeight: 'normal', 
        fontSize: 20,
        marginHorizontal: 25,
        marginTop: -200
    },
    image1: {
        marginHorizontal: 340,
        marginVertical: 60,
    },

    image2: {
       marginHorizontal: 18,
    },

    list: {
        paddingVertical: 3,
        marginTop: 3,
    },
    productsList: {
        paddingHorizontal: 16,
    },
});

export default React.memo(Home);