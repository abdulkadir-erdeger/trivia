import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './Home.styles';
import Button from '../../component/Button';
import useFetchScore from '../../hook/useFetchScore';
import Loading from '../../animation/Loading';
import Error from '../../animation/Error';

export default function Home({navigation}) {
  const {loading, error, data} = useFetchScore();
  const [score, setScore] = useState(0);

  const handleSectionPage = () => {
    navigation.navigate('SelectionPage');
  };
  useEffect(() => {
    if (data != null) {
      setScore(Math.max(...data));
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#34515e" barStyle="light-content" />

      <Image
        source={require('../../asset/logo-banner.png')}
        style={styles.header}
        resizeMode="contain"
      />
      <ImageBackground
        resizeMode="cover"
        source={require('../../asset/background.png')}
        style={styles.score}>
        <Text style={styles.scoreHeader}>En Yüksek Skor</Text>
        <Text style={styles.scoreHeader}>{score}</Text>
      </ImageBackground>
      <View style={styles.innerContainer}>
        <Button title="Başla" onPress={handleSectionPage} />
      </View>
    </SafeAreaView>
  );
}
