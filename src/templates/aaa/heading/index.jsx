/* eslint-disable react/prop-types */
import {
    View,  
    Text,
    Image
} from "@react-pdf/renderer"

export default function Heading({ title, position, height, width, img }){
    return(
        <View style={{justifyContent: 'flex', flexDirection: 'row', alignItems: 'center', fontSize: 12, fontWeight: 'bold', borderRadius: 15, paddingVertical: 2, paddingLeft: 3, gap: 3}}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: 20, height: 20, borderRadius: 10, backgroundColor: position==='left'? '#FFFFFF': '#1960BA' }}>
                <Image src={img} style={{height:height? height: 10, width: width? width: 10 }}/>
            </View>
            <Text style={{ color: position==='left'? '#FFFFFF': '#1960BA' }}>{title}</Text>
        </View>
    )
}