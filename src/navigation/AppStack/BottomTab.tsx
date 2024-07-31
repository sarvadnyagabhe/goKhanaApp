import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VendingScreen from '../../screens/VendingScreen';
import HomeIcon from '../../assets/Icons/HomeIcon';
import FoodcourtIcon from '../../assets/Icons/FoodcourtIcon';
import VendingIcon from '../../assets/Icons/VendingIcon';
import CartIcon from '../../assets/Icons/CartIcon';
import {
  FoodCourtScreenStack,
  HomeScreenStack,
  AccountScreenStack,
} from './BottomTabStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        // tabBarActiveBackgroundColor:'red'
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreenStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => <HomeIcon />,
        }}
      />
      <Tab.Screen
        name="FoodCourtScreenStack"
        component={FoodCourtScreenStack}
        options={{
          tabBarIcon: ({color, size}) => <FoodcourtIcon />,
          tabBarLabel: 'Food Court',
        }}
      />
      <Tab.Screen
        name="Vending"
        component={VendingScreen}
        options={{
          tabBarIcon: ({color, size}) => <VendingIcon />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreenStack}
        options={{
          tabBarIcon: ({color, size}) => <CartIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
