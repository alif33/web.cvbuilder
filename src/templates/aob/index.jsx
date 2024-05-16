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
import Reference from "./reference"
import Training from "./training"
import Header from "./header"
import Contacts from "./contacts"
import Experience from "./experience"
import Education from "./education"
import Avatar from "./avatar"
import Personal from "./personal"
import Signature from "./signature"
import Passport from "./passport"
import Custom from "./custom"

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
    },

    body: {
        justifyContent: 'flex',
        flexDirection: 'row',
        overflow: 'none',
        fontFamily: 'Montserrat',
        fontSize: 10
    },
    left: {
        width: 250,
        paddingTop: 50,
        paddingLeft: 30,
        paddingRight: 20,
        backgroundColor: '#efefef',
        minHeight: '100%'
    },
    right: {
        width: 400,
        paddingRight: 30,
        paddingLeft: 25,
        paddingTop: 20
    },
    section: {
        paddingLeft: 35,
        paddingRight: 35,
        paddingTop: 30,
        paddingBottom: 10
    },

})


export default function Aoc({ customs, data }){

    return(
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.body}>
                    <View style={styles.left}>
                        <Avatar data={data}/>
                        <Header data={data} />
                        {
                            data.layout.primaryLeft.map((component, index)=>{
                                if(!customs?.includes(component)){
                                    const Section = sections[component] 
                                    return(
                                        <Section key={index} name={component} data={data} />
                                    )
                                }else{
                                    <Custom key={index} name={component} data={data}/>
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
                                        <Section key={index} name={component} data={data} />
                                    )
                                }else{
                                    <Custom key={index} name={component} data={data}/>
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
                                                <Section key={index} name={component} data={data} />
                                            )
                                        }else{
                                            <Custom key={index} name={component} data={data}/>
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
                                                <Section key={index} name={component} data={data} />
                                            )
                                        }else{
                                            <Custom key={index} name={component} data={data}/>
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