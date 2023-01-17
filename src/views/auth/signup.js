import { View, Text } from 'react-native'
import React from 'react'

const Signup = () => {
    return (
        <View>
            <Text>Signup</Text>
        </View>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})


export default connect(mapStateToProps, {
    doLogin,
})(Signup)