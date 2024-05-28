import { View, Text, Svg, Circle, Line, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"

const styles = StyleSheet.create({
    // summary: {
    // }
})

export default function Language({ position, data }){
    const { languages } = data

    return(
        <View style={{ marginBottom: 15, lineHeight: 1.3, paddingHorizontal: 20 }}>
            <Heading name="Languages" position={position} height={10} width={10} img="/icons/aoc/language.png"/>
            <View style={{ paddingTop: 6 }}>
                {
                    languages.map((lang, index)=>(
                        <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 5, marginTop: 4 }} key={index}>
                            <Text style={{fontSize: 10, fontWeight: 'semibold'}}>{lang.level}:</Text>
                            <Text style={{fontSize: 10, fontWeight: 'medium'}}>
                                {lang.name}
                            </Text>
                        </View>
                    ))
                }
            </View>
            
        </View>
    )
}