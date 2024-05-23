import { View, Text, Svg, Line, StyleSheet } from "@react-pdf/renderer"

export default function Header({config, data}){
    const { heading } = data
    const { header } = config

    return(
        <View style={{marginBottom: 10}}>
            {header?.title && header?.title?.length>0 && (
                <Text style={{fontSize: 12, fontWeight: 'bold'}}>{header.title}</Text>
            )}
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5, marginBottom: 3}}>
                <Text style={{fontSize: 22, fontWeight: 'bold', color: '#FF7D00'}}>{heading.firstName+" "} </Text>
                <Text style={{fontSize: 22, fontWeight: 'medium'}}>{heading.surName}</Text>
            </View>
        </View>
    )
}