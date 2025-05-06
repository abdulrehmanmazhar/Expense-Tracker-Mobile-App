import BackButton from '@/components/BackButton'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import Input from '@/components/ui/Input'
import { colors, spacingX, spacingY } from '@/constants/theme'
import React, { useRef, useState } from 'react'
import { Alert, Pressable, StyleSheet, View } from 'react-native'
import * as Icons from 'phosphor-react-native'
import { verticalScale } from '@/utils/styling'
import Button from '@/components/ui/Button'
import { useRouter } from 'expo-router'

type Props = {}

function Login({}: Props) {
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter()

    const handleSubmit = async () => {
        if(!emailRef.current || !passwordRef.current){
            return Alert.alert("Sign In", "Please fill all the field")
        }
        setIsLoading(true);
        setTimeout(()=>setIsLoading(false), 2000)
    };
  return (
    <ScreenWrapper>
        {/* <Typo>Login</Typo> */}
        <View style={styles.container}>
            <BackButton iconSize={28}/>
            <View style={{gap: 5, marginTop: spacingY._20}}>
                <Typo size={30} fontWeight={'800'}>Hey,</Typo>
                <Typo size={30} fontWeight={'800'}>Welcome Back</Typo>
            </View>

            <View style={styles.form}>
                <Typo size={16} color={colors.textLighter}>
                    Login now to track all your expenses
                </Typo>
                <Input onChangeText={(value)=>emailRef.current = value} placeholder='Enter your Email' icon={<Icons.Envelope size={verticalScale(25)} color={colors.neutral300} weight='fill'/>}/>
                <Input secureTextEntry onChangeText={(value)=>passwordRef.current = value} placeholder='Enter your Password' icon={<Icons.Lock size={verticalScale(25)} color={colors.neutral300} weight='fill'/>}/>
                <Typo size={14} color={colors.text} style={{alignSelf: 'flex-end'}}>Forgot Password ?</Typo>
                <Button onPress={handleSubmit} loading={isLoading}>
                    <Typo fontWeight={'700'} color={colors.black} size={21}>Sign In</Typo>
                </Button>
            </View>

            <View style={styles.footer}>
                <Typo size={15}>Don't have any account?</Typo>
                <Pressable onPress={()=>router.push('/(auth)/register')}>
                    <Typo size={15} fontWeight={'700'} color={colors.primary}>Sign Up</Typo>
                </Pressable>
            </View>

        </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingX._20
    },
    form: {
        gap: spacingY._20
    },
    footer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    footerText: {
        textAlign: 'center',
        color: colors.text,
        fontSize: verticalScale(15)
    }
})