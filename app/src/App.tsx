import React from 'react';
import { StyleSheet, StatusBar, UIManager, View } from 'react-native';
import Main from './containers/Main';

// UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

class App extends React.Component<any, any> {
  render() {
    return (
      <View style={styles.container} >
        <StatusBar backgroundColor='transparent' animated={true} translucent={true} barStyle="light-content"/>
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;