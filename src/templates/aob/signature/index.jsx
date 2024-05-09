/* eslint-disable react/prop-types */
import { View, Text, Image, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    image: {
        height: 50,
        width: 90,
        backgroundColor: "#FF7D00",

    }
})

export default function Signature({ data }){

    const handleResize= img =>{
       const uploadIndex = img.indexOf("upload") + "upload".length
       return img.slice(0, uploadIndex) + "/h_80,w_200" + img.slice(uploadIndex)
    }

    console.log(data);

    return(
        <View style={{ flexDirection: 'col', justifyContent: 'center', marginBottom: 10, marginTop: 30 }}>
            <Image 
                src={handleResize(data.signature.secure_url)}
                style={styles.image}
            />
            <View style={{ borderTop: 2, marginTop: 2, width: 90 }}>
                <Text style={{ textAlign: 'center' }}>{data.heading.firstName}</Text>
            </View>
        </View>
    )
}
