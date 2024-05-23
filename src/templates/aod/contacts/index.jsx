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
            <Heading name={name} position={position} title="Contact Me" img="/icons/man.png"/>
            <View style={{fontSize: 10, lineHeight: 1.5, paddingTop: 8}}>
                <View style={{ flexDirection: 'row', marginBottom: 3, alignItems: 'center'}}>
                    <Image style={{ width: 12, height: 9 }} src={`/icons/${position==='left'?'white': 'black'}/email.png`}/>
                    <Text> {heading.email}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 3}}>
                    <Image style={{ width: 13, height: 10 }} src={`/icons/${position==='left'?'white': 'black'}/phone.png`}/>
                    <Text> {heading.phone}</Text>
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <Image style={{ width: 14, height: 11 }} src={`/icons/${position==='left'?'white': 'black'}/address.png`}/>
                    <Text> {heading.address}</Text>
                </View>
            </View>
        </View>
    )
}