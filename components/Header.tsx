import {Image, Text, View} from 'react-native';

const Header = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginTop: 20,
        }}>
        <Image
          source={require('../assets/circle.png')}
          style={{width: 50, height: 50}}
        />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#252525',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 2,
            gap: 5,
          }}>
          <Image source={require('../assets/bulb.png')} />
          <Text style={{color: '#FFF'}}>Tips</Text>
        </View>
      </View>
    </>
  );
};

export default Header;
