import React,{useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
 useEffect(() => {
    if (Platform.OS === "android") { SplashScreen.hide(); }
  }, []);
  return (
    <View><Text>Danish</Text>
      <Text>Danish</Text>
      <Text>Danish</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
