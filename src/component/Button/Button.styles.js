import {StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 10,
  },
  text: {
    padding: 5,
    fontWeight: 'bold',
  },
});

export default {
  primary: StyleSheet.create({
    container: {
      ...baseStyle.container,
      backgroundColor: '#34515f',
      borderColor: 'white',
      borderWidth: 1,
    },
    text: {
      ...baseStyle.text,
      color: 'white',
      fontSize: 30,
    },
  }),
  secondary: StyleSheet.create({
    container: {
      ...baseStyle.container,
      backgroundColor: 'white',
      borderColor: '#34515f',
      borderWidth: 2,
    },
    text: {
      ...baseStyle.text,
      color: '#34515f',
      fontSize: 18,
    },
  }),
};
