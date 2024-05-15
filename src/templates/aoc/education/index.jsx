import { View, Text, Image, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"
import Description from "../description"

const styles = StyleSheet.create({
    item: {
        position: 'relative',
        marginBottom: 15,
        paddingLeft: 10,
        lineHeight: 1.4,
        borderLeft: 1,
        borderLeftColor: '#D9D9D9',
    },
    title: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#FF7D00'
    },
    employer: {
        fontSize: 10
    },
    description: {
        fontSize: 10
    }
})

export default function Experience({data}){
    const {educations} = data

    return(
        <View style={{marginTop: 10}}>
            <Heading title="Education" height={10} width={12} img="/icons/aoc/education.png"/>
            <View style={{ paddingTop: 10, paddingLeft: 10 }}>
            {
                educations && educations.map((edu, index)=>(
                    <View style={styles.item} key={index}>
                        <View style={{ position: 'absolute', top: 0, left: -4, backgroundColor: "#FF7D00", height: 6, width: 6, borderRadius: 3}}></View>
                        {index!==0 && (<View style={{ position: 'absolute',  height:1, width: 330, backgroundColor: '#D9D9D9', top: -8, left: 10}}></View>)}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={styles.title}>{edu?.qualification}</Text>
                            <Text style={{ color: '#FF7D00', fontWeight: 'medium' }}>{edu.graduationYear}</Text>
                        </View>
                        <Text style={{ fontWeight: 'semibold' }}>{edu?.studyField}</Text>
                        <Text>{edu?.institutionName},</Text>
                        <Text>{edu?.location}</Text>
                        {
                            edu?.result && edu?.result?.length>0 && (
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        src="/icons/aoc/result.png"
                                        style={{ height: 12, width: 12, marginRight: 5}}
                                    />
                                    <Text>{edu?.result}</Text>
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