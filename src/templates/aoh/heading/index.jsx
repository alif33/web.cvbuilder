/* eslint-disable react/prop-types */
import {
    View,  
    Text,
    Image
} from "@react-pdf/renderer"

export default function Heading({ name, position, height, width, img }){
    return(
        <View style={{justifyContent: 'flex', flexDirection: 'row', alignItems: 'center', color: '#3F7F77', fontSize: 12, fontWeight: 'bold', gap: 3}}>
            <View style={{ paddingBottom: 2 }}>
                <Text>{name}</Text>
            </View>
        </View>
    )
}