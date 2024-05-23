import { View, Text, Image, Svg, Line, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    header: {
        marginBottom: 10
    },
    firstName: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default function Header({data}){
    const { heading } = data
    const navs = ["Email", "Phone", "Address"]

    return(
        <View style={styles.header}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5, marginBottom: 3}}>
                <Text style={styles.firstName}>{heading.firstName+" "}</Text>
                <Text style={{fontSize: 22, fontWeight: 'medium'}}>{heading.surName}</Text>
            </View>
            <View style={{ fontSize: 10, marginTop: 15 }}>
                {
                    navs.map((item, index)=>{
                        return(
                            <View key={index} style={{ marginBottom: 3 }}>
                                <View style={{ flexDirection: 'row', columnGap: 5 }}>
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