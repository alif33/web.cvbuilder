import { View, Text, StyleSheet } from "@react-pdf/renderer";
import Heading from "../heading"

const styles = StyleSheet.create({
    summary: {
        fontSize: 10, 
        lineHeight: 1.3, 
        paddingTop: 5
    }
})


export default function Contacts({data}){
    const { heading } = data
    return(
        <View>
            <Heading title="Contact Me" img="/icons/man.png"/>
            <View style={{fontSize: 10, lineHeight: 1.5, paddingTop: 8, paddingLeft: 10}}>
                <Text>Email: {heading.email}</Text>
                <Text>Phone: {heading.phone}</Text>
                <Text>Address: Ponghagra, sadar mymensingh</Text>
            </View>
        </View>
    )
}