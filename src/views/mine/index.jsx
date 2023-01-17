import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  AppBar,
  Containers,
  Contents,
  Icons,
  Texts,
} from '../../components/atoms';

const Mine = () => {
  return (
    <Containers>
      <AppBar title={'Mine'} />
      <Contents>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FFF',
            margin: 8,
            padding: 10,
            borderRadius: 10,
          }}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 100,
              marginRight: 20,
              borderColor: 'grey',
            }}>
            <Icons name="person" size={50} />
          </View>
          <View>
            <Texts>Jhon due duw</Texts>
            <Texts>@Jhone</Texts>
          </View>
        </View>
        <View>
          {[1, 2, 4, 4, 3, 3, 3].map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  backgroundColor: '#FFF',
                  marginBottom: 2,
                  padding: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icons name="compass-calibration" />
                  <Texts style={{marginLeft: 15}}>Change Password</Texts>
                </View>
                <Icons name="arrow-forward-ios" />
              </View>
            );
          })}
        </View>

        <TouchableOpacity style={{
          backgroundColor:'#CB9607',
          padding:8,
          position:'absolute',
          bottom:10,
          left:15,
          right:15,
          borderRadius:10,
          alignItems:'center'
        }}>
          <Texts>Sign Out</Texts>
        </TouchableOpacity>
      </Contents>
    </Containers>
  );
};

export default Mine;

const styles = StyleSheet.create({});
