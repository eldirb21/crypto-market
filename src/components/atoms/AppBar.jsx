import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icons from './Icons'
import Texts from './Texts'
import Searchbar from './Searchbar'

const AppBar = ({ title, search, back, onSearch, onClose, value }) => {
    const [ShowSearch, setShowSearch] = useState(false);
   
    const onShowSearch = () => {
        setShowSearch(!ShowSearch);
        onClose();
    };

    return (
        <View style={[styles.container, styles.shadow]}>
            <View style={styles.header}>

                <View style={styles.leftContent}>
                    {back &&
                        <TouchableOpacity>
                            <Icons name="arrow-back-ios" size={20} />
                        </TouchableOpacity>
                    }
                </View>

                <View style={styles.centerContent}>
                    <Texts style={styles.title}>{title}</Texts>
                </View>

                <View style={styles.rightContent}>
                    {(search && !ShowSearch) &&
                        <TouchableOpacity onPress={() => onShowSearch()}>
                            <Icons name="search" size={20} />
                        </TouchableOpacity>
                    }
                </View>

            </View>

            {(search && ShowSearch) &&
                <View style={styles.contentSearch}>
                    <Searchbar
                        containerStyle={styles.search}
                        searchValue={value}
                        onSearch={onSearch}
                        onClose={onClose} />
                    <TouchableOpacity onPress={() => onShowSearch()} style={{ marginBottom: 8 }}>
                        <Texts style={{ color: 'blue', fontWeight: '600' }}>Cancel</Texts>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export default AppBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF'
    },
    shadow: {
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: '#000000',
        elevation: 3,
    },
    header: {
        height: 45,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    leftContent: {
        flex: .4
    },
    centerContent: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        textTransform: 'capitalize',
        fontWeight: '600',
        fontSize: 16
    },
    rightContent: {
        flex: .4,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    contentSearch: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    search: {
        marginBottom: 8,
        marginRight: 8,
        flex: 1
    }
})