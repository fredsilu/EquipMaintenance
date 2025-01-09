import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleRegister = () => {
      if (username !== '' && password !== '') {
          login({username: username})
          navigation.goBack()
      } else {
          Alert.alert('Erreur', 'Veuillez remplir tous les champs')
      }
  }

  return (
    <View style={styles.container}>
      <Text>Inscription</Text>
      <TextInput
        placeholder="Nom d'utilisateur"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="S'inscrire" onPress={handleRegister} />
    </View>
  );
};

// ... styles
export default RegisterScreen;