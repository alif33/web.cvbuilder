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
        backgroundColor: "#F5F5F5",
        fontSize: 12,
        fontWeight: 'bold',
        borderRadius: 15,
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
        backgroundColor: "#FF7D00"
    }
})


export default function Heading({ title, height, width, img }){
    return(
        <View style={styles.heading}>
            <View style={styles.iconContainer}>
                <Image src={img} style={{height:height? height: 10, width: width? width: 10 }}/>
            </View>
            <Text>{title}</Text>
        </View>
    )
}