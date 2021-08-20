import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Tracks = props => {
  const navigation = props.navigation;

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Tracks</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Tracks;
