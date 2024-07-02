import {useEffect} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';

const Splash = ({navigation}: any) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      navigation.navigate('LandingPage');
    }, 2000);
    return () => clearTimeout(timerId);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <ActivityIndicator size={'large'} color={'#FFD83D'} />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#FFF',
    fontSize: 24,
    marginVertical: 20,
  },
  image: {
    width: 180,
    height: 32,
    marginVertical: 20,
  },
});

export default Splash;
