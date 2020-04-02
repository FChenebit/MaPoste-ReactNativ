import React from 'react'
import {createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'

import SearchPost from '../Components/SearchPost'
import ListPost from '../Components/ListPost'
import CheckAddress from '../Components/CheckAddress'
import DetailAddress from '../Components/DetailAddress'
import StampPrice from '../Components/StampPrice'


const SearchStackNavigator = createStackNavigator({
  SearchPost: {
    screen: SearchPost,
  },
  ListPost: {
    screen: ListPost
  }
},
{
  initialRouteName: 'SearchPost',
})

const AddressStackNavigator = createStackNavigator({
  CheckAddress: {
    screen: CheckAddress,
  },
  DetailAddress: {
    screen: DetailAddress
  }
},
{
  initialRouteName: 'CheckAddress',
})

const StampNavigator = createStackNavigator({
  StampPrice: {
    screen: StampPrice,
  }
},
{
  initialRouteName: 'StampPrice',
})

const AppNavigator = createDrawerNavigator({
  SearchStackNavigator,
  AddressStackNavigator,
  StampNavigator,
},
{
  initialRouteName:'SearchStackNavigator'
})

export default createAppContainer(AppNavigator)
