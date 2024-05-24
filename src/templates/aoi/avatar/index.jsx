/* eslint-disable react/prop-types */
import { View, Image, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
   
    imageContainer: {
        height: 160,
        width: 160,
        flexDirection: 'row', 
        justifyContent: 'center', 
        backgroundColor: "#EDECEA",
        marginBottom: 25,
        borderRadius: 10,
        border: 3,
        borderColor: '#668932',
        marginHorizontal: 'auto'
    },
    image: {
        paddingTop: 4,
        height: 154,
        width: 154,
        borderRadius: 8,
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
