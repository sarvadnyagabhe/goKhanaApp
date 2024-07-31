import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import ScreenHeader from '../../component/ScreenHeader';
import LocationIcon from '../../assets/Icons/LocationIcon';
import NotificationIcon from '../../assets/Icons/NotificationIcon';
import SearchIcon from '../../assets/Icons/SearchIcon';
import DrawerIcon from '../../assets/Icons/DrawerIcon';
import QRCodeScreen from '../QRCodeScreen';
import QRIcon from '../../assets/Icons/QRIcon';
import HeartIcon from '../../assets/Icons/HeartIcon';
import NextIcon from '../../assets/Icons/NextIcon';
import MagicText from '../../component/MagicText';
import CustomButton from '../../component/CustomButton';
import LeftArrowIcon from '../../assets/Icons/LeftArrowIcon';

const VendingScreen = ({navigation}: any) => {
  return (
    <>
      <ScreenHeader
        onPress={() => navigation.navigate('LocationScreen')}
        Icon={<LocationIcon />}
        leftIconStyle={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
        rightIconStyle={{
          alignItems: 'center',
          marginRight: 10,
        }}
        rightIcon1={<QRIcon />}
        onPressrightIcon1={() => navigation.navigate('NotificationScreen')}
        rightIcon2={<NotificationIcon />}
        onPressrightIcon2={() => navigation.navigate('SearchScreen')}
        rightIcon3={<SearchIcon />}
        onPressrightIcon3={() => navigation.navigate('SearchScreen')}
        rightIcon4={<DrawerIcon />}
        onPressrightIcon4={() => navigation.toggleDrawer()}
        title={''}></ScreenHeader>
      <View style={{marginHorizontal: 15, marginTop: 10}}>
        <View>
          <CustomButton
            containerStyle={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 15,
            }}
            iconStyle={{marginRight: 5}}
            showIcon={<LeftArrowIcon />}
            textStyle={{fontSize: 15, color: '#000'}}
            title="Vending Machines Near You"
            onPress={() => navigation.navigate('HomeScreen')}></CustomButton>
        </View>
        <View style={styles.searchSection}>
          <MagicText style={{}} numberOfLines={1}>
            search Within foodcourts
          </MagicText>
        </View>
        <View
          style={{
            borderRadius: 10,
            borderColor: '#eddcd1',
            backgroundColor: '#f7e0d5',
            marginBottom: 60,
            flexDirection: 'row',
            padding: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <HeartIcon />
            {/* <Image
              source={require('../../assets/Images/RedHeart.png')}
              style={{height: 20, width: 20}}
            /> */}
            <MagicText
              style={{
                color: '#000',
                paddingLeft: 10,
                alignItems: 'center',
                fontWeight: '600',
              }}>
              Favorites
            </MagicText>
          </View>
          <CustomButton
            containerStyle={{alignItems: 'center'}}
            onPress={() => navigation.navigate('FavoritesScreen')}
            title={''}
            iconStyle={{
              backgroundColor: '#f5d3c1',
              borderRadius: 4,
              marginRight: 10,
              padding: 2,
            }}
            showIcon={<NextIcon />}></CustomButton>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MagicText
            style={{
              color: '#000',
              fontWeight: 'bold',
              marginTop: 60,
            }}>
            No Vending Machinces currently avaliable nerarby.
          </MagicText>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  searchSection: {
    borderColor: '#d8dce3',
    borderWidth: 1,
    borderRadius: 10,
    padding: 9,

    marginBottom: 20,
  },
});
export default VendingScreen;
