import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './styles';

const backgroundImage = require('../../../assets/img-background2.jpg'); 

export default function Home({ navigation }) {
  const navigateToSearch = () => {
    navigation.navigate('Search');
  };

  const navigateToScreen2 = (item) => {
    navigation.navigate('Screen2', item);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
    <View style={styles.container}>
      
      <Text style={styles.title}>GitHub Search</Text>

      <TouchableOpacity style={styles.btn} onPress={navigateToSearch}>
        <Text style={styles.btnText}>Search</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.btn} onPress={navigateToScreen2}>
        <Text style={styles.btnText}>Pacientes Agendados</Text>
      </TouchableOpacity> */}
      </View>
    </ImageBackground>
    
  );
  
}
