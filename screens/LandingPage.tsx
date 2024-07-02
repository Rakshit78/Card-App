import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import CustumText from '../components/CustumText';
import Tabs from '../components/Tabs';
import Cards from '../components/Card';
export default function LandingPage(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <CustumText
        size={4}
        family=""
        weight="bold"
        content="All your credit cards"
      />
      <CustumText
        size={2}
        family=""
        weight="500"
        content="FInd all your credit cards here"
      />
      <View style={styles.cardsContainer}>
        <Tabs />
        <Cards />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Image
          source={require('../assets/plus.png')}
          style={{width: 12, height: 12}}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
    },
    cardsContainer: {
      flex: 1,
      backgroundColor: '#222222',
      marginTop: 30,
    },
    btn: {
      position: 'absolute',
      right: 30,
      bottom: 50,
      padding: 25,
      backgroundColor: '#FFF',
      borderRadius: 50,
    },
  });