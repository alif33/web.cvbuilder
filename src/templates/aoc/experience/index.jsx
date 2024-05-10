import { View, Text, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"
import Description from "../description"

const styles = StyleSheet.create({
    item: {
        paddingBottom: 4
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
            <View style={{ paddingTop: 10, paddingLeft: 10, marginBottom: 20 }}>
            {
                experiences && experiences.map((ex, index)=>(
                    <View style={{paddingBottom: 4}} key={index}>
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