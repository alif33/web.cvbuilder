import { View, Text, Svg, Line, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    header: {
        marginBottom: 10
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FF7D00'
    }
})

export default function Header({data}){
    const { heading } = data

    return(
        <View style={styles.header}>
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>About Me</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5, marginBottom: 3}}>
                <Text style={styles.headerTitle}>{heading.firstName+" "}</Text>
                <Text style={{fontSize: 22, fontWeight: 'medium'}}>{heading.surName}</Text>
            </View>
            <Svg width={572} height={1} viewBox="0 0 572 1">
                <Line x1={0} y1={0.5} x2={180} y2={0.5} stroke="#FF7D00" />
                <Line x1={180} y1={0.5} x2={330} y2={0.5} stroke="black" />
            </Svg>
        </View>
    )
}