import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    text: {
        marginTop: 3
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
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', columnGap: 3}}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', width: 16, height: 16, borderRadius: 8}}>
                                        <Image style={{ width: 12, height: 9 }} src={`/icons/black/${item.toLowerCase()}.png`}/>
                                    </View>
                                    <Text style={styles.text}>{heading[item.toLowerCase()]}</Text>
                                    {/* <Text>{item}</Text> */}
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}