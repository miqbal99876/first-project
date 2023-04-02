import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import * as React from 'react';
import BiitScreen from '../../screens/biit';

const Drawer = createDrawerNavigator();

 export const MyDrawer=()=> {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="BiitScreen" component={BiitScreen} />
    </Drawer.Navigator>
</NavigationContainer>
  );
}
