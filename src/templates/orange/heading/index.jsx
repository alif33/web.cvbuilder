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
    },
    icon: {
        height: 10,
        width: 10
    }
})


export default function Heading({ title, img }){
    return(
        <View style={styles.heading}>
            <View style={styles.iconContainer}>
                <Image src={img} style={styles.icon}/>
            </View>
            <Text>{title}</Text>
        </View>
    )
}