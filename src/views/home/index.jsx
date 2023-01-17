import React, {useState} from 'react';
import {Dimensions, View, TouchableOpacity} from 'react-native';
import {
  AppBar,
  Containers,
  Contents,
  Icons,
  Texts,
} from '../../components/atoms';
import {CardCarousel, CardSrollArrow} from '../../components/modules';
var item0 = require('../../assets/carousel0.jpg');
var item1 = require('../../assets/carousel1.jpg');
var item2 = require('../../assets/carousel2.jpg');
var item3 = require('../../assets/carousel3.jpeg');
const {width, height} = Dimensions.get('window');
const Home = () => {
  const [state, setstate] = useState({
    activeIndex: 0,
  });
  const [Items, setItems] = useState([
    {
      image: item0,
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      image: item1,
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      image: item2,
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      image: item3,
      title: 'Item 4',
      text: 'Text 4',
    },
    {
      image: item3,
      title: 'Item 5',
      text: 'Text 5',
    },
  ]);
  return (
    <Containers>
      <AppBar isBack isSearch title={'Home'} />
      <Contents>
        <CardCarousel Items={Items} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#FFF',
            margin: 10,
            borderRadius: 5,
            padding: 10,
          }}>
          {[1, 2, 3, 4].map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  alignItems: 'center',
                  padding: 5,
                  width: width / 4,
                  flex: 1,
                }}>
                <Icons name="facebook" color="blue" size={30} />
                <Texts>Language</Texts>
              </TouchableOpacity>
            );
          })}
        </View>
        <CardSrollArrow style={{marginLeft: 10}}>
          {Items.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  width: width / 4,
                  height: width / 3.5,
                  margin: 2,
                  backgroundColor: '#FFF',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8,
                }}>
                <Icons
                  type={'Zocial'}
                  color="#F59C0B"
                  name="bitcoin"
                  size={35}
                />
                <Texts style={{fontWeight: '600'}}>BTC</Texts>
                <Texts style={{fontWeight: '600', color: '#B20E0E'}}>
                  213223.12
                </Texts>
                <Texts
                  style={{fontSize: 10, fontWeight: '600', color: '#B20E0E'}}>
                  0.82%
                </Texts>
              </TouchableOpacity>
            );
          })}
        </CardSrollArrow>
      </Contents>
    </Containers>
  );
};

export default Home;
