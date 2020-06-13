import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Novbar } from './components/Novbar'
import { THEME } from './theme';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { TodoContext } from './todo/todoContext';
import { ScreenContext } from './context/screen/screenContext';

export const MainLayout = () => {
    const {todoId} = useContext (ScreenContext)
     
    return(  
        <View style={styles.wrapper}>
            <Novbar title='Todo App!' />
            <View style={styles.container}>
              { todoId ? <TodoScreen/> : <MainScreen/> }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: THEME.PADDING_HORIZONTAL,
      paddingVertical: 20,
      flex: 1
    },
    wrapper: {
      flex: 1
    }
})