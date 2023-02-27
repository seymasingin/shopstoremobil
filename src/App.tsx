import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Products from './screens/Products';
import Detail from './screens/Detail';

const Stack = createNativeStackNavigator();

function App() {

  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Products" 
                    component={Products} 
                    options= {{title: "Store", 
                              headerStyle:{backgroundColor:"#82b3c9"}, 
                              headerTitleStyle:{color:"white"}}}/>
      <Stack.Screen name="Detail" 
                    component={Detail}
                    options= {{title: "Description", 
                              headerStyle:{backgroundColor:"#82b3c9"}, 
                              headerTitleStyle:{color:"white"},
                              headerTintColor:"white"}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;
