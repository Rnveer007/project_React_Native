import { Text, View, StyleSheet } from "react-native"

function about() {
    return (
        <View style={style.container}>
            <Text style={style.text}> About Screen </Text>
        </View>
    )
}

export default about


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: "#fff",
        fontSize: 20,
    }
})