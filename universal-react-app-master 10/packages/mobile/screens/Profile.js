import React from 'react';
import { View, Text , StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default function Profile({ navigation }) {
      return (
          <View style={styles.container}>
              <Text> This is a Profile Page </Text>
              <Button
                title="Go to contact page"
                onPress={ () => navigation.navigate('Contact')}
              />
          </View>
      )
}