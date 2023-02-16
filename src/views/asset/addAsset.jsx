import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInputs} from '../../components/atoms';

const AddAsset = () => {
  return (
    <View>
      <Text>AddAsset</Text>
      <TextInputs placeholder="icon" />
      <TextInputs placeholder="name" />
      <TextInputs placeholder="code" />
      <TextInputs placeholder="amount" />
      <TextInputs placeholder="qty" />
      <TextInputs placeholder="price" />
      <TextInputs placeholder="status" />
      <TextInputs placeholder="isActiveAsset" />
      <TextInputs placeholder="close price" />
    </View>
  );
};

export default AddAsset;

const styles = StyleSheet.create({});
