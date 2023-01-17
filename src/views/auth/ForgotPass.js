import { View, Text } from 'react-native'
import React from 'react'

const ForgotPass = () => {
    return (
        <View>
            <Text>ForgotPass</Text>
        </View>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})


export default connect(mapStateToProps, {
    doLogin,
})(ForgotPass)