import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#8eacbc',
  },
  innerContainer: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 12,
  },
  header: {fontSize: 19, fontWeight: '700', color: 'black', marginBottom: 20},
  button: {
    backgroundColor: '#607d8c',
    margin: 10,
    height: height / 18,
    borderRadius: 6,
    justifyContent: 'center',
    paddingStart: 10,
  },
  stylish: {fontSize: 16, color: 'white'},
  buttonContainer: {width: width * 0.3, start: width - 150},
  barContainer: {
    marginBottom: 10,
    justifyContent: 'center',
  },
  barText: {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
});
