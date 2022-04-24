import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8eacbc',
  },
  header: {
    margin: 40,
    width: width * 0.8,
    height: 100,
  },
  innerContainer: {width: width * 0.5},
  score: {
    height: height / 6,
    width: width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    paddingTop: 15,
  },
  scoreHeader: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
});
