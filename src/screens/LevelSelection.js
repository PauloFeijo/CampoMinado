import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native'

ButtonLevel = props => {
    return (
        <TouchableOpacity style={[styles.button, props.style]}
            onPress={() => props.onPress(props.level)}>
            <Text style={styles.buttonLabel}>{props.label}</Text>
        </TouchableOpacity>
    )
}

LevelSelect = props => {
    return (
        <Modal onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType='slide'
            transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>

                    <Text style={styles.title}>Selecione o Nível</Text>

                    <ButtonLevel style={styles.bgEasy} level={0.1}
                        label={'Fácil'} onPress={props.onLevelSelected} />

                    <ButtonLevel style={styles.bgNormal} level={0.2}
                        label={'Intermediário'} onPress={props.onLevelSelected} />

                    <ButtonLevel style={styles.bgHard} level={0.3}
                        label={'Difícil'} onPress={props.onLevelSelected} />

                </View>
            </View>
        </Modal>
    )
}

export default LevelSelect

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal: {
        backgroundColor: '#2765f7'
    },
    bgHard: {
        backgroundColor: '#e26337'
    }
})