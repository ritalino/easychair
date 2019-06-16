import React from 'react';
import { Text, View } from 'react-native';

import MapView from 'react-native-maps';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export const HomeScreen = () => (
  // <MapView
  //   style={{flex: 1}}
  //   region={{
  //     latitude: 42.882004,
  //     longitude: 74.582748,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421
  //   }}
  //   showsUserLocation={true}
  // />
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer(AppNavigator);
