import React, { useState } from 'react';
import { Text, Image, View, Pressable } from 'react-native';
import { styles } from './styles';
import Button from '../../../components/Button';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signup = () =>
{
    const [checked, setChecked] = useState(false);

    const onSigIn = () =>
    {
        console.log('Hello');
    }
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign Up" />

            <Input label="Name" placeholder="John" />
            <Input label="E-mail" placeholder="example@gmail.com" />
            <Input isPassword label="Password" placeholder="*******" />

            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText} >I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy </Text></Text>
            </View>

            <Button style={styles.button} title="Sign Up" />

            <Seperator text="Or sign up with" />

            <GoogleLogin />

            <Text style={styles.footerText}>
                Already have as account?
                <Text onPress={onSigIn} style={styles.footerLink}>
                    Sign In
                </Text>
            </Text>
        </View>
    )
};

export default Signup;