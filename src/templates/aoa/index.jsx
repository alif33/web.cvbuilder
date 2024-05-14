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
import Reference from "./reference"
import Header from "./header"
import Contacts from "./contacts"
import Experience from "./experience"
import Education from "./education"
import Avatar from "./avatar"
import Personal from "./personal"
import Signature from "./signature"
import Passport from "./passport"
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
    reference: Reference,
    personal: Personal,
    signature: Signature,
    passport: Passport,

}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        fontFamily: 'Montserrat',
    },

    body: {
        justifyContent: 'flex',
        flexDirection: 'row',
        overflow: 'none',
        fontFamily: 'Montserrat',
        fontSize: 10
    },
    left: {
        width: 390,
        paddingRight: 30,
        paddingLeft: 30,
        paddingTop: 20
    },
    right: {
        width: 220,
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 20,
        backgroundColor: '#006666',
        color: '#FFFFFF',
        minHeight: '100%'
    }
})


export default function Aoc({ data }){

    return(
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.body}>
                    <View style={styles.left}>
                        <Header data={data} />
                        {
                            data.layout.primaryLeft.map((component, index)=>{
                                const Section = sections[component] 

                                return(
                                    <Section 
                                        key={index}
                                        name={component} 
                                        position={getPosition(component, data.layout)} 
                                        data={data} 
                                    />
                                )
                            })
                        }
                    </View>
                    <View>
                        <View style={{minHeight: 4, width: 220, backgroundColor: '#000000'}}></View>
                        <View style={styles.right}>
                        <Avatar data={data}/>
                        {
                            data.layout.primaryRight.map((component, index)=>{
                                const Section = sections[component] 
                                return(
                                    <Section 
                                        key={index}
                                        name={component} 
                                        position={getPosition(component, data.layout)} 
                                        data={data} 
                                    />
                                )
                            })
                        }
                        </View>
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
                                        const Section = sections[component] 
                                        return(
                                            <Section data={data} key={index}/>
                                        )
                                    })
                                }
                            </View>
                            <View style={styles.right}>
                                {
                                    data.layout.secondaryRight.map((component, index)=>{
                                        const Section = sections[component] 
                                        return(
                                            <Section data={data} key={index}/>
                                        )
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