import { View, Text, Svg, Circle, Line, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"

const styles = StyleSheet.create({
    summary: {
        
    }
})

export default function Skills({ position, data }){
    const { skills } = data

    return(
        <View style={{ marginTop: 10, lineHeight: 1.3, marginBottom: 15, paddingHorizontal: 20 }}>
            <Heading name="Skills" position={position} height={10} width={10} img="/icons/aoc/skills.png"/>
            <View style={{ paddingTop: 6 }}>
                {
                    skills.map((skill, index)=>(
                        <View key={index}>
                            <Text style={{fontSize: 10, lineHeight: 1.3, marginTop: 5, fontWeight: 'medium'}}>
                                {skill.name}
                            </Text>
                            <View style={{backgroundColor: '#FFFFFF', padding: 1, width: 200}}>
                                <View style={{ maxWidth: `'${skill.percentage}%'`, padding: 2, backgroundColor: '#1F3760', minHeight: 5 }}></View>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}