/* eslint-disable react/prop-types */
import { 
    Document,
    Page, 
    View,  
    Text,
    Image,
    Svg,
    Line,
    StyleSheet 
} from "@react-pdf/renderer"
import { NodeParser } from "../../lib/nodeParser"
import jsxNodes from "../lib/jsxNodes"

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        fontFamily: 'Montserrat',
       
    },
    body: {
        justifyContent: 'flex',
        flexDirection: 'row',
        padding: 20,
        overflow: 'none',
        fontFamily: 'Montserrat'
    },
    left: {
        width: '250px',
        paddingRight: 20
    },
    heading: {
        justifyContent: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#F5F5F5",
        fontSize: 12,
        fontWeight: 'bold',
        borderRadius: 15,
        paddingVertical: 2,
        paddingLeft: 3,
        gap: 3
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "#FF7D00"
    },
    icon: {
        height: 10,
        width: 10
    },
    right: {
        width: 400,
        // overflow: 'hidden'
    },
    topBar: {
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
    },
    header: {
        // width: '100%',
        // textAlign: 'center',
        marginBottom: 10
    },
    headerTitle: {
        fontSize: 22,
        textTransform: "uppercase",
        paddingTop: 5
    },
    headerSubTitle: {
        fontSize: 12,
        paddingTop: 8,
        opacity: 1
    },
    section: {
        paddingLeft: 35,
        paddingRight: 35,
        paddingBottom: 10
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 12,
        paddingBottom: 2
    },
    sectionHigh: {
        paddingVertical: 10, 
        fontSize: 10, 
        fontWeight: 'bold'
    },
    sectionBody: {
        marginLeft: 45
    },
    sectionParagraph: {
        fontSize: 11,
        lineHeight: 1.5
    }
})


export default function Alpha({ heading, experience, education, summary, skills }){

    const __summary = NodeParser(summary) || false
    
    return(
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.body}>
                    <View style={styles.left}>
                        <View style={styles.heading}>
                            <View style={styles.iconContainer}>
                                <Image src="/icons/man.png" style={styles.icon}/>
                            </View>
                            <Text>Contact Me</Text>
                        </View>
                        <View style={{fontSize: 10, lineHeight: 1.5, paddingTop: 8}}>
                            <Text>Email: alifhasan332@gmail.com</Text>
                            <Text>Phone: +8801625794888</Text>
                            <Text>Address: Ponghagra, sadar mymensingh</Text>
                        </View>
                        <View style={styles.heading}>
                            <View style={styles.iconContainer}></View>
                            <Text>Skills</Text>
                        </View>
                        <View style={{ fontSize: 10 }}>
                            <Text>.Html</Text>
                            <Text>.Css</Text>
                            <Text>.Js</Text>
                        </View>
                        <View style={styles.heading}>
                            <View style={styles.iconContainer}></View>
                            <Text>References</Text>
                        </View>

                    </View>
                    <View style={styles.right}>
                        <View style={styles.header}>
                            <Text style={{fontSize: 12, fontWeight: 'bold'}}>About Me</Text>
                            <Text style={styles.headerTitle}>MD Sagor Mia</Text>
                        </View>

                        <View style={styles.heading}>
                            <View style={styles.iconContainer}></View>
                            <Text>Summary</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 10, lineHeight: 1.3, paddingTop: 5 }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit hic ratione eius temporibus nemo earum, amet repellat natus aperiam sunt laudantium culpa facilis, quod dolore sequi error veritatis enim incidunt voluptates fuga debitis? Voluptates excepturi, tempora iusto ad odit dolores qui? Molestias possimus aut, veniam iusto libero unde dicta asperiores.
                            </Text>
                        </View>
                        {/* Summary */}
                        {/* <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Summary</Text>
                            <Svg height="3" width="100%"><Line x1="0" y1="0" x2="1000" y2="0" strokeWidth={2} stroke="#2a9294"/></Svg>
                                <View style={{...styles.sectionParagraph, marginLeft: 50}}>
                                    {jsxNodes(__summary)}
                                </View>
                        </View> */}

                        {/* Experience */}
                        {/* <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Experience</Text>
                            <Svg height="3" width="100%"><Line x1="0" y1="0" x2="1000" y2="0" strokeWidth={2} stroke="#2a9294"/></Svg>
                            <View style={styles.sectionBody}>
                                {
                                    experience && experience.map((exp, index)=>(
                                        <View key={index}>
                                            <Text style={styles.sectionHigh}>{exp?.jobTitle}</Text>
                                            <Text style={{paddingBottom: 10, fontSize: 12}}>{exp?.employer}, {exp?.jobCity}</Text>
                                            <Text style={styles.sectionParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum praesentium ea fuga exercitationem, cupiditate ratione iste assumenda eos officia optio magnam fugiat vel ipsam numquam? Necessitatibus, quaerat.</Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </View> */}
                        {/* Skills */}
                        {/* <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Skills</Text>
                            <Svg height="3" width="100%"><Line x1="0" y1="0" x2="1000" y2="0" strokeWidth={2} stroke="#2a9294"/></Svg>
                            <View style={styles.sectionBody}>
                                <Text style={styles.sectionParagraph}>• Html</Text>
                                <Text style={styles.sectionParagraph}>• Css</Text>
                            </View>
                        </View> */}
                        {/* Education */}
                        {/* <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Education</Text>
                            <Svg height="3" width="100%"><Line x1="0" y1="0" x2="1000" y2="0" strokeWidth={2} stroke="#2a9294"/></Svg>
                            <View style={styles.sectionBody}>
                                {
                                    education && education.map((edu, index)=>(
                                        <View key={index}>
                                            <Text style={styles.sectionHigh}>{edu?.institutionName} - {edu?.institutionLocation}</Text>
                                            <Text style={{paddingBottom: 15, fontSize: 14}}>{edu?.employer}, {edu?.jobCity}</Text>
                                            <Text style={styles.sectionParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum praesentium ea fuga exercitationem, cupiditate ratione iste assumenda eos officia optio magnam fugiat vel ipsam numquam? Necessitatibus, quaerat.</Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </View> */}
                    </View>
                </View> 
            </Page>
        </Document>
    )
}