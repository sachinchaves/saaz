import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import axios from 'axios';

const Tracks = ({navigation, route}) => {
  const [tracks, setTracks] = useState([]);
  console.log(navigation);
  console.log(route.params.id);
  const url = `https://api.spotify.com/v1/tracks/${route.params.id}`;
  useEffect(() => {
    const getTracks = async () => {
      const response = await axios.get(url, {
        headers: {
          Authorization:
            'Bearer BQDRzwNNoK01ztn-A97pn3DeFaYVQK3TdKJkfO5OYDwTZhW24C7HxLKPVhhGfulZP162yEj5R5X4awa5vnw',
        },
      });
      const result = await response.data;
      setTracks(result);
      console.log(result);
    };
    getTracks();
  }, [route.params.id, url]);
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Tracks</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Tracks;
