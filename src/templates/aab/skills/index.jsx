import { View, Text, Svg, Circle, Line, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"

const styles = StyleSheet.create({
    summary: {
        
    }
})

export default function Skills({ data }){
    const { skills } = data

    return(
        <View style={{ marginTop: 10, lineHeight: 1.3, marginBottom: 5, paddingLeft: 10 }}>
            <Heading title="Skills" height={10} width={10} img="/icons/aoc/skills.png"/>
            <View style={{ paddingRight: 15 }}>
                {
                    skills.map((skill, index)=>(
                        <View style={{ position: 'relative', paddingLeft: 5 }} key={index}>
                            <Text style={{fontSize: 10, lineHeight: 1.3, marginTop: 5, fontWeight: 'medium'}}>
                                {skill.name}
                            </Text>
                            {/* <View style={{backgroundColor: '#D9D9D9', padding: 1, borderRadius: 6}}> */}
                                <View style={{minWidth: '100%', backgroundColor: '#FFFFFF'}}>
                                    <View style={{ maxWidth: `'${skill.percentage}%'`, padding: 2, backgroundColor: '#019F92', minHeight: 5 }}></View>
                                </View>
                            {/* </View> */}
                        </View>
                    ))
                }
            </View>
        </View>
    )
}