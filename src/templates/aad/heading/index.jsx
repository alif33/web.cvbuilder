/* eslint-disable react/prop-types */
import {
    View,  
    Text,
    StyleSheet 
} from "@react-pdf/renderer"

export default function Heading({ name, position }){
    console.log(name, position)
    return(
        <View style={{ position: 'relative', flexDirection: 'row', justifyContent: position==='left' ? 'center': 'start', alignItems: 'center', fontSize: 12, fontWeight: 'bold'}}>
            <View style={{ position: 'absolute', top: 6, left: 7,  height: 2, width: position==='left'? 190: 340, backgroundColor: '#F3A35F' }}></View>
            <Text style={{color: position==='left'? '#FFFFFF': '#000000', backgroundColor: position==='left'? '#3E3E3E': '#FFFFFF', paddingHorizontal: 10}}>{name}</Text>
        </View>
    )
}