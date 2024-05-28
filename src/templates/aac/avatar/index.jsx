/* eslint-disable react/prop-types */
import { View, Image, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    image: {
        height: 120,
        width: 120,
        borderRadius: 60,
        backgroundColor: "#FFC936",
        marginLeft: 30,
        border: 15,
        
        borderColor: '#FFFFFF',

    }
})

export default function Avatar({ data }){

    const handleResize= img =>{
    
       const uploadIndex = img.indexOf("upload") + "upload".length
       return img.slice(0, uploadIndex) + `/g_face,c_thumb,h_${data?.image.width || 200},w_${data?.image.width || 200}` + img.slice(uploadIndex)
    }

    return(
        <View style={{ flexDirection: 'row', marginBottom: 25}}>
            {data?.image && data?.image?.secure_url && (
                <Image 
                    src={handleResize(data.image.secure_url)}
                    style={styles.image}
                />
            )}
        </View>
    )
}
