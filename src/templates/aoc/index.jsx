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
        paddingTop: 30,
        paddingHorizontal: 30
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
        paddingRight: 20
    },
    right: {
        width: 420,
    },
    section: {
        paddingLeft: 35,
        paddingRight: 35,
        paddingBottom: 10
    },

})


export default function Aoc({ data }){

    return(
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.body}>
                    <View style={styles.left}>
                        <Avatar data={data}/>
                        {
                            data.layout.primaryLeft.map((component, index)=>{
                                const Section = sections[component] 
                                return(
                                    <Section data={data} key={index}/>
                                )
                            })
                        }
                    </View>
                    <View style={styles.right}>
                        <Header data={data} />
                        {
                            data.layout.primaryRight.map((component, index)=>{
                                const Section = sections[component] 
                                return(
                                    <Section data={data} key={index}/>
                                )
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