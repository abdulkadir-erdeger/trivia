import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Config from 'react-native-config';
import useFetch from '../../hook/useFetch';
import styles from './Quiz.styles';
import Button from '../../component/Button';
import {ProgressBar, Colors} from 'react-native-paper';
import Loading from '../../animation/Loading';
import Error from '../../animation/Error';
import ScoreModal from '../../component/ScoreModal';
import {useDispatch} from 'react-redux';

import {LogBox} from 'react-native';

LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."]);

export default function Quiz({route, navigation}) {
  const {data, error, loading} = useFetch(
    `${Config.API_URL}&category=${route.params.category}&difficulty=${route.params.difficulty}&type=${route.params.type}`,
  );
  const [ques, setQues] = useState(0);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [ModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const [timeLeft, setTimeLeft] = useState(12);
  let timer = () => {};

  const question = data.results;
  const types = route.params.type;

  const startTimer = () => {
    timer = setTimeout(() => {
      if (timeLeft <= 0) {
        clearTimeout(timer);
        handleCounterQues();
        return false;
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timer);
  });

  const start = () => {
    setTimeLeft(12);
    clearTimeout(timer);
    startTimer();
  };

  const handleCounterQues = () => {
    if (ques < 9) {
      start();
      setQues(ques + 1);
    } else {
      setModalVisible(true);
    }
  };

  const answerControl = answer => {
    if (question[ques].correct_answer === answer) {
      setScore(score + 1);
      setCorrect(correct + 1);
    } else {
      setWrong(wrong + 1);
    }
    handleCounterQues();
  };

  const handleSaveScore = () => {
    let puan = score * 10;
    dispatch({type: 'ADD_SCORE', payload: {puan}});
    setModalVisible(false);
    navigation.navigate('HomePage');
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  if (question) {
    if (types == 'boolean') {
      return (
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.barContainer}>
              <Text style={styles.barText}>{timeLeft}</Text>
              <ProgressBar
                progress={(Math.floor(timeLeft * (1.0 - 0.0 + 1.0)) + 0.0) / 24}
                color={Colors.red500}
                style={{height: 15}}
              />
            </View>
            <Text style={styles.header}>
              {ques + 1}- {question[ques].question}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => answerControl(question[ques].correct_answer)}>
              <Text style={styles.stylish}>
                {question[ques].correct_answer}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                answerControl(question[ques].incorrect_answers[0])
              }>
              <Text style={styles.stylish}>
                {question[ques].incorrect_answers[0]}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            {ques < 9 ? (
              <Button
                title="İlerle"
                theme="secondary"
                onPress={handleCounterQues}
              />
            ) : (
              <Button
                title="Bitir"
                theme="secondary"
                onPress={handleCounterQues}
              />
            )}
          </View>
          <ScoreModal
            visible={ModalVisible}
            onClose={() => setModalVisible(!ModalVisible)}
            onSend={handleSaveScore}
            score={score}
            correct={correct}
            wrong={wrong}
          />
        </View>
      );
    }

    if (types == 'multiple') {
      return (
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.barContainer}>
              <Text style={styles.barText}>{timeLeft}</Text>
              <ProgressBar
                progress={(Math.floor(timeLeft * (1.0 - 0.0 + 1.0)) + 0.0) / 24}
                color={Colors.red500}
                style={{height: 15}}
              />
            </View>
            <Text style={styles.header}>
              {ques + 1}- {question[ques].question}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                answerControl(question[ques].incorrect_answers[0])
              }>
              <Text style={styles.stylish}>
                {question[ques].incorrect_answers[0]}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                answerControl(question[ques].incorrect_answers[1])
              }>
              <Text style={styles.stylish}>
                {question[ques].incorrect_answers[1]}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                answerControl(question[ques].incorrect_answers[2])
              }>
              <Text style={styles.stylish}>
                {question[ques].incorrect_answers[2]}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => answerControl(question[ques].correct_answer)}>
              <Text style={styles.stylish}>
                {question[ques].correct_answer}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            {ques < 9 ? (
              <Button
                title="İlerle"
                theme="secondary"
                onPress={handleCounterQues}
              />
            ) : (
              <Button
                title="Bitir"
                theme="secondary"
                onPress={handleCounterQues}
              />
            )}
          </View>
          <ScoreModal
            visible={ModalVisible}
            onClose={() => setModalVisible(!ModalVisible)}
            onSend={handleSaveScore}
            score={score}
            correct={correct}
            wrong={wrong}
          />
        </View>
      );
    }
  }
  return <View></View>;
}
