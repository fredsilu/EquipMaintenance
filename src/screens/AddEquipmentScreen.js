import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddEquipmentScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [location, setLocation] = useState('');

  const handleAddEquipment = () => {
    // Ici, vous ajouterez la logique pour enregistrer l'équipement (appel API, etc.)
    console.log('Nouvel équipement à ajouter:', { name, model, location });
    navigation.goBack(); // Retour à la liste des équipements après l'ajout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter un équipement</Text>
      <TextInput
        placeholder="Nom"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Modèle"
        value={model}
        onChangeText={setModel}
        style={styles.input}
      />
      <TextInput
        placeholder="Localisation"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />
      <Button title="Ajouter" onPress={handleAddEquipment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
  },
});

export default AddEquipmentScreen;