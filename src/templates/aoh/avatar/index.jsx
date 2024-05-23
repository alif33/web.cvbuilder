/* eslint-disable react/prop-types */
import { View, Image, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
   
    imageContainer: {
        height: 100,
        width: 100,
        borderRadius: 50,
        border: 3,
        borderColor: '#FFFFFF',
        marginHorizontal: 'auto'
    },
    
    image: {
        paddingTop: 4,
        height: 95,
        width: 95,
        borderRadius: 70,
        backgroundColor: '#27554F'
    }
})

export default function Avatar({ data }){

    const handleResize= img =>{
       const uploadIndex = img.indexOf("upload") + "upload".length
       return img.slice(0, uploadIndex) + "/c_thumb,g_face,h_200,w_200" + img.slice(uploadIndex)
    }

    return(
        <View style={styles.imageContainer}>
            {data?.image && data?.image?.secure_url && (
                <Image 
                    src={data.image.secure_url}
                    style={styles.image}
                />
            )}
        </View>
    )
}
