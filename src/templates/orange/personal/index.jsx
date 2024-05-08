import { View, Text, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"

const styles = StyleSheet.create({
    summary: {
        fontSize: 10, 
        lineHeight: 1.3, 
    }
})

export default function Personal({ data }){
    const { personal } = data

    return(
        <View style={{ marginTop: 10, lineHeight: 1.3 }}>
            <Heading title="Personal Information" img="/icons/man.png"/>
            <View style={{ paddingLeft: 10, paddingTop: 10 }}>
                <Text>{'Father\'s Name: '}{personal.fatherName}</Text>
                <Text>{'Mother\'s Name: '}{personal.motherName}</Text>
                <Text>{'National ID: '}{personal.nid}</Text>
                <Text>{'Sex: '}{personal.sex}</Text>
            </View>
        </View>
    )
}