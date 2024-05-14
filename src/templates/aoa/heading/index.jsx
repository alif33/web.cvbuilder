/* eslint-disable react/prop-types */
import {
    View,  
    Text,
    Image,
    StyleSheet 
} from "@react-pdf/renderer"

const styles = StyleSheet.create({
    heading: {
        justifyContent: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: "#F5F5F5",
        fontSize: 12,
        fontWeight: 'bold',
        borderRadius: 15,
        // paddingBottom: 3,
        // paddingVertical: 2,
        // paddingLeft: 3,
        gap: 3
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        borderRadius: 10,
        // backgroundColor: "#FF7D00"
    },
    
})


export default function Heading({ name, position, title, height, width, img }){
    // section name
    return(
        <View style={styles.heading}>
            {
                position==='left' ?(
                    <View style={{ width: '100%'}}>
                        <Text style={{borderBottomWidth: 1, borderBottomColor: '#DDDEDF', paddingBottom: 4, }}>{title}</Text>
                    </View>
                ): (
                    <View style={{width:'90%'}}>
                        <Text style={{borderBottomWidth: 1, borderBottomColor: '#FFFFFF', paddingBottom: 4, }}>{title}</Text>
                    </View>
                )
            }
        </View>
    )
}