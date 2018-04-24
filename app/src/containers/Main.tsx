import React from 'react';
import { StyleSheet, View } from 'react-native';
import Grid from '../components/Grid'

export default () =>
  <View style={styles.container}>
    <Grid />
  </View>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
  