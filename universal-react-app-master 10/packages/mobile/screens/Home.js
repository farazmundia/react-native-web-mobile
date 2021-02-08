import React from 'react';
import { View, Text , StyleSheet, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    marginTop: 70
  },

});

export default function Home({ navigation }) {
      return (
          <View style={styles.container}>
            <Text> This is a Home Page </Text>
              <Button
                title="Go to profile page"
                onPress={ () => navigation.navigate('Profile')}
              />
                                     
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            />   

          
          </View>

          
      )
  }
    
