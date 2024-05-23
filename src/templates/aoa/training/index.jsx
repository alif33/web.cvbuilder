import { View, Text, Image, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"
import Description from "../description"

const styles = StyleSheet.create({
    item: {
        position: 'relative',
        marginBottom: 5,
        paddingLeft: 10,
        lineHeight: 1.4,
        borderLeft: 1,
        borderLeftColor: '#D9D9D9',
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

export default function Training({data, position}){
    const { trainings } = data

    return(
        <View style={{marginTop: 10}}>
            <Heading title="Training Summary" height={10} width={12} img="/icons/aoc/training.png"/>
            <View style={{ paddingTop: 10, paddingLeft: 10 }}>
            {
                trainings && trainings.map((training, index)=>(
                    <View style={styles.item} key={index}>
                        <View style={{ position: 'absolute', top: 0, left: -4, backgroundColor: '#00B2B6', height: 6, width: 6, borderRadius: 3}}></View>
                        {index!==0 && (<View style={{ position: 'absolute',  height:1, width: 140, backgroundColor: '#D9D9D9', top: -8, left: 10}}></View>)}
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between'}}>
                            <Text style={styles.title}>{training?.name}</Text>
                            <Text style={{ color: '#00B2B6', fontWeight: 'medium' }}>{training.timeline}</Text>
                        </View>
                        <Text>{training?.institutionName}, {training?.location}</Text>
                        {
                            training?.duration && training?.duration?.length>0 && (
                                <View style={{flexDirection: 'row', columnGap: 3}}>
                                    <Image
                                        style={{height: 10, width: 10}}
                                        src="/icons/aoc/duration.png"
                                    />
                                    <Text>{training.duration}</Text>
                                </View>
                            )
                        }
                        
                        
                        {/* {training.description && training.description.length> 0 && (
                            <Description heading="" description={training.description}/>
                        )} */}
                    </View>
                ))
            }
            </View>
        </View>
    )
}