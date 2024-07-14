import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

import HomeScreen from '../pages/HomeScreen'
import CoinsScreen from '../pages/CoinsScreen';
import MenuScreen from '../pages/MenuScreen';

import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons'

export default function TabRoutes() {
  return (
      <Tab.Navigator>
        <Tab.Screen 
          name="PEDIDOS"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
                <Entypo name='home' size={25} />
            )
          }}
        />
        <Tab.Screen 
          name="MOEDAS"
          component={CoinsScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
                <FontAwesome5 name='coins' size={23} />
            )
        }}
        />
        <Tab.Screen 
          name="PERFIL"
          component={MenuScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (
                <Ionicons name='man' size={23} />
            )
          }}
        />
      </Tab.Navigator>
  );
}
