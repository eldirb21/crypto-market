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
  // useEffect(() => {
  //   load();
  // }, []);

  const load = async () => {
    // await axios
    //   .get(
    //     'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    //     {
    //       headers: {
    //         'X-CMC_PRO_API_KEY': '8c339820-f21a-46a5-81ce-91e2846e8d54',
    //       },
    //     },
    //   )
    //   .then(response => {
    //     response.data.data.map(x => {
    //       console.log(x);
    //     });
    //     // console.log('====================================');
    //     // console.log(response.data.data);
    //     // console.log('====================================');
    //   })
    //   .catch(err => {
    //     console.log('====================================');
    //     console.log(err);
    //     console.log('====================================');
    //   });
    // await axios
    // .get(
    //   'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map',
    //   {
    //     headers: {
    //       'X-CMC_PRO_API_KEY': '8c339820-f21a-46a5-81ce-91e2846e8d54',
    //     },
    //   },
    // )
    // .then(response => {
    //   console.log('press');
    //   // response.data.data.map(x => {
    //   //   console.log(x);
    //   // });
    //   console.log('====================================');
    //   console.log(response.data.data);
    //   console.log('====================================');
    // })
    // .catch(err => {
    //   console.log('====================================');
    //   console.log(err);
    //   console.log('====================================');
    // });
  };

  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}

export default App;
