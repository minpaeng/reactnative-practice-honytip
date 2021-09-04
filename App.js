import React from 'react'
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import DetailPage from './pages/DetailPage';
import {LogBox} from 'react-native';

export default function App(){
  LogBox.ignoreAllLogs();
   return (<MainPage/>)
  // return (<AboutPage/>)
  // return(<DetailPage/>)
}