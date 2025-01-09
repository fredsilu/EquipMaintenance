import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EquipmentDetailsScreen = ({ route }) => {
  const { equipment } = route.params;

  return (
    <View style={styles.container}>
      <Text>Référence: {equipment.reference}</Text>
      <Text style={styles.title}>{equipment.name}</Text>
      <Text>Modèle: {equipment.model}</Text>
      <Text>Localisation: {equipment.location}</Text>  
      {/* Ajouter ici d'autres détails de l'équipement */}
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
});

export default EquipmentDetailsScreen;