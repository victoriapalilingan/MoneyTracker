import React, {useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Header from '../../components/molecules/Header';
import TextInput from '../../components/molecules/TextInput';
import Gap from '../../components/atoms/Gap';
import Button from '../../components/atoms/Button';

const SignUp = ({navigation}) => {
  const [photo, setPhoto] = useState(require('../../assets/null-photo.png'));

  const handleChoosePhoto = () => {
    console.log('Change photo pressed');
    // nanti bisa ditambahkan fitur pilih foto dari galeri
  };

  const handleContinue = () => {
    console.log('Continue pressed');
    // contoh navigasi:
    // navigation.navigate('NextScreen');
  };

  return (
    <View style={styles.container}>
      <Header label="Sign Up" onPress={() => navigation.goBack()} />

      {/* Foto Profil Bulat */}
      <View style={styles.photoWrapper}>
        <TouchableOpacity onPress={handleChoosePhoto} activeOpacity={0.7}>
          <Image source={photo} style={styles.photo} />
        </TouchableOpacity>
      </View>

      <View style={styles.contentWrapper}>
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={12} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          keyboardType="email-address"
        />
        <Gap height={12} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          secureTextEntry
        />
        <Gap height={16} />
        <Button
          label="Continue"
          onPress={handleContinue}
          color="#0ACF83"
          textColor="#FFFFFF"
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  photoWrapper: {alignItems: 'center', marginTop: 24},
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#E5E5E5',
  },
  contentWrapper: {
    marginTop: 24,
    paddingHorizontal: 24,
    paddingTop: 26,
  },
});
