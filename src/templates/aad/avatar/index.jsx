/* eslint-disable react/prop-types */
import { View, Image, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
    imageContainer: {
        height: 150,
        width: 150,
        flexDirection: 'row', 
        justifyContent: 'center', 
        backgroundColor: "#E4E4E4",
        marginBottom: 25,
        marginTop: 30,
        borderRadius: 75,
        border: 3,
        borderColor: '#EFA262',
        marginHorizontal: 'auto'
    },
    image: {
        paddingTop: 4,
        height: 144,
        width: 144,
        borderRadius: 70,
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
