import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import Button from '../Button';
import styles from './ScoreModal.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';

export default function ScoreModal({
  visible,
  onClose,
  onSend,
  score,
  correct,
  wrong,
}) {
  return (
    <Modal style={styles.modal} isVisible={visible} onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.rowContainer}>
            <Icon name="trophy" color="#FFD700" size={45} />
            <Text style={styles.text}>Score: {score * 10}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Icon name="check" color="#66ff00" size={45} />
            <Text style={styles.text}>Doğru: {correct}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Icon2 name="cross" color="#ff5100" size={45} />
            <Text style={styles.text}>Yanlış: {wrong}</Text>
          </View>
        </View>
        <Button title="TAMAMLA" onPress={onSend} />
      </View>
    </Modal>
  );
}
