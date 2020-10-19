import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Dimensions } from 'react-native'
import { Text, FAB, List } from 'react-native-paper'
import Header from '../component/Header'
import { useSelector, useDispatch } from 'react-redux'
import { addnote, deletenote } from '../reducer/notesApp'

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

function ViewNotes({ navigation }) {
    // const [notes, setNotes] = useState([])
    const notes = useSelector(state => state)
    const dispatch = useDispatch()

    const addNote = note => {
        console.log(note)
        dispatch(addnote(note))
    }

    const deleteNote = note => {
        console.log(note)
        dispatch(deletenote(note))
    }

    //const deleteNote = id =>dispatch(deletenote(id))

     /*const addNotes = note => {
         note.id = notes.length + 1
         setNotes([...notes, note])
     }*/

    return (
        <>
            <Header titleText='Note Taking App' />
            <View style={styles.container}>
                {notes.length === 0 ? (
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>You do not have any Notes</Text>
                    </View>
                ) : (
                        <FlatList
                            data={notes}
                            renderItem={({ item }) => (
                                <List.Item
                                    title={item.note.noteTitle}
                                    description={item.note.noteDescription}
                                    descriptionNumberOfLines={1}
                                    titleStyle={styles.listTitle}
                                    onPress = {()=> deleteNote(item.id)}
                                />
                            )}
                            keyExtractor={item => item.id.toString()}
                        />
                    )}

                <FAB
                    style={styles.fab}
                    small
                    icon='plus'
                    label='New Note'
                    onPress={() => navigation.navigate('AddNotes', {
                        addNote
                    })
                    }
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
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: deviceHeight / 30,
        fontFamily: 'Georgia'
    },
    fab: {
        backgroundColor: '#425a6e',
        position: 'absolute',
        margin: deviceHeight / 20,
        right: 0,
        bottom: deviceHeight / 20
    },
    listTitle: {
        fontSize: 20
    }

})

export default ViewNotes