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
    employer: {
        fontSize: 10
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
            <View style={{ paddingTop: 10 }}>
            {
                experiences && experiences.map((e, index)=>(
                    <View style={styles.item} key={index}>
                        <Text style={styles.title}>{e?.title}</Text>
                        <Text style={styles.employer}>{e?.employer}, {e?.city}</Text>
                        <Description heading="Duties" description={e.description}/>
                    </View>
                ))
            }
            </View>
        </View>
    )
}