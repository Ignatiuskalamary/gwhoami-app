import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { styles } from './styles';
import Button from '../../../components/Button';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signin = () =>
{
    const onSigIn = () =>
    {
        console.log('Hello');
    }
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign In" />

            <Input label="E-mail" placeholder="example@gmail.com" />
            <Input isPassword label="Password" placeholder="*******" />

            <Button style={styles.button} title="Sign In" />

            <Seperator text="Or sign in with" />

            <GoogleLogin />

            <Text style={styles.footerText}>
                Don't have an account?
                <Text onPress={onSigIn} style={styles.footerLink}>
                    Sign Up
                </Text>
            </Text>
        </View>
    )
};

export default Signin;