import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Appbar, Title } from 'react-native-paper'
import LinearGradient from 'react-native-linear-gradient'



function Header({ titleText }) {
    return (
        <Appbar.Header style={styles.headerContainer}>
            <View style={styles.container}>
                <Title style={styles.title}>{titleText}</Title>  
            </View>
        </Appbar.Header>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#55748d'
       
    },
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontFamily: 'Georgia'
    }
})

export default Header