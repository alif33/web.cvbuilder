import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import Heading from "../heading"
import _ from "lodash"

const styles = StyleSheet.create({
    summary: {
        fontSize: 10, 
        lineHeight: 1.3, 
        paddingTop: 5
    }
})

export default function Contacts({name, position, data}){
    const { heading } = data

    return(
        <View>
            <View style={{flexDirection: 'row', fontSize: 10, lineHeight: 1.5, paddingTop: 8}}>
                <View style={{ width: 25, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', rowGap: 8, marginBottom: 3, border: 2, borderColor: '#FFC936', borderRadius: 16, paddingVertical: 10 }}>
                    <Image style={{ width: 12, height: 9 }} src="/icons/aac/email.png"/>
                    <Image style={{ width: 13, height: 10 }} src="/icons/aac/phone.png"/>
                    <Image style={{ width: 14, height: 11 }} src="/icons/aac/address.png"/>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'center', marginBottom: 3, rowGap: 8, paddingVertical: 10 }}>
                    <Text> {heading.email}</Text>
                    <Text> {heading.phone}</Text>
                    <Text> {heading.address}</Text>
                </View>
            </View>
        </View>
    )
}