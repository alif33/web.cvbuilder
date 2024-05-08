import { View, Text, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    header: {
        marginBottom: 10
    },
    headerTitle: {
        fontSize: 22,
        textTransform: "uppercase",
        paddingTop: 5
    }
})

export default function Header({data}){
    const { heading } = data

    return(
        <View style={styles.header}>
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>About Me</Text>
            <Text style={styles.headerTitle}>{heading.firstName+" "+heading.surName}</Text>
        </View>
    )
}