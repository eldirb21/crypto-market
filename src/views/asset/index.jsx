import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  AppBar,
  Containers,
  Contents,
  Floatings,
  Icons,
  Texts,
} from '../../components/atoms';
import {assetData} from '../../../globaldata';
const {width, height} = Dimensions.get('window');
const Asset = ({navigation}) => {
  const [assets, setassets] = useState(assetData);
  const [totalAsset, settotalAsset] = useState(null);

  var summary = assets.reduce((x, a) => {
    return x + a.Amount;
  }, 0);

  return (
    <Containers>
      <AppBar title={'Asset'} />
      <Contents>
        <View
          style={[
            {
              backgroundColor: '#FFF',
              margin: 10,
              padding: 15,
              borderRadius: 10,
            },
            {
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            },
          ]}>
          <Texts style={{fontSize: 14, fontWeight: '600'}}>Nilai Ekuitas</Texts>
          {/* <Texts>0.124342342</Texts> */}
          <Texts>= {summary}</Texts>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#CB9607',
                padding: 5,
                borderRadius: 10,
                width: width / 3.5,
                alignItems: 'center',
              }}>
              <Texts style={{color: '#FFF'}}>Setor</Texts>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#CB9607',
                padding: 5,
                borderRadius: 10,
                width: width / 3.5,
                alignItems: 'center',
              }}>
              <Texts>Tarik</Texts>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#CB9607',
                padding: 5,
                borderRadius: 10,
                width: width / 3.5,
                alignItems: 'center',
              }}>
              <Texts>Transfer</Texts>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View
            style={{
              marginBottom: 10,
              marginHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Texts style={{}}>Saldo</Texts>
            <TouchableOpacity>
              <Icons name="search" size={18} />
            </TouchableOpacity>
          </View>
          <ScrollView>
            {assets.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('EditAsset', item)}
                  key={index}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                    backgroundColor: '#FFF',
                    marginBottom: 5,
                    marginHorizontal: 15,
                    borderRadius: 10,
                  }}>
                  <View style={{}}>
                    <Icons name="facebook" color="blue" size={25} />
                  </View>
                  <View style={{flex: 1, marginLeft: 15}}>
                    <Texts style={{fontSize: 14, fontWeight: 'bold'}}>
                      {item.code}
                    </Texts>
                    <Texts>{item.perCoin}</Texts>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Texts style={{color: '#000'}}>Rp {item.Amount}</Texts>
                    <Texts style={{color: 'red'}}>{'-2.000 (9.10%)'}</Texts>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </Contents>
      <Floatings
        icon="plus"
        bacground={'#CB9607'}
        onPress={() => navigation.navigate('AddAsset')}
      />
    </Containers>
  );
};

export default Asset;

const styles = StyleSheet.create({});
