import { View, Text } from 'react-native'
import React from 'react'

const Signin = () => {
    return (
        <View>
            <Text>Signin</Text>
        </View>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})


export default connect(mapStateToProps, {
    doLogin,
})(Signin)