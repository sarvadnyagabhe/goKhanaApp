import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FoodCourtDeatilsScreen from '../../screens/FoodCourtDeatilsScreen';
import SearchScreen from '../../screens/SearchScreen';
import NotificationScreen from '../../screens/NotificationScreen';
import QRCodeScreen from '../../screens/QRCodeScreen';
import LocationScreen from '../../screens/LocationScreen';
import HomeScreen from '../../screens/HomeScreen';
import FoodCourtScreen from '../../screens/FoodCourtScreen';
import FavoritesScreen from '../../screens/FavoritesScreens/Index';
import EditProfile from '../../screens/EditProfileScreen';
import CorporateScreen from '../../screens/CorporateCodeScreen';
import ManageAddress from '../../screens/ManageAddress';
import YourFavouritesScreen from '../../screens/YourFavouritesScreen';
import DeleteAccount from '../../screens/DeleteAccount';
import AccountScreen from '../../screens/AccountScreen';
import DrawerDetailsScreen from '../../screens/DrawerDetailsScreen';

const HomeStack = createStackNavigator();
const FoodCourtStack = createStackNavigator();
const AccountStack = createStackNavigator();

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="FoodCourtScreen" component={FoodCourtScreen} />
      <HomeStack.Screen name="SearchScreen" component={SearchScreen} />
      <HomeStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
      <HomeStack.Screen name="QRCodeScreen" component={QRCodeScreen} />
      <HomeStack.Screen name="LocationScreen" component={LocationScreen} />
      <HomeStack.Screen
        name="DrawerDetailsScreen"
        component={DrawerDetailsScreen}
      />
    </HomeStack.Navigator>
  );
};

const FoodCourtScreenStack = () => {
  return (
    <FoodCourtStack.Navigator
      initialRouteName="FoodCourtScreen"
      screenOptions={{headerShown: false}}>
      <FoodCourtStack.Screen
        name="FoodCourtScreen"
        component={FoodCourtScreen}
      />
      <FoodCourtStack.Screen name="SearchScreen" component={SearchScreen} />
      <FoodCourtStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
      <FoodCourtStack.Screen name="QRCodeScreen" component={QRCodeScreen} />
      <FoodCourtStack.Screen name="LocationScreen" component={LocationScreen} />
      <FoodCourtStack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
      />
    </FoodCourtStack.Navigator>
  );
};

const AccountScreenStack = () => {
  return (
    <AccountStack.Navigator
      initialRouteName="AccountScreen"
      screenOptions={{headerShown: false}}>
      <AccountStack.Screen name="AccountScreen" component={AccountScreen} />
      <AccountStack.Screen name="EditProfiel" component={EditProfile} />
      <AccountStack.Screen name="CorporateScreen" component={CorporateScreen} />
      <AccountStack.Screen name="ManageAddress" component={ManageAddress} />
      <AccountStack.Screen
        name="YourFavouritesScreen"
        component={YourFavouritesScreen}
      />
      <AccountStack.Screen name="DeleteAccount" component={DeleteAccount} />
    </AccountStack.Navigator>
  );
};

export {HomeScreenStack, FoodCourtScreenStack, AccountScreenStack};
