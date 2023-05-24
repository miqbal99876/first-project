import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import CustomDrawer from '../../components/customDrawer';
import Home from '../../screens/home';
import SocietiesScreen from '../../screens/societies';
import Users from '../../screens/users';
import Personal from '../../screens/personal';
import BiitScreen from '../../screens/biit';
import CalendarScreen from '../../screens/calender';
import Class from '../../screens/class';
import BottomTabBar from '../bottom-tab/bottomTabBar';


const Drawer = createDrawerNavigator();

 export const MyDrawer=()=> {
  return (
    <Drawer.Navigator initialRouteName='BottomTabBar' drawerContent={props => <CustomDrawer {...props} />}>
    <Drawer.Screen
        name="BottomTabBar"
        component={BottomTabBar}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

