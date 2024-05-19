import { View, Text, Svg, Circle, Line, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"

const styles = StyleSheet.create({
    summary: {
        
    }
})

export default function Skills({ data }){
    const { skills } = data

    return(
        <View style={{ marginTop: 10, lineHeight: 1.3, marginBottom: 5, paddingLeft: 5 }}>
            <Heading title="Skills" height={10} width={10} img="/icons/aoc/skills.png"/>
            <View style={{ paddingRight: 15 }}>
                {
                    skills.map((skill, index)=>(
                        <View style={{position: 'relative', paddingLeft: 15, marginLeft: 2 }} key={index}>
                            <Text style={{fontSize: 10, lineHeight: 1.3, marginTop: 5, fontWeight: 'medium'}}>
                                {skill.name}
                            </Text>
                            <View style={{backgroundColor: '#D9D9D9', padding: 1, borderRadius: 6}}>
                                <View style={{minWidth: '100%', backgroundColor: '#D9D9D9', border: '2px solid #FFFFFF', borderRadius: 4}}>
                                    <View style={{ maxWidth: `'${skill.percentage}%'`, padding: 2, backgroundColor: '#54001C', minHeight: 5, borderRadius: 4 }}></View>
                                </View>
                            </View>
                            {/* Line */}
                            <View style={{position: 'absolute', height: '70%', top: 8, left: 3}}>
                                <Svg width={8} height={40} viewBox="0 0 8 40">
                                    <Circle cx={6} cy={6} r={6} fill="#FFFFFF" />
                                    <Line x1={5.0} y1={16} x2={5.0} y2={40} stroke="#FFFFFF" strokeWidth={0.8} />
                                </Svg>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}