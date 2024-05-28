import { View, Text, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"

const styles = StyleSheet.create({
    body: {
        fontSize: 10, 
        lineHeight: 1.3 
    }
})

export default function Objective({position, data}){
    const { objective } = data

    return(
        <View style={{ marginBottom: 10, paddingHorizontal: 20 }}>
            <Heading name="Objective" position={position} height={10} width={11} img={`/icons/${position==='left'? 'white': 'black'}/objective.png`}/>
            <View style={{paddingTop: 6}}>
                <Text style={styles.body}>
                    {objective.body}
                </Text>
            </View>
        </View>
    )
}