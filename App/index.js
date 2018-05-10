import React from 'react';
import {Text, AppRegistry ,View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
    return (
        <View style={{ flex: 1 }}>
           <Header headerText={'Favorite Albums'} />
           <AlbumList />
        </View>
    )
};


AppRegistry.registerComponent('albums', () => App);
