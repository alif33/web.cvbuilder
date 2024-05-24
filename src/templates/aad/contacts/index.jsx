import { View, Text, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    text: {
        marginTop: 3,
        marginLeft: 10,
        textAlign: 'center'
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
                                <View style={{ flexDirection: 'column', alignItems: 'center', columnGap: 5}}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', width: 18, height: 18, borderRadius: 9}}>
                                        <Image style={{ width: 12, height: 9 }} src={`/icons/black/${item.toLowerCase()}.png`}/>
                                    </View>
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