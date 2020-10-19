import React, { useState } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { Text, IconButton, TextInput, FAB } from 'react-native-paper'
import Header from '../component/Header'
import LinearGradient from 'react-native-linear-gradient'
import { color } from 'react-native-reanimated'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width; //was written with W not w


function AddNotes({ navigation }) {
    const [noteTitle, setNoteTitle] = useState('')
    const [noteDescription, setNoteDescription] = useState('')

    function onSaveNote() {
        navigation.state.params.addNote({ noteTitle, noteDescription })
        navigation.goBack()
    }

    return (
        <>
            <Header titleText='Add a New Note' 
            />
            <IconButton
                icon="close"
                size={25}
                color='white'
                onPress={() => navigation.goBack()}
                style={styles.iconButton}
            />

            <View style={styles.container}>
                         

                <TextInput
                    label="Note Title..."
                    value={noteTitle}
                    //mode='outlined'
                    onChangeText={setNoteTitle}
                    style={styles.title}
                />
                
                <TextInput
                    label="Note Description..."
                    value={noteDescription}
                    onChangeText={setNoteDescription}
                    //mode="flat"
                    mode='outlined'
                    multiline={true}
                    style={styles.text}
                    scrollEnabled={true}
                    returnKeyLabel='done'
                    blurOnSubmit={true}
                />
                <FAB
                    style={styles.fab}
                    small
                    icon="check"
                    disabled={noteTitle == '' ? true : false}
                    onPress={() => onSaveNote()}
                />
                
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7FEFF',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    iconButton: {
        backgroundColor: '#1c272f',
        position: 'absolute',
        right: 0,
        top: deviceHeight / 30,
        marginBottom: deviceHeight / 45,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'black',
        
    },
    title: {
        fontSize: deviceHeight / 15,
        marginBottom: 16,
        fontFamily: 'Georgia'
    },
    text: {
        height: deviceHeight / 2,
        fontSize: deviceHeight / 35,
        fontFamily: 'Georgia,'
    },
    fab: {
        position: 'absolute',
        marginBottom: deviceHeight / 9,
        marginRight: deviceWidth / 30,
        right: 0,
        bottom: 0,
        backgroundColor: '#4b677e'
    }

})

export default AddNotes