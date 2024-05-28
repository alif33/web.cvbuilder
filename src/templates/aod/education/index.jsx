import { View, Text, Image, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"
import Description from "../description"

const styles = StyleSheet.create({
    item: {
        paddingBottom: 4,
        lineHeight: 1.4
    },
    title: {
        fontSize: 10,
        fontWeight: 'bold',
        // color: '#FF7D00'
    },
    employer: {
        fontSize: 10
    },
    description: {
        fontSize: 10
    }
})

export default function Experience({name, position, data}){
    const {educations} = data

    return(
        <View style={{marginTop: 10}}>
            <Heading name={name} position={position} title="Education" height={10} width={12} img="/icons/aoc/education.png"/>
            <View style={{ paddingTop: 10 }}>
            {
                educations && educations.map((edu, index)=>(
                    <View style={styles.item} key={index}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.title}>{edu?.qualification}</Text>
                            <Text style={{ fontWeight: 'medium' }}>{edu.graduationYear}</Text>
                        </View>
                        <Text style={{ fontWeight: 'semibold' }}>{edu?.studyField}</Text>
                        <Text>{edu?.institutionName}</Text>
                        
                        {
                            edu?.result && edu.result?.length >0 && (
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        src="/icons/aoc/result.png"
                                        style={{ height: 12, width: 12, marginRight: 5}}
                                    />
                                    <Text>{edu.result}</Text>
                                </View>
                            )
                        }
                        
                        {edu.description && edu.description.length> 0 && (
                            <Description heading="Duties" description={edu.description}/>
                        )}
                    </View>
                ))
            }
            </View>
        </View>
    )
}