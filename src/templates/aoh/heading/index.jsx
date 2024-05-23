/* eslint-disable react/prop-types */
import {
    View,  
    Text,
    Image
} from "@react-pdf/renderer"

export default function Heading({ name, position, height, width, img }){
    return(
        <View style={{justifyContent: 'flex', flexDirection: 'row', alignItems: 'center', color: '#3F7F77', fontSize: 12, fontWeight: 'bold', gap: 3}}>
            {/* <View style={{justifyContent: 'center', alignItems: 'center', width: 20, height: 20, borderRadius: 10}}>
                <Image src={img} style={{height:height? height: 10, width: width? width: 10 }}/>
            </View> */}
            <View style={{position: 'relative', borderBottom: 1, paddingBottom: 2, borderBottomColor: position==='left'? '#FFFFFF': '#000000'}}>
                <View style={{position: 'absolute', bottom: -1, left: 0, height: 2, width: 15, backgroundColor: '#1196D7'}}></View>
                <Text>{name}</Text>
            </View>
        </View>
    )
}