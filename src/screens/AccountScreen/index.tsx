import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import MagicText from '../../component/MagicText';
import NextIcon from '../../assets/Icons/NextIcon';
import AccountIcon from '../../assets/Icons/CartIcon';

const AccountScreen = ({navigation}: any) => {
  // const [selectedTitle, setSelectedTitle] = useState('1');
  const AccountDetails = [
    {
      id: '1',
      name: 'Edit Profile',
    },
    {
      id: '2',
      name: 'Corporate Code',
    },
    {
      id: '3',
      name: 'Manage Address',
    },
    {
      id: '4',
      name: 'Your Favourits',
    },
    {
      id: '5',
      name: 'Delete Account',
    },
  ];

  const handleNavigation = (id: string) => {
    switch (id) {
      case '1':
        navigation.navigate('EditProfile');
      case '2':
        navigation.navigate('CorporateScreen');
      case '3':
        navigation.navigate('ManageAddress');
      case '4':
        navigation.navigate('YourFavouritesScreen');
      case '5':
        navigation.navigate('DeleteAccount');
      default:
        return (
          <View>
            <Text>Default Screen</Text>
          </View>
        );
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          height: 180,
          backgroundColor: '#f5efd0',
          marginBottom: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <MagicText style={{alignSelf: 'center'}}>Account Details</MagicText>
      </View>
      <ScrollView>
        {AccountDetails.map(item => (
          <TouchableOpacity
            onPress={() => {
              handleNavigation(item?.id);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 25,
              borderBottomWidth: 0.2,
              borderBottomColor: '#cccfcd',
            }}>
            <MagicText
              style={{
                alignSelf: 'center',
                fontSize: 14,
                color: '#000',
              }}>
              {item.name}
            </MagicText>
            <NextIcon />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Pressable
        style={{
          alignItems: 'center',
          borderRadius: 5,
          padding: 10,
          margin: 25,
          justifyContent: 'center',
          backgroundColor: '#cccfcd',
        }}>
        <MagicText style={{alignSelf: 'center', fontWeight: '700'}}>
          Logout
        </MagicText>
      </Pressable>
    </SafeAreaView>
  );
};

export default AccountScreen;
