import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NuevaOrden from './views/NuevaOrden';
import Menu from './views/Menu';
import DetallePlatillo from './views/DetallePlatillo';
import FormularioPlatillo from './views/FormularioPlatillo';
import ResumenPedido from './views/ResumenPedido';
import ProgresoPedido from './views/ProgresoPedido';

// Components
import BotonResumen from './components/ui/BotonResumen';

// importar state de context
import FirebaseState from './context/firebase/firebaseState';
import PedidoState from './context/pedidos/pedidosState';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    <FirebaseState>
      <PedidoState>
        <NavigationContainer>
              <Stack.Navigator
                initialRouteName="NuevaOrden"
                screenOptions={{
                  headerStyle: {
                    backgroundColor: '#FFDA00'
                  }, 
                  headerTitleStyle: {
                    fontWeight: 'bold'
                  },
                  headerTintColor: '#000'
                }}
              >
                  <Stack.Screen
                    name="NuevaOrden"
                    component={NuevaOrden}
                    options={{
                      title: "Nueva Orden",
                      headerTitleAlign:'center'
                    }}
                  />

                  <Stack.Screen
                    name="Menu"
                    component={Menu}
                    options={{
                      title: "Nuestro Menú", 
                      headerTitleAlign:'center',
                      headerRight: props => <BotonResumen />
                    }}
                  />

                  <Stack.Screen
                    name="DetallePlatillo"
                    component={DetallePlatillo}
                    options={{
                      title: "Detalle Platillo",
                      headerTitleAlign:'center'
                    }}
                  />

                  <Stack.Screen
                    name="FormularioPlatillo"
                    component={FormularioPlatillo}
                    options={{
                      title: "Ordenar Platillo",
                      headerTitleAlign:'center'
                    }}
                  />

                  <Stack.Screen
                    name="ResumenPedido"
                    component={ResumenPedido}
                    options={{
                      title: "Resumen Pedido",
                      headerTitleAlign:'center'
                    }}
                  />

                  <Stack.Screen
                    name="ProgresoPedido"
                    component={ProgresoPedido}
                    options={{
                      title: "Progreso de Pedido",
                      headerTitleAlign:'center'
                    }}
                  />

              </Stack.Navigator>
          </NavigationContainer>
        </PedidoState>
      </FirebaseState>

    </>
  );
};



export default App;
