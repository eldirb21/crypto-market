import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Children, useRef, useState } from 'react'
import { Icons } from '../atoms';

const CardSrollArrow = ({ children, style }) => {
    const [scrollViewWidth, setScrollViewWidth] = useState(0);
    const [currentXOffset, setCurrentXOffset] = useState(0);
    const [layoutWidth, setLayoutWidth] = useState(0);
    const [state, setState] = useState({
        scrollViewWidth: 0,
        currentXOffset: 0
    })

    const scrollViewRef = useRef(null);

    // const _handleScroll = (event) => {
    //     const newXOffset = event.nativeEvent.contentOffset.x;
    //     setCurrentXOffset(newXOffset);
    // };


    // const handleLeftArrow = () => {
    //     const eachItemOffset = scrollViewWidth / 10;
    //     const _currentXOffset = currentXOffset - eachItemOffset;
    //     scrollViewRef.current?.scrollTo({
    //         x: _currentXOffset,
    //         y: 0,
    //         animated: true,
    //     });
    // };

    // const handleRightArrow = () => {
    //     const eachItemOffset = scrollViewWidth / 10;
    //     const _currentXOffset = currentXOffset + eachItemOffset;
    //     scrollViewRef.current?.scrollTo({
    //         x: _currentXOffset,
    //         y: 0,
    //         animated: true,
    //     });
    // };
    const _handleScroll = (event) => {
        // console.log('currentXOffset =', event.nativeEvent.contentOffset.x);
        newXOffset = event.nativeEvent.contentOffset.x
        setState({ ...state, currentXOffset: newXOffset })
        // scrollViewRef.current.scrollTo({ x: newXOffset, y: 0, animated: true })
    }

    const leftArrow = () => {
        eachItemOffset = state.scrollViewWidth / 10; // Divide by 10 because I have 10 <View> items
        _currentXOffset = state.currentXOffset - eachItemOffset;
        scrollViewRef.current.scrollTo({ x: _currentXOffset, y: 0, animated: true })
    }

    const rightArrow = () => {
        eachItemOffset = state.scrollViewWidth / 10; // Divide by 10 because I have 10 <View> items 
        _currentXOffset = state.currentXOffset + eachItemOffset;
        scrollViewRef.current.scrollTo({ x: _currentXOffset, y: 0, animated: true })
    }
    return (
        // <View>
        //     {currentXOffset > 0 && (
        //         <Icons
        //             type={'Entypo'}
        //             name="chevron-thin-left"
        //             size={18}
        //             color={theme.colors.white}
        //             onPress={handleLeftArrow}
        //         />
        //     )}
        //     <ScrollView
        //         ref={scrollViewRef}
        //         horizontal
        //         showsHorizontalScrollIndicator={false}
        //         fadingEdgeLength={80}
        //         onLayout={(event) => setLayoutWidth(event.nativeEvent.layout.width)}
        //         onContentSizeChange={(width) => setScrollViewWidth(width - layoutWidth)}
        //         onScroll={_handleScroll}>

        //         {/* {children} */}
        //         <View style={styles.somestyle}><Text>1</Text></View>
        //         <View style={styles.somestyle}><Text>2</Text></View>
        //         <View style={styles.somestyle}><Text>3</Text></View>
        //         <View style={styles.somestyle}><Text>4</Text></View>
        //         <View style={styles.somestyle}><Text>5</Text></View>
        //         <View style={styles.somestyle}><Text>6</Text></View>
        //         <View style={styles.somestyle}><Text>7</Text></View>
        //         <View style={styles.somestyle}><Text>8</Text></View>
        //         <View style={styles.somestyle}><Text>9</Text></View>
        //         <View style={styles.somestyle}><Text>10</Text></View>

        //     </ScrollView>
        //     {currentXOffset < scrollViewWidth && (
        //         <Icons
        //             type={'Entypo'}
        //             name="chevron-thin-right"
        //             size={18}
        //             color={theme.colors.white}
        //             onPress={handleRightArrow}
        //         />
        //     )}
        // </View>
        <View style={[style, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>

            <TouchableOpacity
                style={{ position: 'absolute', left: 10, zIndex: 999 }}
                onPress={leftArrow}>
                <Icons name="arrow-back-ios" size={18} />
            </TouchableOpacity>

            <ScrollView
                contentContainerStyle={{ alignItems: 'center' }}
                horizontal={true}
                pagingEnabled={true}
                ref={scrollViewRef}
                showsHorizontalScrollIndicator={false}
                onContentSizeChange={(w, h) => setState({ ...state, scrollViewWidth: w })}
                scrollEventThrottle={16}
                onScroll={_handleScroll} >
                {children}
            </ScrollView>

            <TouchableOpacity style={{ position: 'absolute', right: 10, zIndex: 999 }} onPress={rightArrow}>
                <Icons name="arrow-forward-ios" size={18} />
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    somestyle: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 10,
        borderWidth: 1,
        borderRadius: 1,
        borderColor: 'black'
    }
})
export default CardSrollArrow