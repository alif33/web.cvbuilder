
import { View, Text, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"

const styles = StyleSheet.create({
    name: {
        fontSize: 10, 
        paddingTop: 5
    }
})

export default function Reference({ data }){
    const { references } = data

    return(
        <View style={{ marginTop: 10, lineHeight: 1.3 }}>
            <Heading title="Reference" img="/icons/man.png"/>
            {
                references.map((reference, index)=>(
                    <View style={{ paddingLeft: 10 }} key={index}>
                        <Text style={styles.name}>{reference.name}</Text>
                        <Text >{reference.designation}</Text>
                        <Text >{reference.institute}</Text>
                        <Text >{reference.phone}</Text>
                        <Text >{reference.email}</Text>
                    </View>
                ))
            }
        </View>
    )
}