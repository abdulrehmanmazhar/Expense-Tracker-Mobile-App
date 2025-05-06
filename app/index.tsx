import { colors } from '@/constants/theme'
import { useRouter } from 'expo-router'
import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

type Props = {}

function index({}: Props) {
  const router = useRouter();

  useEffect(()=>{
    setTimeout(()=>{
      router.push('/(auth)/welcome')
    },2000)
  },[])
  return (
    <View style={styles.container}>
        <Image
        style={styles.logo}
        resizeMode='contain'
        source={require("../assets/images/expense.png")}
        // src='https://elements-resized.envatousercontent.com/elements-video-cover-images/f6c4c1a1-abbc-4990-be45-30fa92f3391a/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=d62a5f593d7fb4f771b84e28b4cd39a1d3e6b5d1650771b3baf9d1571d8b7a54'
        />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.neutral900
    },
    logo: {
      aspectRatio: 1,
      height: "60%"
    }
})