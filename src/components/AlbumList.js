import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
//axios is for doing api requests
//import component from react library

// const AlbumList = () => {
//switching from functional to class 
class AlbumList extends Component {
    state = { albums: [] };
    //state will be used for solving the issue of the rerendering later; it is initialized up here
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }, console.log('set-state triggered')))
        //react native has a built in debug
        //after getting the data, we want to rerender now
        //setstate helps update after data has been fetch; also to be used as an update
    }
    renderAlbums() {
        return this.state.albums.map(album => 
            // <Text key={ album.title } >{album.title}</Text>
            <AlbumDetail key={album.title} album={album} />
            //the property name is album on the left side, so if you head to Album detail, it is the 'props.album'
        );
    }
    render() {
        console.log(this.state, 'render - triggered')
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
} //classes dont need semi colins
//classes needs the render method
//classes allow for more dynamic rendering


export default AlbumList;
