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

export default function Custom({name, data}){
    const resume = data

    return(
        <View style={{ marginTop: 10 }}>
            <Heading title={resume[name].heading} height={10} width={11} img="/icons/aoc/declaration.png"/>
            <View>
                <Text style={styles.body}>
                    {resume[name].body}
                </Text>
            </View>
        </View>
    )
}