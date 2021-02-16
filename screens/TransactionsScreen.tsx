import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function TransactionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Transactions</Text>
      <Button
        title="Send Birdbits"
        onPress={() => navigation.navigate('Send')}
      />
    </View>
  );
}
