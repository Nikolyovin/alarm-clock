import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Audio from './src/components/Audio';
import RecordingSounds from './src/components/RecordingSounds';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Audio/>
      <RecordingSounds/>
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
});
