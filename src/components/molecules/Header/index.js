import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ArrowBack from '../../../assets/arrow_back_ios_24px.svg';

const Header = ({label, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.backButton}>
        <ArrowBack width={24} height={24} fill="black" />
      </TouchableOpacity>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 37,
    paddingLeft: 24,
  },
  backButton: {
    marginRight: 16,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#000000',
  },
});
