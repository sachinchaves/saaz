import React, {useEffect, useState} from 'react';
import {authorize, refresh} from 'react-native-app-auth';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import axios from 'axios';
import Carousel from 'react-native-snap-carousel';
import SearchBar from 'react-native-dynamic-search-bar';

import Spacer from '../components/commonStyles/Spacer';
import SectionTitle from '../components/commonStyles/SectionTitle';
import CarouselSlider from '../components/Carousel/CarouselSlider';
import Playlist from '../components/Playlists/Playlist';

const App = props => {
  const [releaseData, setReleaseData] = useState([]);
  const [featured, setfeatured] = useState([]);
  // const [val, setVal] = useState();
  // useEffect(() => {
  //   Linking.openURL(
  //     'https://accounts.spotify.com/authorize?client_id=6822a3a43f594165b0d8f33da9f541d7&redirect_uri=http://localhost:8888&scope=user-read-private%20user-read-email&response_type=token&state=123&show_dialog=true',
  //   );
  // }, []);
  // const token =
  //   'Bearer BQCR2M7WuMankF5XrpI-JH0O3lfWYhLipZ6_77X-tGwqD41HW69vfqVsBEKsqfdR_UvaW8jxZxVWgutN01o';

  useEffect(() => {
    const getRelease = async () => {
      const response = await axios.get(
        'https://api.spotify.com/v1/browse/new-releases?country=CA&offset=0&limit=6',
        {
          headers: {
            Authorization:
              'Bearer BQCR2M7WuMankF5XrpI-JH0O3lfWYhLipZ6_77X-tGwqD41HW69vfqVsBEKsqfdR_UvaW8jxZxVWgutN01o',
          },
        },
      );
      const result = await response.data;
      setReleaseData(result.albums.items);
      console.log(result.albums.items);
    };

    const getFeatured = async () => {
      const response = await axios.get(
        'https://api.spotify.com/v1/browse/featured-playlists?country=CA&timestamp=2021-08-13T18:11:43+00:00&offset=0&limit=6',
        {
          headers: {
            Authorization:
              'Bearer BQCR2M7WuMankF5XrpI-JH0O3lfWYhLipZ6_77X-tGwqD41HW69vfqVsBEKsqfdR_UvaW8jxZxVWgutN01o',
          },
        },
      );
      const result = await response.data;
      setfeatured(result.playlists.items);
      console.log(result.playlists.items);
    };
    getRelease();
    getFeatured();
  }, []);
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
      image={item.images[0]}
      title={item.name}
      artist={item.name}
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
    <Playlist image={item.images[0].url} title={item.name} />
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <Spacer />
        <SearchBar
          placeholder="Search artist name"
          onPress={() => alert('onPress')}
          onChangeText={text => console.log(text)}
        />
        <Spacer />
        <SectionTitle>New Releases</SectionTitle>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Carousel
            layout={'default'}
            // ref={ref => (this.carousel = ref)}
            sliderWidth={185}
            itemWidth={185}
            data={releaseData}
            renderItem={CarouselItemStyle}
          />
        </View>
        <Spacer />
        <SectionTitle>Featured Playlists</SectionTitle>
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          contentContainerStyle={{paddingRight: 10, paddingLeft: 10}}
          data={featured}
          renderItem={PlaylistItemStyle}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
