import { View, Text, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"
import Description from "../description"

const styles = StyleSheet.create({
    item: {
        paddingBottom: 4
    },
    title: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#00B2B6'
    },
    employer: {
        fontSize: 10
    },
    description: {
        fontSize: 10
    }
})

export default function Experience({name, position, data}){
    const { xperiences } = data

    return(
        <View>
            <View>
            {
                xperiences && xperiences.map((e, index)=>(
                    <View style={styles.item} key={index}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.title}>{e?.title}</Text>
                            <Text>{e.duration}</Text>
                        </View>
                        <Text style={styles.employer}>{e?.employer}{e?.location && ", "+e?.location}</Text>
                        <View style={{marginTop: 6}}>
                            <Description heading="" description={e.description}/>
                        </View>
                    </View>
                ))
            }
            </View>
        </View>
    )
}