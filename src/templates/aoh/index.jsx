/* eslint-disable react/prop-types */
import { 
    Document,
    Page, 
    View,
    Text,
    Image,
    Svg, 
    Ellipse,  
    StyleSheet 
} from "@react-pdf/renderer"
import Summary from "./summary"
import Objective from "./objective"
import Declaration from "./declaration"
import Skills from "./skills"
import Language from "./language"
import Training from "./training"
import Reference from "./reference"
import Header from "./header"
import Contacts from "./contacts"
import Experience from "./experience"
import Education from "./education"
import Avatar from "./avatar"
import Personal from "./personal"
import Signature from "./signature"
import Passport from "./passport"
import Custom from "./custom"
import { getPosition } from "../lib/formatter"

const sections = {
    summary: Summary,
    objective: Objective,
    declaration: Declaration,
    header: Header,
    contacts: Contacts,
    experience: Experience,
    education: Education,
    skills: Skills,
    language: Language,
    reference: Reference,
    training: Training,
    personal: Personal,
    signature: Signature,
    passport: Passport,
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        fontFamily: 'Montserrat',
        // paddingTop: 30,
        // paddingHorizontal: 30
    },
    body: {
        justifyContent: 'flex',
        flexDirection: 'row',
        overflow: 'none',
        fontFamily: 'Montserrat',
        fontSize: 10,
        position: 'relative'
    },
    left: {
        width: 320,
        // paddingRight: 20,
        // paddingLeft: 10,
        minHeight: '100%',
        backgroundColor: '#E0F4F2',
        color: '#000000',
        zIndex: 9,
        paddingTop: 20
    },
    right: {
        width: 320,
        paddingLeft: 10,
        paddingTop: 20
        // marginTop: 20
    },
})


export default function Aoc({ customs, data }){

    return(
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={{ height: 150, flexDirection: 'row', alignItems: 'center', zIndex: 7}}>
                    
                    <View style={{ color: 'red', fontSize: 14, zIndex: 5 }}> 
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, debitis!</Text>
                    </View>
                    
                    
                    {/* <View style={{ zIndex: 999}}> */}
                        {/* <Svg style={{ zIndex: 999}} width="700" height="229" viewBox="0 0 700 329" fill="none">
                            <Ellipse cx="229.265" cy="59.2484" rx="583.773" ry="187.5" transform="rotate(-1.97548 229.265 59.2484)" fill="#3F7F77" />
                            <Ellipse cx="228.591" cy="39.8362" rx="346.291" ry="178.5" transform="rotate(-20.4387 228.591 39.8362)" fill="#27554F" />
                        </Svg> */}
                    {/* </View> */}
                    
                    {/* <View style={{position: 'absolute', top: -60, right: -60, width: 120, height: 120, border: 4, borderColor: '#FFFFFF', borderRadius: 60}}>
                        
                    </View>
                    <View style={{ width: 220, paddingVertical: 25 }}>
                        <Avatar data={data}/>
                    </View>
                    <View style={{color: '#FFFFFF'}}>
                        <Header data={data} />
                    </View> */}
                </View>
                {/* Body */}
                <View style={styles.body}>
                    <View style={{ position: 'absolute', width: '100%', top: -100, left: 0, color: 'red', fontSize: 14, zIndex: 5 }}> 
                        <View style={{ flexDirection: 'row', color: '#FFFFFF'}}>
                            <View style={{ width: 220}}>
                                <Text>1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, debitis!</Text>
                            </View>
                            <View style={{ width: 220, marginTop: 20, marginLeft: 80}}>
                                <Avatar data={data}/>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{ position: 'absolute', top: -150, left: 0, zIndex: 8}}>
                        <Image
                            src="/images/bg-aoh.png"
                            style={{ height: 220, width: 600 }}
                        />
                    </View>
                    <View style={styles.left}>
                        {
                            data.layout.primaryLeft.map((component, index)=>{
                                if(!customs?.includes(component)){
                                    const Section = sections[component] 
                                    
                                    return(
                                        <Section 
                                            key={index}
                                            name={component} 
                                            position={getPosition(component, data.layout)} 
                                            data={data} 
                                        />
                                    )
                                }else{
                                    return <Custom 
                                        key={index} 
                                        name={component} 
                                        position={getPosition(component, data.layout)} 
                                        data={data}
                                    />
                                }
                            })
                        }
                    </View>
                    <View style={styles.right}>
                        {
                            data.layout.primaryRight.map((component, index)=>{
                                if(!customs?.includes(component)){
                                    const Section = sections[component] 
                                    return(
                                        <Section 
                                            key={index}
                                            name={component} 
                                            position={getPosition(component, data.layout)} 
                                            data={data} 
                                        />
                                    )
                                }else{
                                    return <Custom 
                                        key={index} 
                                        name={component} 
                                        position={getPosition(component, data.layout)} 
                                        data={data}
                                    />
                                }
                            })
                        }
                    </View>
                </View> 
            </Page>
            {/* Page 2 */}
            {
                (data.layout.secondaryLeft.length >0 || data.layout.secondaryRight.length >0) &&(
                    <Page size="A4" style={styles.page}>
                        <View style={styles.body}>
                            <View style={styles.left}>
                                {
                                    data.layout.secondaryLeft.map((component, index)=>{
                                        if(!customs?.includes(component)){
                                            const Section = sections[component] 
                                            return(
                                                <Section 
                                                    key={index}
                                                    name={component} 
                                                    position={getPosition(component, data.layout)} 
                                                    data={data} 
                                                />
                                            )
                                        }else{
                                            return <Custom 
                                                        key={index} 
                                                        name={component} 
                                                        position={getPosition(component, data.layout)} 
                                                        data={data}
                                                    />
                                        }
                                        
                                    })
                                }
                            </View>
                            <View style={styles.right}>
                                {
                                    data.layout.secondaryRight.map((component, index)=>{
                                        if(!customs?.includes(component)){
                                            const Section = sections[component] 
                                            return(
                                                <Section 
                                                    key={index}
                                                    name={component} 
                                                    position={getPosition(component, data.layout)} 
                                                    data={data} 
                                                />
                                            )
                                        }else{
                                            return <Custom 
                                                key={index}
                                                name={component} 
                                                position={getPosition(component, data.layout)} 
                                                data={data}
                                            />
                                        }
                                        
                                    })
                                }
                            </View>
                        </View>
                    </Page>
                )
            }
        </Document>
    )
}