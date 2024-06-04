import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log('lalalalalala');
  return (
    <View style={styles.container}>
      <Text style={{...styles.text('yo'), fontWeight: 'bold'}}>Open up App.js to start working on your app!</Text>
      <View style={{height: 1, backgroundColor: 'black', alignSelf: 'stretch'}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: (arg1) => {
    if(arg1 === 'yo1'){
      return {color: 'red'}
    } else {
      return {color: 'green'}
    }
  }
});
