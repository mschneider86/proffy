import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/mschneider86.png' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Matheus Schneider</Text>
          <Text style={styles.subject}>Inglês</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Apaixonado por estudar idiomas
        {'\n'}
        {'\n'}
        Adora ensinar e ajudar os outros
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorite]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato </Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
