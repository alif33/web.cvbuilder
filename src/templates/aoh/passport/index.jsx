/* eslint-disable react/prop-types */
import { View, Text, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"

const styles = StyleSheet.create({
    summary: {
        fontSize: 10, 
        lineHeight: 1.3, 
    }
})

export default function Passport({ position, data }){
    const { passport } = data

    return(
        <View style={{ paddingTop: 10, lineHeight: 1.3, paddingLeft: 10}}>
            <Heading name="Passport Details" position={position} height={10} width={12} img={`/icons/${position==='left'? 'white': 'black'}/passport.png`}/>
            <View style={{ paddingLeft: 10, paddingTop: 5, lineHeight: 1.4 }}>
                <Text>{'Passport No: '}{passport.number}</Text>
                <Text>{'Issue Date: '}{passport.issueDate}</Text>
                <Text>{'Expiry Date: '}{passport.expiryDate}</Text>
            </View>
        </View>
    )
}

