/* eslint-disable react/prop-types */
import { View, Image, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    image: {
        height: 125,
        width: 125,
        borderRadius: 70,
        backgroundColor: "#FFFFFF",

    }
})

export default function Avatar({ data }){

    const handleResize= img =>{
       const uploadIndex = img.indexOf("upload") + "upload".length
       return img.slice(0, uploadIndex) + "/c_thumb,g_face,h_200,w_200" + img.slice(uploadIndex)
    }

    return(
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 40}}>
            {data?.image && data?.image?.secure_url && (
                <Image 
                    src={handleResize(data.image.secure_url)}
                    style={styles.image}
                />
            )}
        </View>
    )
}
