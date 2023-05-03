import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import CustomDrawer from '../../components/customDrawer';
import Home from '../../screens/home';

const Drawer = createDrawerNavigator();

 export const MyDrawer=()=> {
  return (
    <Drawer.Navigator initialRouteName='Home' drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

