import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    text: {
        marginTop: 3,
        marginLeft: 10
    }
})

export default function Contacts({data}){
    const { heading } = data
    const navs = ["Email", "Phone", "Address"]
    return(
        <View>
            <View style={{fontSize: 10, lineHeight: 1.5, paddingTop: 8}}>
                {
                    navs.map((item, index)=>{
                        return(
                            <View key={index} style={{ marginBottom: 3 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 5, backgroundColor: '#54001C'}}>
                                    <View style={{ justifyContent: 'center', height: '100%', paddingVertical: 2, paddingHorizontal: 6, backgroundColor: '#FFFFFF'}}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#5D2A3B', width: 16, height: 16, borderRadius: 8}}>
                                            <Image style={{ width: 12, height: 9 }} src={`/icons/white/${item.toLowerCase()}.png`}/>
                                        </View>
                                    </View>
                                    <Text>{item}</Text>
                                </View>
                                <Text style={styles.text}>{heading[item.toLowerCase()]}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}