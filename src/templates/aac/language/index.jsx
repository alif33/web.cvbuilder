import { View, Text, Svg, Circle, Line, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"

const styles = StyleSheet.create({
    // summary: {
    // }
})

export default function Language({ data }){
    const { languages } = data

    return(
        <View style={{ marginTop: 10, lineHeight: 1.3, marginBottom: 5 }}>
            <Heading title="Languages" height={10} width={10} img="/icons/aoc/language.png"/>
            <View>
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