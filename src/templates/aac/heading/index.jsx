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


export default function Heading({ title }){
    // section name
    return(
        <View style={styles.heading}>
            <View style={{ width: '100%'}}>
                <Text style={{color: '#F5CE67'}}>{title}</Text>
            </View>
        </View>
    )
}