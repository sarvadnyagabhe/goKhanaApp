import {View, SafeAreaView, StyleSheet} from 'react-native';
import QRIcon from '../../assets/Icons/QRIcon';
import NotificationIcon from '../../assets/Icons/NotificationIcon';
import SearchIcon from '../../assets/Icons/SearchIcon';
import LocationIcon from '../../assets/Icons/LocationIcon';
import DrawerIcon from '../../assets/Icons/DrawerIcon';
import ScreenHeader from '../../component/ScreenHeader';
import CustomButton from '../../component/CustomButton';
import HomeCardComponent from '../../component/HomeCardComponent';

const HomeScreen = ({navigation}: any) => {
  const CardData = [
    {
      id: 1,
      title: 'Food Courts',
      subtitle: 'Browse across food courts and enjoy',
    },
    {
      id: 2,
      title: 'Vending Machines',
      subtitle: 'Order conveniently form vending',
    },
  ];

  return (
    <SafeAreaView style={styles.parent}>
      <ScreenHeader
        Icon={<LocationIcon />}
        onPress={() => {}}
        leftIconStyle={{
          alignItems: 'center',
          flexDirection: 'row',
          paddingLeft: 10,
        }}
        rightIconStyle={{
          alignItems: 'center',
          marginRight: 10,
        }}
        rightIcon1={<QRIcon />}
        onPressrightIcon1={() => {}}
        rightIcon2={<NotificationIcon />}
        onPressrightIcon2={() => {}}
        rightIcon3={<SearchIcon />}
        onPressrightIcon3={() => {}}
        rightIcon4={<DrawerIcon />}
        onPressrightIcon4={() => {}}
        title={''}></ScreenHeader>
      <View
        key={Math.random()}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginHorizontal: 15,
          marginTop: 10,
        }}>
        {CardData.map(item => {
          return (
            <HomeCardComponent
              containerStyle={
                item.id == 1
                  ? {backgroundColor: '#e3c9ba'}
                  : {backgroundColor: '#adedea'}
              }
              title={item.title}
              subtitle={item.subtitle}
              innercontainerStyle={
                item.id == 1
                  ? {backgroundColor: '#e8b99e'}
                  : {backgroundColor: '#81ded9'}
              }
              onPress={() => {}}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  mainContiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 15,
  },
  lebalStyle: {
    paddingLeft: 10,
    // paddingTop: 25,
    fontSize: 12,
    color: 'black',
    fontWeight: '700',
  },
  label2: {
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: '600',
  },
  headerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default HomeScreen;
