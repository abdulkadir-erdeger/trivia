/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const jsonValue = await AsyncStorage.getItem('@SCORE');
      setData(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {data, error, loading};
};

export default useFetch;
