import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import TextInput from '../../components/molecules/TextInput';
import Header from '../../components/molecules/Header';
import Gap from '../../components/atoms/Gap';

const SignUp = ({navigation}) => {
  const [photo, setPhoto] = useState(require('../../assets/null-photo.png'));

  const handleChoosePhoto = () => {
    console.log('Change photo pressed');
    // nanti bisa ditambahkan fitur pilih foto dari galeri
  };

  return (
    <View style={styles.container}>
      <Header label="Sign Up" onPress={() => navigation.goBack()} />

      <View style={styles.photoWrapper}>
        <TouchableOpacity onPress={handleChoosePhoto} activeOpacity={0.7}>
          <Image source={photo} style={styles.photo} />
        </TouchableOpacity>
      </View>

      <View style={styles.contentWrapper}>
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          secureTextEntry
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
