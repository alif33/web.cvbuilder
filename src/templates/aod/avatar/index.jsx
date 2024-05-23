/* eslint-disable react/prop-types */
import { View, Image, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    image: {
        height: 125,
        width: 125,
        borderRadius: 70,
        backgroundColor: "#FFFFFF",
        // border: 7,
        // borderWidth: 3,
        // borderColor: '#FFFFFF'

    }
})

export default function Avatar({ data }){

    const handleResize= img =>{
       const uploadIndex = img.indexOf("upload") + "upload".length
       return img.slice(0, uploadIndex) + `/c_thumb,g_face,h_${data?.image?.height || 200},w_${data.image?.width || 200}` + img.slice(uploadIndex)
    }

    return(
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 40}}>
            {data?.image && data?.image?.secure_url && (
                <View style={{border: 3, borderColor: '#FFFFFF', borderRadius: '100%'}}>
                    <Image 
                        src={handleResize(data.image.secure_url)}
                        style={styles.image}
                    />
                </View>
            )}
        </View>
    )
}
