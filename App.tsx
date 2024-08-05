import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  TextInput,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AccountIcon from './src/assets/Icons/CartIcon';

const App = () => {
  const [message, setMessage] = React.useState();

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Button
        title="Say Hello"
        onPress={() => {
          setTimeout(() => {
            setMessage('Hello Tester');
          }, Math.floor(Math.random() * 200));
        }}
      />
      {message && (
        <Text style={styles.messageText} testID="printed-message">
          {message}
        </Text>
      )}
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: 300,
            height: 200,
            borderWidth: 1,
            marginTop: 12,

            // backgroundColor: 'orange',
          }}></View>
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            alignSelf: 'center',
            top: -8,
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              backgroundColor: 'gray',
              alignItems: 'center',
            }}>
            <AccountIcon />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  messageText: {
    fontFamily: 'Arial',
    fontSize: 38,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default App;
