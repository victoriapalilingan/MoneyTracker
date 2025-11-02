import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/molecules/Header';

const SignUp = ({navigation}) => {
  const [photo, setPhoto] = useState(require('../../assets/null-photo.png'));

  const handleChoosePhoto = () => {
    console.log('Change photo pressed');
    // nanti bisa ditambahkan fitur pilih foto dari galeri
  };

  return (
    <View style={styles.container}>
      {/* Header dengan tombol panah */}
      <Header label="Sign Up" onPress={() => navigation.goBack()} />

      {/* Foto Profil Bulat di Tengah */}
      <View style={styles.photoWrapper}>
        <TouchableOpacity onPress={handleChoosePhoto} activeOpacity={0.7}>
          <Image source={photo} style={styles.photo} />
        </TouchableOpacity>
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
  photoWrapper: {
    alignItems: 'center',
    marginTop: 24,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50, // bulat sempurna
    borderWidth: 2,
    borderColor: '#ffffffff',
  },
  contentWrapper: {
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 26,
  },
});
