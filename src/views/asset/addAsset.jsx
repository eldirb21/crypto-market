import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  AppBar,
  Buttons,
  Containers,
  Contents,
  TextInputs,
} from '../../components/atoms';

const AddAsset = ({navigation}) => {
  const [state, setState] = useState({
    name: '',
    code: '',
    qty: '',
    totalAmount: '',
    buyPrice: '',
    targetSell: '',
    status: true,
    isActiveAsset: true,
  });

  const onSubmit = () => {
    navigation.goBack();
    console.log(state);
  };
  return (
    <Containers>
      <AppBar title={'Tambah asset'} onBack={() => navigation.goBack()} />
      <Contents isScroll contentStyle={{paddingHorizontal: 15}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInputs
            title={'Name'}
            value={state.name}
            onChangeText={val => setState({...state, name: val})}
            contentStyle={{
              flex: 0.49,
            }}
            placeholder="Name"
          />
          <TextInputs
            title={'Code'}
            value={state.code}
            onChangeText={val => setState({...state, code: val})}
            contentStyle={{
              flex: 0.49,
            }}
            placeholder="Code"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInputs
            title="Qty"
            value={state.qty}
            onChangeText={val => setState({...state, qty: val})}
            contentStyle={{
              flex: 0.49,
            }}
            placeholder="Qty"
          />
          <TextInputs
            title="Total Amount"
            value={state.totalAmount}
            onChangeText={val => setState({...state, totalAmount: val})}
            contentStyle={{
              flex: 0.49,
            }}
            placeholder="Rp"
          />
        </View>

        <TextInputs
          title={'Buy Price'}
          value={state.buyPrice}
          onChangeText={val => setState({...state, buyPrice: val})}
          contentStyle={{
            marginBottom: 15,
          }}
          placeholder="Rp"
        />
        <TextInputs
          title="Target Price"
          value={state.targetSell}
          onChangeText={val => setState({...state, targetSell: val})}
          contentStyle={{
            marginBottom: 15,
          }}
          placeholder="Rp"
        />
        <Buttons title={'Save'} onPress={() => onSubmit()} />
      </Contents>
    </Containers>
  );
};

export default AddAsset;

const styles = StyleSheet.create({});
