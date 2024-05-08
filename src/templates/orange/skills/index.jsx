import { View, Text, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"

const styles = StyleSheet.create({
    summary: {
        fontSize: 10, 
        lineHeight: 1.3, 
        paddingTop: 5
    }
})

export default function Skills({ data }){
    const { skills } = data

    return(
        <View style={{ marginTop: 10, lineHeight: 1.3 }}>
            <Heading title="Skills" img="/icons/man.png"/>
            {
                skills.map((skill, index)=>(
                    <View style={{ paddingLeft: 10 }} key={index}>
                        <Text style={styles.summary}>
                            {skill.name}
                        </Text>
                    </View>
                ))
            }
        </View>
    )
}