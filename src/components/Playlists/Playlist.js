import * as React from 'react';
import PlaylistContainer from './PlaylistContainer';
import PlaylistThumb from './PlaylistThumb';
import PlaylistTitle from './PlaylistTitle';

const Playlist = props => (
  <PlaylistContainer onPress={props.onPress}>
    <PlaylistThumb source={{uri: props.image}} />
    <PlaylistTitle>{props.title}</PlaylistTitle>
  </PlaylistContainer>
);

export default Playlist;
