/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';

import Header from "./components/Header"
import Tab from "./components/tab"
import LinearGradient from "react-native-linear-gradient"
import Post from './components/post'
import { View, ScrollView } from 'react-native';


const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#f8f9fa" }}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        start={{ x: 0.1, y: 1 }} end={{ x: 0.1, y: 0.1 }}
        colors={['#ff5c8a', '#ff5c8a', '#ff0a54']}>
        <Header />
        <Tab />
      </LinearGradient>
      <ScrollView>
        <Post 
          postUrl="https://cdntr1.img.sputniknews.com/img/103602/93/1036029341_53:0:1346:700_1000x541_80_0_0_ed35f5dfb8a6c4c706b5b254bb56ddbe.jpg" 
          avatarUrl="https://i12.haber7.net//haber/haber7/photos/2019/32/DqT5a_1565084313_3636.jpg" />
        <Post
          postUrl="http://c.files.bbci.co.uk/6723/production/_111230462_eed71d9b-7130-458d-b210-593e09ca0059.jpg"
          avatarUrl="https://upload.wikimedia.org/wikipedia/commons/a/a9/Tom_Hanks_TIFF_2019.jpg"
           />
      </ScrollView>
    </View>
  );
};


export default App;
