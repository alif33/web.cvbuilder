import { View, Text, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"

const styles = StyleSheet.create({
    summary: {
        fontSize: 10, 
        lineHeight: 1.3, 
        paddingTop: 5
    }
})

export default function Skills({ name, position, data }){
    const { skills } = data

    return(
        <View style={{ marginTop: 10, lineHeight: 1.3 }}>
            <Heading name={name} position={position} title="Skills" height={10} width={10} img="/icons/aoc/skills.png"/>
            {
                skills.map((skill, index)=>(
                    <View key={index}>
                        <Text style={styles.summary}>
                            {skill.name}
                        </Text>
                    </View>
                ))
            }
        </View>
    )
}