import {View, Image, Dimensions, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import {Carousel, Pagination} from '../atoms';

const {width} = Dimensions.get('window');

const CardCarousel = ({Items, activeIndex}) => {
  const carouselRef = useRef();
  const [state, setstate] = useState({
    activeIndex: activeIndex ? activeIndex : 0,
  });
  const renderItem = ({item, index}) => (
    <View key={index} style={styles.itemContent}>
      <Image resizeMethod="resize" style={styles.img} source={item.image} />
    </View>
  );

  return (
    <View>
      <Carousel
        layout={'default'}
        ref={carouselRef}
        data={Items}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
        onSnapToItem={index => setstate({...state, activeIndex: index})}
        useScrollView={true}
        hasParallaxImages={true}
        firstItem={state.activeIndex}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        loop={true}
        loopClonesPerSide={2}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
      />
      <Pagination
        containerStyle={styles.pagination}
        dotsLength={Items.length}
        dotColor={'blue'}
        inactiveDotColor="#FFF"
        activeDotIndex={state.activeIndex}
        carouselRef={carouselRef}
        tappableDots={!!carouselRef}
        dotContainerStyle={{
          marginBottom: -30,
        }}
        dotStyle={{
          width: 10,
        }}
      />
    </View>
  );
};

export default CardCarousel;

const styles = StyleSheet.create({
  pagination: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor: '#FFF',
  },
  itemContent: {
    backgroundColor: 'floralwhite',
    borderRadius: 5,
  },
  img: {
    width: width,
    height: width / 3,
    backgroundColor: 'red',
  },
});
