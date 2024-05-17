import { View, Text, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"

const styles = StyleSheet.create({
    summary: {
        fontSize: 10, 
        lineHeight: 1.3, 
        paddingTop: 5,
        paddingLeft: 10
        
    }
})

export default function Summary({data}){
    const { summary } = data

    return(
        <View>
            <Heading title="Summary" img="/icons/man.png"/>
            <View>
                <Text style={styles.summary}>
                    {summary.body}
                </Text>
            </View>
        </View>
    )
}