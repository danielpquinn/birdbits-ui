import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function CreateAccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Create account</Text>
    </View>
  );
}
