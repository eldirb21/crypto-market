/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import StackNav from './src/nav/stackNav';
import axios from 'axios';


const apiUrl = 'https://api.binance.com/api/v3/ticker/price';

function App() {
  useEffect(() => {
    fetchBtcPrice();
    fetchCryptoPrices();
  }, []);

  const fetchCryptoPrices = async () => {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          quoteAsset: 'BUSD',
        },
      });
      console.log(response);

      // const prices = response.data
      //   .filter(data => {
      //     console.log(data);

      //     const symbol = data.symbol;
      //     return symbol.endsWith('BUSD');
      //   })
      //   .map(data => {
      //     const symbol = data.symbol;
      //     const price = parseFloat(data.price);
      //     const crypto = symbol.replace('BUSD', '');
      //     return {crypto, price};
      //   });
      // console.log(prices);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBtcPrice = async () => {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          symbol: 'BTCUSDT',
        },
      });
      console.log(response);
      
      // const price = parseFloat(response.data.price);
      // console.log(`Current BTC price: $${price}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}

export default App;
