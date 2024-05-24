import { View, Text, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"

const styles = StyleSheet.create({
    body: {
        fontSize: 10, 
        lineHeight: 1.3, 
        paddingTop: 5,
        paddingLeft: 10
        
    }
})

export default function Objective({position, data}){
    const { objective } = data

    return(
        <View style={{ marginTop: 10 }}>
            <Heading name="Objective" position={position} height={10} width={11} img="/icons/aoc/declaration.png"/>
            <View style={{paddingRight: 20}}>
                <Text style={styles.body}>
                    {objective.body}
                </Text>
            </View>
        </View>
    )
}