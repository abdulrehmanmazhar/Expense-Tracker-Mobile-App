import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import React from 'react'
import { View } from 'react-native'

type Props = {}

function Register({}: Props) {
  return (
    <ScreenWrapper>
        <Typo>Register</Typo>
        <View></View>
    </ScreenWrapper>
  )
}

export default Register