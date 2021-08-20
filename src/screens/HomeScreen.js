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
import Carousel from 'react-native-snap-carousel';

import Spacer from '../components/commonStyles/Spacer';
import SectionTitle from '../components/commonStyles/SectionTitle';
import CarouselSlider from '../components/Carousel/CarouselSlider';
import Playlist from '../components/Playlists/Playlist';

const App = props => {
  const navigation = props.navigation;

  const NewReleasesData = [
    {
      title: 'Take My Breath',
      artist: 'The Weekend',
      image: require('../imgs/takeMyBreath.png'),
    },
    {
      title: 'Bad Habits',
      artist: 'Ed Sheeran',
      image: require('../imgs/takeMyBreath.png'),
    },
    {
      title: 'Happier Than Ever',
      artist: 'Billie Eilish',
      image: require('../imgs/takeMyBreath.png'),
    },
    {
      title: 'INDUSTRY BABY (feat. Jack Harlow)',
      artist: 'Lil Nas X, Jack Harlow',
      image: require('../imgs/takeMyBreath.png'),
    },
  ];

  const CarouselItemStyle = ({item}) => (
    <CarouselSlider
      image={item.image}
      title={item.title}
      artist={item.artist}
    />
  );

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

  const PlaylistItemStyle = ({item}) => (
    <Playlist image={item.image} title={item.playlistTitle} />
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <SectionTitle>New Releases</SectionTitle>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            sliderWidth={185}
            itemWidth={185}
            data={NewReleasesData}
            renderItem={CarouselItemStyle}
          />
        </View>
        <Spacer />
        <SectionTitle>Featured Playlists</SectionTitle>
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          contentContainerStyle={{paddingRight: 10, paddingLeft: 10}}
          data={PlaylistData1}
          renderItem={PlaylistItemStyle}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
