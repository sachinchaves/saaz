import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Spacer from '../components/commonStyles/Spacer';
import SectionTitle from '../components/commonStyles/SectionTitle';
import PlaylistContainer from '../components/Playlists/PlaylistContainer';
import PlaylistThumb from '../components/Playlists/PlaylistThumb';
import PlaylistTitle from '../components/Playlists/PlaylistTitle';

const App = props => {
  const navigation = props.navigation;

  const PlaylistData1 = [
    {
      playlistTitle: 'Today’s Top Hits',
      image: require('../imgs/todaystophits.jpg'),
    },
    {
      playlistTitle: 'Hot Hits Canada',
      image: require('../imgs/todaystophits.jpg'),
    },
    {playlistTitle: 'Pop All Day', image: require('../imgs/todaystophits.jpg')},
    {
      playlistTitle: 'Best Pop Songs of 2020',
      image: require('../imgs/todaystophits.jpg'),
    },
  ];

  const PlaylistItemStyle1 = ({item}) => (
    <PlaylistContainer>
      <PlaylistThumb source={item.image} />
      <PlaylistTitle title={item.playlistTitle} />
    </PlaylistContainer>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <Spacer />
        <SectionTitle>Featured Playlists</SectionTitle>
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          contentContainerStyle={{paddingRight: 10, paddingLeft: 10}}
          data={PlaylistData1}
          renderItem={PlaylistItemStyle1}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
