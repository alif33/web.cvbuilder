import { View, Text, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"

const styles = StyleSheet.create({
    body: {
        fontSize: 10, 
        lineHeight: 1.3  
    }
})

export default function Declaration({data}){
    const { declaration } = data

    return(
        <View style={{paddingHorizontal: 20 }}>
            <Heading name="Declaration" height={10} width={11} img="/icons/aoc/declaration.png"/>
            <View style={{ paddingTop: 6 }}>
                <Text style={styles.body}>
                    {declaration.body}
                </Text>
            </View>
        </View>
    )
}