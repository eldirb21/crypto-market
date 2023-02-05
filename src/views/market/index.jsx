import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  AppBar,
  Containers,
  Contents,
  Icons,
  Texts,
} from '../../components/atoms';

const Market = () => {
  const [state, setState] = useState({
    search: '',
    ShowSearch: false,
  });
  return (
    <Containers>
      <AppBar
        title={'Market'}
        search
        value={state.search}
        onSearch={val => setState({...state, search: val})}
        onClose={() => setState({...state, search: ''})}
      />
      <Contents scroll>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 10,
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          <Texts style={{flex: 1, textAlign: 'center'}}>Name</Texts>
          <Texts style={{flex: 0.4, textAlign: 'right'}}>Latest price</Texts>
          <Texts style={{flex: 0.35, textAlign: 'center'}}>Up/Down</Texts>
        </View>
        {[1, 2, 3, 54, 56, 6, 1, 2, 3, 54, 56, 6, 1, 2, 3, 54, 56, 6].map(
          (item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#FFF',
                  margin: 2,
                  padding: 5,
                  marginHorizontal: 10,
                  borderRadius: 8,
                }}>
                <Icons name="facebook" size={25} color="#0974EC" />
                <View style={{flex: 1, marginLeft: 10}}>
                  <Texts
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      textTransform: 'uppercase',
                    }}>
                    Ada
                  </Texts>
                  <Texts style={{color: 'grey', fontWeight: '600'}}>
                    Vol:2342343.1113
                  </Texts>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Texts style={{color: 'green', fontWeight: '600'}}>
                    0.00312323
                  </Texts>
                  <Texts
                    style={{
                      backgroundColor: 'red',
                      padding: 2,
                      fontSize: 12,
                      width: 55,
                      textAlign: 'center',
                      color: '#FFF',
                      fontWeight: '600',
                      borderRadius: 4,
                      marginLeft: 5,
                    }}>
                    -0.500%
                  </Texts>
                </View>
              </TouchableOpacity>
            );
          },
        )}
      </Contents>
    </Containers>
  );
};

export default Market;

const styles = StyleSheet.create({});
