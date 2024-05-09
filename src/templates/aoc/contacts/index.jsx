import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";
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
                <View style={{ flexDirection: 'row', marginBottom: 3, alignItems: 'center'}}>
                    <Image style={{ width: 12, height: 9 }} src="/icons/aoc/email.png"/>
                    <Text> {heading.email}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 3}}>
                    <Image style={{ width: 13, height: 10 }} src="/icons/aoc/phone.png"/>
                    <Text> {heading.phone}</Text>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Image style={{ width: 14, height: 11 }} src="/icons/aoc/address.png"/>
                    <Text> {heading.address}</Text>
                </View>
            </View>
        </View>
    )
}