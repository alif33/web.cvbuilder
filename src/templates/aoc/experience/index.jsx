import { View, Text, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"
import Description from "../description"

const styles = StyleSheet.create({
    item: {
        position: 'relative',
        marginBottom: 10,
        paddingLeft: 10,
        lineHeight: 1.4,
        borderLeft: 1,
        borderLeftColor: '#D9D9D9'
    },
    title: {
        fontSize: 10,
        fontWeight: 'bold'
    },

    description: {
        fontSize: 10
    }
})

export default function Experience({data}){
    const {experiences} = data

    return(
        <View style={{marginTop: 10}}>
            <Heading title="Experience" height={10} width={10} img="/icons/aoc/experience.png"/>
            <View style={{ paddingTop: 10, paddingLeft: 10, marginBottom: 10 }}>
            {
                experiences && experiences.map((ex, index)=>(
                    <View style={styles.item} key={index}>
                        <View style={{ position: 'absolute', top: 0, left: -4, backgroundColor: "#FF7D00", height: 6, width: 6, borderRadius: 3}}></View>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{ color: '#FF7D00', fontWeight: 'bold' }}>{ex?.title}</Text>
                            <Text style={{ color: '#FF7D00', fontWeight: 'semibold'}}>{ex.duration}</Text>
                        </View>
                        <Text style={{fontSize: 10, marginBottom: 5, fontWeight: 'semibold'}}>{ex?.employer}, {ex?.location}</Text>
                        <Description heading="" description={ex.description}/>
                    </View>
                ))
            }
            </View>
        </View>
    )
}