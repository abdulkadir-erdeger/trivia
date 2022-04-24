import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    height: height / 2.4,
  },
  innerContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 20, margin: 5},
  rowContainer: {flexDirection: 'row', alignItems: 'center'},
});
