import React from 'react';
import { View, Text , StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default function About({ navigation }) {
      return (
          <View style={styles.container}>
            <Text> This is a Home Page </Text>
              <Button
                title="Go to home page"
                onPress={ () => navigation.navigate('Home')}
              />
          </View>
      )
  }
    
