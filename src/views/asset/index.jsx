import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  AppBar,
  Containers,
  Contents,
  Icons,
  Texts,
} from '../../components/atoms';
const {width, height} = Dimensions.get('window');
const Asset = () => {
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
          <Texts style={{fontSize: 14, fontWeight: '600'}}>
            Nilai Ekuitas(BTC)
          </Texts>
          <Texts>0.124342342</Texts>
          <Texts>=$388.23</Texts>

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
            {[1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5].map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 8,
                    backgroundColor: '#FFF',
                    marginBottom: 5,
                    marginHorizontal: 15,
                    borderRadius: 10,
                  }}>
                  <View style={{}}>
                    <Icons name="facebook" color="blue" size={25} />
                  </View>
                  <View style={{flex: 1, marginLeft: 15}}>
                    <Texts>ADA</Texts>
                    <Texts>2.000</Texts>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Texts style={{color: '#000'}}>Rp.2.000.000</Texts>
                    <Texts style={{color: 'red'}}>{'-2.000 (9.10%)'}</Texts>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </Contents>
    </Containers>
  );
};

export default Asset;

const styles = StyleSheet.create({});
