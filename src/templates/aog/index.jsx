/* eslint-disable react/prop-types */
import { 
    Document,
    Page, 
    View,  
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
        fontSize: 10
    },
    left: {
        width: 220,
        // paddingRight: 20,
        // paddingLeft: 10,
        minHeight: '100%',
        backgroundColor: '#314356',
        color: '#FFFFFF'
    },
    right: {
        width: 420,
        paddingLeft: 10
        // marginTop: 20
    },
})


export default function Aoc({ customs, data }){

    return(
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <View style={{position: 'relative', flexDirection: 'row', alignItems: 'center', backgroundColor: '#0099DB', marginBottom: 10 }}>
                    
                    <View style={{position: 'absolute', top: -60, right: -60, width: 120, height: 120, border: 4, borderColor: '#FFFFFF', borderRadius: 60}}>
                        
                    </View>
                    <View style={{ width: 220, paddingVertical: 25 }}>
                        <Avatar data={data}/>
                    </View>
                    <View style={{color: '#FFFFFF'}}>
                        <Header data={data} />
                    </View>
                </View>
                {/* Body */}
                <View style={styles.body}>
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