//Import a library to help create a component
import React from 'react';
//import { Text, AppRegistry } from 'react-native';
//component nesting
import { AppRegistry, View } from 'react-native';

//imported component from header.js
import AlbumList from './src/components/AlbumList';
import Header from './src/components/header'; 

//Create a component
const App = () => (
        //if you want the app to be able to figure out whether it is song, album or w/e we will use prop system, thus we pass props to child component
        //use view tags as a div replacement
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums!al;sdjflk;s'} />
        <AlbumList />
    </View>
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App); 
