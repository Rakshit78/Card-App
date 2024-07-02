import {Image, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
import { tabIcos } from '../utils/data';
const Tabs = () => {
  const [selected, seSelected] = useState('fly');

  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 40,
      }}>
      {tabIcos.map((res, i) => {
        return (
          <TouchableOpacity
           disabled={res.selected==="finger"}
            onPress={() => {
              console.log(res.selected)
              seSelected(res.selected)}}
            key={res.name}>
            <Image
              source={res.name}
              style={{height: i == 0 ? 40 : 24, width: i == 0 ? 40 : 24}}
              resizeMode="contain"
              tintColor={
                i == 0
                  ? '#FFF'
                  : selected === res.selected
                  ? '#595959'
                  : '#59595940'
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Tabs;
