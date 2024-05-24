import { View, Text, Svg, Circle, Line, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"

const styles = StyleSheet.create({
    summary: {
        
    }
})

export default function Skills({ position, data }){
    const { skills } = data

    return(
        <View style={{ marginTop: 10, lineHeight: 1.3, marginBottom: 5, paddingLeft: 10 }}>
            <Heading name="Skills" position={position} height={10} width={10} img="/icons/aoc/skills.png"/>
            <View style={{ paddingRight: 15 }}>
                {
                    skills.map((skill, index)=>(
                        <View style={{position: 'relative', paddingLeft: 5, marginLeft: 2 }} key={index}>
                            <Text style={{fontSize: 10, lineHeight: 1.3, marginTop: 5, fontWeight: 'medium'}}>
                                {skill.name}
                            </Text>
                            <View style={{minWidth: '100%', backgroundColor: '#D5D9D7'}}>
                                <View style={{ maxWidth: `'${skill.percentage}%'`, backgroundColor: '#F1A364', minHeight: 5 }}></View>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}