
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

export default function Reference({ position, data }){
    const { references } = data

    return(
        <View style={{ marginBottom: 10, lineHeight: 1.3, paddingHorizontal: 20 }}>
            <Heading name="Reference" position={position} height={10} width={14} img="/icons/black/reference.png"/>
            {
                references.map((reference, index)=>(
                    <View style={{ lineHeight: 1.4  }} key={index}>
                        <Text style={styles.name}>{reference.name}</Text>
                        <Text style={styles.designation}>{reference.designation}</Text> 
                        <Text>{reference.institute}</Text>
                        {
                            reference.phone && reference.phone?.length>0 && (
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 2 }}>
                                    <Image style={{ width: 13, height: 10 }} src="/icons/black/phone.png"/>
                                    <Text> {reference.phone}</Text>
                                </View>
                            )
                        }
                       
                        {
                            reference.email && reference.email?.length>0 && (
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 2 }}>
                                    <Image style={{ width: 12, height: 9 }} src="/icons/black/email.png"/>
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