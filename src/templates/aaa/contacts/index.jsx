import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    text: {
        marginTop: 3,
        marginLeft: 2
    }
})

export default function Contacts({data}){
    const { heading } = data
    const navs = ["Email", "Phone", "Address"]
    return(
        <View style={{ paddingLeft: 15 }}>
            <View style={{fontSize: 10, lineHeight: 1.5, paddingTop: 8}}>
                {
                    navs.map((item, index)=>{
                        return(
                            <View key={index} style={{ marginBottom: 3 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <Image style={{ width: 12, height: 9 }} src={`/icons/white/${item.toLowerCase()}.png`}/>
                                    <Text style={styles.text}>{heading[item.toLowerCase()]}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}