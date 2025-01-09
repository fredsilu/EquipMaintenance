import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button, TextInput } from 'react-native';
import  { useState } from 'react';

// Données statiques pour les équipements (à remplacer par des données dynamiques)
const EQUIPMENTS_DATA = [
  { id: '1', name: 'Machine A', model: 'MX-500', location: 'Atelier 1', spectech: 'Puissance de 100W en utilisation externe', reference: 'MX500-A1B2-C3D4' },
  { id: '2', name: 'Convoyeur B', model: 'CV-2000', location: 'Usine 2', spectech: 'Capacité de transport de 5 tonnes', reference: 'CV2000-E5F6-G7H8' },
  { id: '3', name: 'Presse Hydraulique C', model: 'PH-100T', location: 'Atelier 3', spectech: 'Force de pression de 100 tonnes', reference: 'PH100T-I9J0-K1L2' },
  { id: '4', name: 'Tour Numérique D', model: 'TN-300', location: 'Atelier 1', spectech: 'Vitesse de rotation maximale de 5000 tr/min', reference: 'TN300-M3N4-O5P6' },
  { id: '5', name: 'Robot Soudeur E', model: 'RS-50', location: 'Usine 2', spectech: 'Portée de soudage de 2 mètres', reference: 'RS50-Q7R8-S9T0' },
  { id: '6', name: 'Groupe Électrogène F', model: 'GE-150', location: 'Extérieur', spectech: 'Puissance de 150 kVA', reference: 'GE150-U1V2-W3X4' },
  { id: '7', name: 'Pompe à Eau G', model: 'PA-5000', location: 'Station de pompage', spectech: 'Débit maximal de 5000 L/h', reference: 'PA5000-Y5Z6-A7B8' },
  { id: '8', name: 'Système de Ventilation H', model: 'SV-1000', location: 'Bâtiment administratif', spectech: 'Débit d\'air de 1000 m³/h', reference: 'SV1000-C9D0-E1F2' },
  { id: '9', name: 'Chariot Élévateur I', model: 'CE-25', location: 'Entrepôt', spectech: 'Capacité de levage de 2.5 tonnes', reference: 'CE25-G3H4-I5J6' },
  { id: '10', name: 'Machine d\'Emballage J', model: 'EM-300', location: 'Ligne de production', spectech: 'Cadence d\'emballage de 300 unités/minute', reference: 'EM300-K7L8-M9N0' },
  { id: '11', name: 'Machine de Découpe Laser K', model: 'DL-1500', location: 'Atelier de découpe', spectech: 'Puissance laser de 1500 W', reference: 'DL1500-O1P2-Q3R4' },
  { id: '12', name: 'Système de Refroidissement L', model: 'SR-200', location: 'Salle des serveurs', spectech: 'Capacité de refroidissement de 200 kW', reference: 'SR200-S5T6-U7V8' },
  { id: '13', name: 'Compresseur d\'Air M', model: 'CA-500', location: 'Atelier de maintenance', spectech: 'Débit d\'air de 500 L/min', reference: 'CA500-W9X0-Y1Z2' },
  { id: '14', name: 'Balance Industrielle N', model: 'BI-1000', location: 'Zone de pesage', spectech: 'Portée maximale de 1000 kg', reference: 'BI1000-A3B4-C5D6' },
  { id: '15', name: 'Imprimante 3D O', model: 'I3D-Pro', location: 'Laboratoire', spectech: 'Volume d\'impression de 30x30x40 cm', reference: 'I3DPro-E7F8-G9H0' },
  { id: '16', name: 'Scanner Industriel P', model: 'SI-50', location: 'Contrôle qualité', spectech: 'Précision de scan de 0.1 mm', reference: 'SI50-I1J2-K3L4' },
  { id: '17', name: 'Perceuse à Colonne Q', model: 'PC-20', location: 'Atelier 1', spectech: 'Vitesse de perçage réglable', reference: 'PC20-M5N6-O7P8' },
  { id: '18', name: 'Meuleuse d\'Angle R', model: 'MA-125', location: 'Atelier de maintenance', spectech: 'Diamètre du disque de 125 mm', reference: 'MA125-Q9R0-S1T2' },
  { id: '19', name: 'Poste à Souder TIG S', model: 'ST-200', location: 'Atelier de soudure', spectech: 'Intensité de soudage réglable', reference: 'ST200-U3V4-W5X6' },
  { id: '20', name: 'Banc d\'Essai T', model: 'BE-100', location: 'Laboratoire de test', spectech: 'Capacité de test de 100 kN', reference: 'BE100-Y7Z8-A9B0' },
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
