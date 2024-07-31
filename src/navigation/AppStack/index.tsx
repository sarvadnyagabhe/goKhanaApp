import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../../screens/HomeScreen';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import {forBottomSheetAndroid} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import AppRoutes from './BottomTab';
import BottomTab from './BottomTab';
import {FoodCourtScreenStack, HomeScreenStack} from './BottomTabStack';
import FoodCourtScreen from '../../screens/FoodCourtScreen';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{drawerPosition: 'right', headerShown: false}}>
      <Drawer.Screen
        name="BottomTab"
        component={BottomTab}
        options={{drawerLabel: 'Home'}}
      />
      {/* <Drawer.Screen name="HomeScreenStack" component={HomeScreenStack} />
      <Drawer.Screen
        name="FoodCourtScreenStack"
        component={FoodCourtScreenStack}
      /> */}
    </Drawer.Navigator>
  );
};

export default AppStack;
