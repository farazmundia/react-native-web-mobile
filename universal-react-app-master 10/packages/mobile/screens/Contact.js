import React from 'react';
import { View, Text , StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default function Contact({ navigation }) {
      return (
        <View style={styles.container}>
            <Text> This is a Contact Page </Text>
              <Button
                title="Go to about page"
                onPress={ () => navigation.navigate('About')}
              />
              
        </View>
      )
  }
    
