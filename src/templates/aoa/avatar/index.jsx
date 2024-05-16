/* eslint-disable react/prop-types */
import { View, Image, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    image: {
        height: 90,
        width: 90,
        borderRadius: 10,
        backgroundColor: "#CBCACB",
        marginLeft: 30,
        border: 1,
        borderColor: '#000000'
    }
})

export default function Avatar({ data }){

    const handleResize= img =>{
       const uploadIndex = img.indexOf("upload") + "upload".length
       return img.slice(0, uploadIndex) + "/c_thumb,g_face,h_200,w_200" + img.slice(uploadIndex)
    }

    return(
        <View style={{ flexDirection: 'row', marginBottom: 25}}>
            {data?.image && data?.image?.secure_url && (
                <Image 
                    src={data.image.secure_url}
                    style={styles.image}
                />
            )}
        </View>
    )
}
