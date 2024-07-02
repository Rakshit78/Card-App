import {Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface Props {
  size: number;
  family: string;
  content: string;
  weight: string;
}

const CustumText = ({size, family, content, weight}: Props) => {
  return (
    <Text
      style={{
        fontFamily: family,
        fontSize: hp(size),
        color: '#FFF',
        marginHorizontal: 10,
        marginVertical: 8,
        fontWeight:`${weight}`
      }}>
      {content}
    </Text>
  );
};
export default CustumText;
