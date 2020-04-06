import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator,  DrawerContentScrollView, DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import { ImageBackground,Image,Text } from "react-native";

import SearchPost from '../Components/SearchPost'
import ListPost from '../Components/ListPost'
import CheckAddress from '../Components/CheckAddress'
import DetailAddress from '../Components/DetailAddress'
import StampPrice from '../Components/StampPrice'

const SearchStackNavigator = createStackNavigator();

function SearchStack() {
  return (
    <SearchStackNavigator.Navigator headerMode='none'>
      <SearchStackNavigator.Screen
        name="Poste"
        component={SearchPost}
      />
      <SearchStackNavigator.Screen
        name="List"
        component={ListPost}
      />
    </SearchStackNavigator.Navigator>
  );
}

const AddressStackNavigator = createStackNavigator();

function AddressStack() {
  return (
    <AddressStackNavigator.Navigator headerMode='none'>
      <AddressStackNavigator.Screen 
        name="Check"
        component={CheckAddress}
      />
      <AddressStackNavigator.Screen 
        name="Detail"
        component={DetailAddress}
      />
    </AddressStackNavigator.Navigator>
  )
}

const StampStackNavigator = createStackNavigator();

function StampStack() {
  return (    
    <StampStackNavigator.Navigator headerMode='none'>
      <StampStackNavigator.Screen
        name="Stamp Price"
        component={StampPrice}
      />
    </StampStackNavigator.Navigator>
  )
}

function CustomDrawerContent(props) {
  return (
    <ImageBackground source={require('../assets/drawerBackground.png')} style={{ width:'100%', height:'100%'}}>
    <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
    </ImageBackground>
  );
}


const AppDrawerNavigator = createDrawerNavigator();

function AppDrawer() {
  return (
  <AppDrawerNavigator.Navigator drawerContent={props => <CustomDrawerContent {...props}/>}>
      <AppDrawerNavigator.Screen 
        name='Search' 
        component={SearchStack}
        options={{ 
          drawerLabel:() => {return <Text style={{color:'white'}}>Search</Text>},
          drawerIcon:() => {return <Image source={require('../assets/iconPostOffice.png')} style={{ width:40, height:40}}/>}
        }}
      />
      <AppDrawerNavigator.Screen 
        name='Address' 
        component={AddressStack}
        options={{ 
          drawerLabel:() => {return <Text style={{color:'white'}}>Address</Text>},
          drawerIcon:() => {return <Image source={require('../assets/iconAddress.png')} style={{ width:40, height:40}}/>}
        }}
      />
      <AppDrawerNavigator.Screen 
        name='Stamp' 
        component={StampStack}
        options={{ 
          drawerLabel:() => {return <Text style={{color:'white'}}>Stamp</Text>},
          drawerIcon:() => {return <Image source={require('../assets/iconStamp.png')} style={{ width:40, height:40}}/>}
        }}
      />
    </AppDrawerNavigator.Navigator>
  )
}



export default AppDrawer;