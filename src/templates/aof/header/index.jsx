import { View, Text, Svg, Line, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    header: {
        marginBottom: 10
    },
    firstName: {
        fontSize: 22,
        fontWeight: 'medium',
        textAlign: 'center',
    }
})

export default function Header({data}){
    const { heading } = data

    return(
        <View style={styles.header}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5, marginBottom: 3}}>
                <Text style={styles.firstName}>{heading.firstName+" "}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', fontSize: 14, fontWeight: 'medium'}}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>{heading.surName}</Text>
            </View>
        </View>
    )
}