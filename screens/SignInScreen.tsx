import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import typographyStyles from '../styles/TypographyStyles';
import textInputStyles from '../styles/TextInputStyles';

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
});

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={typographyStyles.screenHeader}>Sign In</Text>
      <Text style={typographyStyles.label}>Email</Text>
      <TextInput
        style={textInputStyles.textInput}
        value={email}
        textContentType='emailAddress'
        onChangeText={(text) => setEmail(text)}
        placeholder='Email' />
      <Text style={typographyStyles.label}>Password</Text>
      <TextInput
        style={textInputStyles.textInput}
        value={password}
        textContentType='password'
        secureTextEntry
        placeholder='Password'
        onChangeText={(text) => setPassword(text)} />
    </View>
  );
}
