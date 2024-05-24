/* eslint-disable react/prop-types */
import { 
    Document,
    Page, 
    View, 
    Svg,
    Path, 
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
import Xperience from "./xperience"
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
    xperience: Xperience
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
        position: 'relative',
        width: 230,
        minHeight: '100%',
        backgroundColor: '#3E3E3E',
        color: '#FFFFFF'
    },
    right: {
        width: 390,
        marginTop: 20,
        paddingLeft: 10
    },
})


export default function Aoc({ customs, data }){

    return(
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.body}>
                    <View style={styles.left}>
                        {/* Line */}
                        <View style={{ position: 'absolute', top: 0, right: -4,  height: 140, width: 4, backgroundColor: '#F1A264'}}></View>
                        {/* Triangle Svg */}
                        <View style={{position: 'absolute', top: 70, right: 0}}>
                            <Svg width="18" height="18" viewBox="0 0 18 18">
                            <Path 
                                d="M0 16L31.5 0.411545L31.5 31.5885L0 16Z" 
                                fill="#F1A264" 
                            />
                            </Svg>
                        </View>
                        <Avatar data={data}/>
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
                                    return(
                                        <Custom 
                                            key={index} 
                                            name={component} 
                                            position={getPosition(component, data.layout)}
                                            data={data}
                                        />
                                    ) 
                                }
                            })
                        }
                    </View>
                    <View style={styles.right}>
                        <Header data={data} />
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
                                    return(
                                        <Custom 
                                            key={index} 
                                            name={component} 
                                            position={getPosition(component, data.layout)}
                                            data={data}
                                        />
                                    )
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
                                            return(
                                                <Custom 
                                                    key={index} 
                                                    name={component} 
                                                    position={getPosition(component, data.layout)}
                                                    data={data}
                                                />
                                            ) 
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
                                            return(
                                                <Custom 
                                                    key={index} 
                                                    name={component} 
                                                    position={getPosition(component, data.layout)}
                                                    data={data}
                                                />
                                            )
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