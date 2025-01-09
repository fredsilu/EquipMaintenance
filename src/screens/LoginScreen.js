import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    const handleLogin = async () => {
        if (username === 'test' && password === 'test') {
            login({ username: username });
        } else {
            Alert.alert('Erreur', 'Identifiants incorrects');
        }
    };

  return (
    <View style={styles.container}>
      <Text>Connexion</Text>
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
      <Button title="Se connecter" onPress={handleLogin} />
      <Button title="S'inscrire" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

// ... styles (comme dans l'exemple précédent)
export default LoginScreen;