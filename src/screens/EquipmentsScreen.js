import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button, TextInput } from 'react-native';
import  { useState } from 'react';

// Données statiques pour les équipements (à remplacer par des données dynamiques)
const EQUIPMENTS_DATA = [
  { id: '1', name: 'Machine A', model: 'MX-500', location: 'Atelier 1' },
  { id: '2', name: 'Convoyeur B', model: 'CV-2000', location: 'Entrepôt' },
  { id: '3', name: 'Presse C', model: 'PR-100', location: 'Atelier 2' },
];

export default function EquipmentsScreen({ navigation }) {

  const [searchQuery, setSearchQuery] = useState('');
  const [equipments, setEquipments] = useState(EQUIPMENTS_DATA);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredEquipments = EQUIPMENTS_DATA.filter(equipment =>
      equipment.name.toLowerCase().includes(query.toLowerCase())
    );
    setEquipments(filteredEquipments);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('EquipmentDetails', { equipment: item })}
    >
      <Text style={styles.itemName}>{item.name}</Text>
      <Text>{item.model}</Text>
    </TouchableOpacity>
  );

  return (

    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Rechercher un équipement"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={equipments}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Ajouter un équipement"
        onPress={() => navigation.navigate('AddEquipment')}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 16,
  },
});
