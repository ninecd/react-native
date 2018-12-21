import React, { Component } from "react";

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableNativeFeedback,
    Alert
} from "react-native";

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

export default class login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: ''
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <Image source={require('./imgs/yasina.png')} style={styles.Icon}></Image>
                <TextInput
                    style = {styles.title}
                    placeholder = {'请输入用户名'}
                />
                <TextInput
                    style = {styles.title}
                    //  密码隐藏
                    secureTextEntry={true}
                    placeholder = {'请输入密码'}
                />
                <TouchableNativeFeedback onPress={() => Alert.alert('请先输入哦！', '用户名或者是密码啊')}>
                    <View style={styles.btn}>
                        <Text style={{color:'#fff'}}>登录</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={styles.toSetting}>
                    <Text>忘记密码</Text>
                    <Text>新用户注册</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    Icon: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginTop:60,
        marginBottom: 50
    },
    title: {
        width:width * 0.8,
        height: 38,
        borderColor: 'lightgrey',
        borderWidth: 1,
        marginBottom: 18,
        borderRadius: 4,
        textAlign:'left',
        alignSelf:'center',
        paddingLeft: 12
    },
    btn: {
        width: width * 0.8,
        height: 38,
        backgroundColor: '#00BB00',
        marginTop: 8,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    toSetting: {
        width: width * 0.8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})