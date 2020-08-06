import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import teachClassesBgImage from '../../assets/images/teach-classes-background.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

function TeachClasses() {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={teachClassesBgImage}
        resizeMode='contain'
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>

      <RectButton style={styles.okButton} onPress={handleNavigateBack}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default TeachClasses;
