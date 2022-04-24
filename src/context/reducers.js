import AsyncStorage from '@react-native-async-storage/async-storage';

export default (state, action) => {
  let oldList = state.score;
  switch (action.type) {
    case 'ADD_SCORE':
      const {score} = action.payload;
      oldList.push(score);
      AsyncStorage.setItem('@SCORE', JSON.stringify(oldList));
      return {
        score: [...oldList],
      };
    case 'REMOVE_SCORE':
      AsyncStorage.removeItem('@SCORE');
      return {
        score: [],
      };
    default:
      return state;
  }
};
