import { View, Text, Svg, Line, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    header: {
        marginBottom: 10,
        paddingTop: 30
    },
    firstName: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default function Header({data}){
    const { heading } = data

    return(
        <View style={styles.header}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5, marginBottom: 3}}>
                <Text style={styles.firstName}>{heading.firstName+" "}</Text>
                <Text style={{fontSize: 22, fontWeight: 'medium'}}>{heading.surName}</Text>
            </View>
        </View>
    )
}