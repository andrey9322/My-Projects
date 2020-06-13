import React from 'react'
import {View, StyleSheet, Platform} from 'react-native'
import { THEME } from '../theme'
import { AppTextBold } from '../components/ui/AppTextBold'

export const Novbar = ({title}) => {
    return(
        <View 
            style={{
                ...styles.novbar,
                ...Platform.select({
                    ios: styles.novbarIos,
                    android: styles.novbarAndroid
                })
            }}
        >
            <AppTextBold style={styles.text}>{title}</AppTextBold>
        </View>
    )
}

const styles = StyleSheet.create ({
    novbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    novbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR
    },
    novbarIos: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 1
    },
    text: {
        color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
        fontSize: 20
    }
})