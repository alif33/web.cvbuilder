import { View, Text, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    header: {
        position: 'relative',
        marginLeft: 8,
        paddingLeft: 20,
        paddingVertical: 20,
        backgroundColor: '#264572',
        color: '#FFFFFF'
    },
    headerTitle: {
        fontSize: 22,
        textTransform: 'uppercase'
        // fontWeight: 'bold',
        // color: '#FF7D00'
    }
})

export default function Header({name, position, data}){
    const { heading } = data

    return(
        <View style={styles.header}>
            <View style={{ minHeight: 40, minWidth: 30, position: 'absolute', top: 0, left: '-20px', backgroundColor: '#264572'}}></View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                <Text style={styles.headerTitle}>{heading.firstName+" "}</Text>
                
                <Text style={{ fontSize: 22 }}>{" "+heading.surName}</Text>
            </View>
        </View>
    )
}