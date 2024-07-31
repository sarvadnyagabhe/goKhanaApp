import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
  Pressable,
  TouchableHighlightComponent,
  ScrollView,
} from 'react-native';
import React from 'react';
import QRIcon from '../../assets/Icons/QRIcon';
import NotificationIcon from '../../assets/Icons/NotificationIcon';
import SearchIcon from '../../assets/Icons/SearchIcon';
import LocationIcon from '../../assets/Icons/LocationIcon';
import HeartIcon from '../../assets/Icons/HeartIcon';
import NextIcon from '../../assets/Icons/NextIcon';
import DrawerIcon from '../../assets/Icons/DrawerIcon';
import CustomButton from '../../component/CustomButton';
import ScreenHeader from '../../component/ScreenHeader';
import FoodCardComponent from '../../component/FoodCardComponent';
import HomeCardComponent from '../../component/HomeCardComponent';

const FoodCourtScreen = ({navigation}: any) => {
  const foodCourtMainList = [
    {
      id: '1',
      name: 'FoodCourt Demo Test',
      location: 'Phoniex Mall City Pune',
      kiloMeter: '2.80 kms Away',
      image: require('../../assets/Images/Food2.jpg'),
    },
    {
      id: '2',
      name: 'FoodCourt Demo Test',
      // description: 'Fresh sushi and sashimi.',
      location: 'Phoniex Mall City Pune',
      kiloMeter: '2.40 kms Away',
      image: require('../../assets/Images/SubwayImage.png'),
    },
    {
      id: '3',
      name: 'FoodCourt Demo Test',
      location: 'Phoniex Mall City Pune',
      kiloMeter: '2.5 kms Away',
      image: require('../../assets/Images/Food2.jpg'),
    },
    {
      id: '4',
      name: 'FoodCourt Demo Test',
      location: 'Phoniex Mall City Pune',
      kiloMeter: '2.16 kms Away',
      image: require('../../assets/Images/PhoenixMarketcity.png'),
    },
    {
      id: '5',
      name: 'FoodCourt Demo Test',
      location: 'Phoniex Mall City Pune',
      kiloMeter: '2.16 kms Away',
      image: require('../../assets/Images/Food2.jpg'),
    },
    {
      id: '6',
      name: 'FoodCourt Demo Test',
      location: 'Phoniex Mall City Pune',
      kiloMeter: '2.16 kms Away',
      image: require('../../assets/Images/Food2.jpg'),
    },
  ];

  return (
    <SafeAreaView style={styles.parent}>
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
        rightIcon1={<NotificationIcon />}
        onPressrightIcon1={() => navigation.navigate('NotificationScreen')}
        rightIcon2={<SearchIcon />}
        onPressrightIcon2={() => navigation.navigate('SearchScreen')}
        rightIcon3={<DrawerIcon />}
        onPressrightIcon3={() => navigation.toggleDrawer()}
        title={''}></ScreenHeader>
      <ScrollView>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <View style={{marginHorizontal: 15, marginTop: 10}}>
              <Text style={{fontSize: 18, color: 'black', marginBottom: 10}}>
                Foodscourts near you
              </Text>
              <TouchableOpacity
                style={styles.searchSection}
                onPress={() => navigation.navigate('SearchScreen')}>
                <TextInput placeholder="search within foodcourts"></TextInput>
              </TouchableOpacity>
              <Pressable
                onPress={() => navigation.navigate('FavoritesScreen')}
                style={{
                  borderRadius: 10,
                  borderColor: '#eddcd1',
                  backgroundColor: '#eddcd1',
                  marginBottom: 20,
                  flexDirection: 'row',
                  padding: 1,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <HeartIcon />
                  <Text style={{fontSize: 15, color: '#000', paddingLeft: 10}}>
                    Favorites
                  </Text>
                </View>
                <View style={{backgroundColor: '#e3c9ba', marginRight: 5}}>
                  <NextIcon />
                </View>
              </Pressable>
            </View>
          )}
          data={foodCourtMainList}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={{}}>
              <FoodCardComponent
                image={item.image}
                imageStyle={{height: 85, width: 85, marginRight: 8}}
                subtitle={item.location}
                subtitle2={item.name}
                title={item.kiloMeter}
                containerStyle={{
                  elevation: 3,
                  flexDirection: 'row',
                }}
              />
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  leftArrow: {
    marginBottom: 5,
  },
  searchSection: {
    borderColor: '#d8dce3',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 5,
    marginBottom: 20,
  },
  searchIcon: {
    padding: 10,
    width: 25,
    height: 25,
  },
  itemContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#ffff',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 14,
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  menuItem: {
    fontSize: 14,
    marginTop: 5,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  kilometer: {
    fontWeight: '700',
    fontSize: 14,
    color: '#000',
  },
});
export default FoodCourtScreen;
