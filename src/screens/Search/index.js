import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Search = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>Search</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 25,
    }
})
export default React.memo(Search);