
import { View, Text, StyleSheet, Image } from "@react-pdf/renderer"
import Heading from "../heading"

const styles = StyleSheet.create({
    name: {
        fontSize: 10, 
        paddingTop: 5,
        fontWeight: 'semibold'
    },
    designation: {
        fontWeight: 'medium'
    }
})

export default function Reference({ name, position, data }){
    const { references } = data

    return(
        <View style={{ marginTop: 10, lineHeight: 1.3 }}>
            <Heading name={name} position={position} title="Reference" height={10} width={14} img="/icons/aoc/reference.png"/>
            {
                references.map((reference, index)=>(
                    <View style={{ lineHeight: 1.4 }} key={index}>
                        <Text style={styles.name}>{reference.name}</Text>
                        <Text style={styles.designation}>{reference.designation}</Text> 
                        <Text>{reference.institute}</Text>
                        {
                            reference.phone && reference.phone?.length>0 && (
                                <View style={{ flexDirection: 'row', paddingTop: 2 }}>
                                    <Image style={{ width: 13, height: 10 }} src={`/icons/${position==='left'? 'white': 'black'}/phone.png`}/>
                                    <Text> {reference.phone}</Text>
                                </View>
                            )
                        }
                       
                        {
                            reference.email && reference.email?.length>0 && (
                                <View style={{ flexDirection: 'row', paddingTop: 2 }}>
                                    <Image style={{ width: 12, height: 9 }} src={`/icons/${position==='left'? 'white': 'black'}/email.png`}/>
                                    <Text> {reference.email}</Text>
                                </View>
                            )
                        }
                    </View>
                ))
            }
        </View>
    )
}