import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
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