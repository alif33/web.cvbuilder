import { View, Text, Image, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"
import Description from "../description"

const styles = StyleSheet.create({
    description: {
        fontSize: 10
    }
})

export default function Experience({position, data}){
    const {educations} = data

    return(
        <View style={{marginTop: 10 }}>
            <Heading name="Education" position={position} height={10} width={12} img="/icons/aoc/education.png"/>
            <View style={{ paddingTop: 10, paddingLeft: 10 }}>
            {
                educations && educations.map((edu, index)=>(
                    <View style={{ position: 'relative', marginBottom: position==='left'? 7: 15, lineHeight: 1.4, borderLeft: position==='left'? 0: 1, borderLeftColor: '#D9D9D9', paddingRight: 20, paddingLeft: position==='left'? 5: 10, marginLeft: position==='left'? 0: 10 }} key={index}>
                        {position!=='left' && ( <View style={{ position: 'absolute', top: 0, left: -4, backgroundColor: "#54001C", height: 6, width: 6, borderRadius: 3}}></View>)}
                        {index!==0 && position!=='left' && (<View style={{ position: 'absolute',  height:1, width: 315, backgroundColor: '#D9D9D9', top: -8, left: 10}}></View>)}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', columnGap: 10, rowGap: 10}}>
                            <Text style={{fontSize: 10, fontWeight: 'bold', width: '90%' }}>{edu?.qualification}</Text>
                            <Text style={{ fontWeight: 'medium' }}>{edu.graduationYear}</Text>
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
                    </View>
                ))
            }
            </View>
        </View>
    )
}