import { View, Text, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    header: {
        marginBottom: 10
    },
    headerTitle: {
        fontSize: 22,
        textTransform: 'uppercase'
        // fontWeight: 'bold',
        // color: '#FF7D00'
    }
})

export default function Header({data}){
    const { heading } = data

    return(
        <View style={styles.header}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                <Text style={styles.headerTitle}>{heading.firstName+" "}</Text>
                
                <Text style={{ fontSize: 22 }}>{" "+heading.surName}</Text>
            </View>
        </View>
    )
}