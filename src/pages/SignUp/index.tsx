import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header label="Sign Up" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentWrapper: {
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 26,
  },
});
