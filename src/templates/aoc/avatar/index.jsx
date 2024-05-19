/* eslint-disable react/prop-types */
import { View, Image, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    image: {
        paddingTop: 6,
        height: 125,
        width: 125,
        borderRadius: 70,
        backgroundColor: "#FF7D00",

    }
})

export default function Avatar({ data }){

    const handleResize= img =>{
       const uploadIndex = img.indexOf("upload") + "upload".length
       return img.slice(0, uploadIndex) + `/c_thumb,g_face,h_${data.image?.height || 200},w_${data.image?.height || 200}` + img.slice(uploadIndex)
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
