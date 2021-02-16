import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function SendScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Send Birdbits</Text>
    </View>
  );
}
