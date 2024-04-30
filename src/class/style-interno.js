import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>aaaaaaaaaaaaaaaaa</Text>
      <Text style={styles.subtitle}>bbbbbbbbbbbbbb</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic'
  },
  subtitle: {
    paddingTop: 10,
    fontSize: 20,
    color: 'black',
    fontWeight: '500'
  }
})