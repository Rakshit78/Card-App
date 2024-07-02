import ReactNativeSwipeableViewStack from 'react-native-swipeable-view-stack';
import { wifi, visa} from './assets';
import { cardData } from '../utils/data';
import {Dimensions, Image, ImageBackground, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
9;
import CustumText from './CustumText';

const Cards = () => {
  type elemntType = {
    name: number;
  };
  const onCardSwipe = (swipedIndex: any) => {};
  const winWidth = Dimensions.get('window').width;

  const onClick = (element: any) => {};
 
  const renderViewItem = (element: elemntType) => {
    return (
      <View style={{}}>
        <ImageBackground
          source={element.name}
          style={{
            height: hp(28),
            width: winWidth * 0.9,
            borderRadius: 10,
          }}>
          <View style={{marginTop: hp(1), paddingHorizontal: 10}}>
            <CustumText
              content="Bank Of Designers"
              size={3}
              family=""
              weight="bold"
            />
          </View>
          <View
            style={{
              marginHorizontal: 10,
              marginBottom: hp(-2),
              paddingHorizontal: wp(3),
            }}>
            <Image source={wifi} style={{width: 'auto'}} resizeMode="contain" />
          </View>
          <View style={{paddingHorizontal: 10, marginVertical: hp(0.4)}}>
            <CustumText
              content="4242 4242 4242 4242"
              size={3}
              family=""
              weight="bold"
            />
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              marginHorizontal: 10,
              marginVertical: 'auto',
            }}>
            <View>
              <CustumText
                content="Car Holder Name"
                size={1}
                family=""
                weight="100"
              />
              <View style={{marginTop: -12}}>
                <CustumText
                  content="Maya Singh"
                  size={2}
                  family=""
                  weight="bold"
                />
              </View>
            </View>
            <View>
              <CustumText
                content="Expiry date"
                size={1}
                family=""
                weight="100"
              />
              <View style={{marginTop: -12}}>
                <CustumText content="08/24" size={2} family="" weight="bold" />
              </View>
            </View>
            <Image source={visa} />
          </View>
        </ImageBackground>
      </View>
    );
  };
  return (
    <>
      <ReactNativeSwipeableViewStack
        onSwipe={(swipedIndex: any) => onCardSwipe(swipedIndex)}
        initialSelectedIndex={1}
        data={cardData}
        renderItem={(element: any) => renderViewItem(element)}
        onItemClicked={(element: any) => onClick(element)}
        stackSpacing={40}
      />
    </>
  );
};

export default Cards;
