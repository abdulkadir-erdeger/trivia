import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#8eacbc',
    justifyContent: 'space-around',
  },
  picker: {
    backgroundColor: 'white',
    marginVertical: 10,
    width: 300,
    height: 20,
  },
  header: {fontSize: 20, fontWeight: '700'},
  button: {width: width * 0.8},
});
