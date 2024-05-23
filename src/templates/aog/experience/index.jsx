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
        borderLeftColor: '#D9D9D9',
        paddingRight: 20,
        marginLeft: 10
    },
    title: {
        fontSize: 10,
        fontWeight: 'bold'
    },

    description: {
        fontSize: 10
    }
})

export default function Experience({position, data}){
    const {experiences} = data

    return(
        <View style={{marginTop: 10}}>
            <Heading name="Experience" position={position} height={10} width={10} img={`/icons/${position==='left'? 'white': 'black'}/experience.png`}/>
            <View style={{ paddingTop: 10, marginBottom: 10 }}>
            {
                experiences && experiences.map((ex, index)=>(
                    <View style={styles.item} key={index}>
                        <View style={{ position: 'absolute', top: 0, left: -4, backgroundColor: "#54001C", height: 6, width: 6, borderRadius: 3}}></View>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{ fontWeight: 'bold' }}>{ex?.title}</Text>
                            <Text style={{ fontWeight: 'semibold'}}>{ex.duration}</Text>
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