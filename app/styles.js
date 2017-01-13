import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  itemBox: {
    height: 50,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingTop: 12.5,
    paddingLeft: 10
  }
})

export default styles