/* eslint-disable react/prop-types */
import { View, Image, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    image: {
        height: 125,
        width: 125,
        borderRadius: 70,
        backgroundColor: "#FF7D00"
    }
})

export default function Avatar({ data }){
    return(
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 40}}>
            <Image 
                src={data.image.secure_url}
                style={styles.image}
            />
        </View>
    )
}