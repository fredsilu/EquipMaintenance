import * as React from 'react';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EquipmentsScreen from '../screens/equipment/EquipmentsScreen.js';
import MaintenanceScreen from '../screens/MaintenanceScreen.js';
import HomeScreen from '../screens/HomeScreen';
import StockScreen from '../screens/StockScreen';
import TeamScreen from '../screens/TeamScreen';
import ReportsScreen from '../screens/ReportsScreen';
import AddEquipmentScreen from '../screens/equipment/AddEquipmentScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { AuthContext } from '../context/AuthContext';
import EquipmentDetailsScreen from '../screens/equipment/EquipmentDetailsScreen';


const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
        <Stack.Screen name="Equipments" component={EquipmentsScreen} options={{ title: 'Équipements' }} />
        <Stack.Screen name="Maintenance" component={MaintenanceScreen} options={{ title: 'Maintenance' }} />
        <Stack.Screen name="AddEquipment" component={AddEquipmentScreen} options={{ title: "Ajouter un équipement"}} />
        <Stack.Screen name="EquipmentDetails" component={EquipmentDetailsScreen} options={{ title: "Ajouter un équipement"}} />
     
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;