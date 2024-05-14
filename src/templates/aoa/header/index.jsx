import { View, Text, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        color: '#000000'
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold'
    }
})

export default function Header({name, position, data}){
    const { heading } = data

    return(
        <View style={styles.header}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                <Text style={styles.headerTitle}>{heading.firstName+" "}</Text>
                
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{" "+heading.surName}</Text>
            </View>
        </View>
    )
}