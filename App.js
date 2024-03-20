// In App.js in a new project
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from './src/screens/SignUp';
import Login from './src/screens/Login';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Notification from './src/screens/Notification';
import Account from './src/screens/Account';
import { Image, View } from 'react-native';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Tabs = () => (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} 
            options={{ headerShown:false, tabBarIcon:({focused})=> {
              return(
                <View>
                    <Image source={require('./src/assets/Tab/home.png')}
                        style={{width: 25, height: 25}}/>
                </View>)}}}/>
        <Tab.Screen name="Search" component={Search}
              options={{ headerShown:false, tabBarIcon:({focused})=> {
                return(
                  <View>
                      <Image source={require('./src/assets/Tab/search.png')}
                          style={{width: 25, height: 25}}/>
                  </View>)}}}/>
        <Tab.Screen name="Notification" component={Notification}
               options={{ headerShown:false, tabBarIcon:({focused})=> {
                return(
                  <View>
                      <Image source={require('./src/assets/Tab/notification.png')}
                          style={{width: 25, height: 25}}/>
                  </View>)}}}/>
        <Tab.Screen name="Account" component={Account}
               options={{headerShown:false, tabBarIcon:({focused})=> {
                return(
                  <View>
                      <Image source={require('./src/assets/Tab/account.png')}
                          style={{width: 25, height: 25}}/>
                  </View>)}}}/>
      </Tab.Navigator>
);
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Splash} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tabs" component={Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;