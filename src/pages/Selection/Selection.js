import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './Selection.styles';
import {Picker} from '@react-native-picker/picker';
import Config from 'react-native-config';
import useFetch from '../../hook/useFetch';
import Button from '../../component/Button';
import Loading from '../../animation/Loading';
import Error from '../../animation/Error';

import {LogBox} from 'react-native';

LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);

export default function Selection({navigation}) {
  const {data, error, loading} = useFetch(Config.API_CATEGORY);
  const [difficulty, setDifficulty] = useState('easy');
  const [category, setCategory] = useState('18');
  const [type, setType] = useState('boolean');

  const values = data.trivia_categories;

  const handleQuizPage = () => {
    navigation.navigate('QuizPage', {
      difficulty: difficulty,
      category: category,
      type: type,
    });
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Selection Difficulty</Text>
        <Picker
          selectedValue={difficulty}
          onValueChange={(value, index) => setDifficulty(value)}
          style={styles.picker}>
          <Picker.Item label="Any Difficulty" value="easy" />
          <Picker.Item label="Easy" value="easy" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Hard" value="hard" />
        </Picker>
        <Text style={styles.header}>Selection Category</Text>
        <Picker
          selectedValue={category}
          onValueChange={(value, index) => setCategory(value)}
          style={styles.picker}>
          <Picker.Item label="Any Category" value="18" />
          {values
            ? values.map((item, index) => {
                return (
                  <Picker.Item key={index} label={item.name} value={item.id} />
                );
              })
            : null}
        </Picker>
        <Text style={styles.header}>Selection Type</Text>
        <Picker
          selectedValue={type}
          onValueChange={(value, index) => setType(value)}
          style={styles.picker}>
          <Picker.Item label="Any Difficulty" value="boolean" />
          <Picker.Item label="Multiple Choice" value="multiple" />
          <Picker.Item label="True/False" value="boolean" />
        </Picker>
      </View>
      <View style={styles.button}>
        <Button title="Hazır" onPress={handleQuizPage} />
      </View>
    </View>
  );
}
