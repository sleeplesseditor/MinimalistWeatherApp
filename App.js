import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

import { API_KEY } from './utils/weatherAPIKey';
import Weather from './components/Weather';

export default class App extends React.Component {
  state = {
    isLoading: false,
    temperature: 0,
    weatherCondition: null,
    error: null
  };

  render() {
    const { isLoading } = this.state;
    return (
        <View style={styles.container}>
          {isLoading ? (
            <Text>Fetching the Weather</Text>
          ) : (
            <View>
              <Text>Minimalist Weather App</Text>
            </View>
          )}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
