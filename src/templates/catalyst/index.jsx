import {
    Document,
    Page,
    StyleSheet,
    View,
    Image,
    Text,
  } from "@react-pdf/renderer"
import {
    avatar,
    email,
    home,
    screen,
    telephone,
    facebook,
    linkedIn,
    twitter,
  } from "../../assets/Images/Images"
import Styles from "./styles"
import jsxNodes from "../lib/jsxNodes"

const black = "#363636";
const styles = Styles(StyleSheet)
    
export default function Catalyst(){
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* LEFT SECTION */}
                <View style={styles.leftSection}>
                {/* LEFT TOP */}
                <View>
                    {/* PROFILE PIC */}
                    <Image style={styles.profilePic} src={avatar}></Image>
                    {/* NAME */}
                    <View>
                    <Text style={styles.profileName}>SARA WALTON</Text>
                    <View
                        style={{
                        width: "100%",
                        height: "2px",
                        backgroundColor: black,
                        }}
                    ></View>
                    <Text style={styles.profation}>INDUSTRIAL DESIGNER</Text>
                    </View>
                    {/* CONTACT */}
                    <View>
                    <Text style={styles.sectionTitle}>CONTACT</Text>

                    <View
                        style={{
                        width: "100%",
                        height: "2px",
                        marginBottom: "30px",
                        backgroundColor: black,
                        }}
                    ></View>
                    {/* CONTACT INFO CONTAINER */}
                    <View
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "0 10px",
                        gap: "8px",
                        }}
                    >
                        {/* CARD 1 */}
                        <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "7px",
                        }}
                        >
                        <Image style={{ width: "12px" }} source={telephone} />
                        <Text style={{ fontSize: "10px" }}>+000 123 456 789</Text>
                        </View>
                        {/* CARD 2 */}
                        <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "7px",
                        }}
                        >
                        <Image style={{ width: "12px" }} source={email} />
                        <Text style={{ fontSize: "10px" }}>
                            safawalton@gmail.com
                        </Text>
                        </View>
                        {/* CARD 3 */}
                        <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "7px",
                        }}
                        >
                        <Image style={{ width: "12px" }} source={screen} />
                        <Text style={{ fontSize: "10px" }}>safawalton.com</Text>
                        </View>
                        {/* CARD 4 */}
                        <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "7px",
                        }}
                        >
                        <Image style={{ width: "12px" }} source={home} />
                        <Text style={{ fontSize: "10px" }}>Main Street # 32</Text>
                        </View>
                    </View>
                    </View>
                    {/* PROFILE */}
                    <View>
                    <Text style={styles.sectionTitle}>PROFILE</Text>

                    <View
                        style={{
                        width: "100%",
                        height: "2px",
                        marginBottom: "15px",
                        backgroundColor: black,
                        }}
                    ></View>
                    <Text
                        style={{
                        fontSize: "10px",
                        lineHeight: "1.5px",
                        padding: "0 10px",
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Assumenda aut tenetur recusandae porro ipsa ab neque
                        veritatis sint deleniti voluptates! Lorem ipsum dolor sit
                        amet.
                    </Text>
                    </View>
                </View>
                {/* LEFT BOTTOM */}
                <View
                    style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    padding: "0 10px",
                    justifyContent: "space-between",
                    }}
                >
                    <Image source={facebook} style={{ width: "15px" }} />
                    <Image source={twitter} style={{ width: "15px" }} />
                    <Image source={linkedIn} style={{ width: "15px" }} />
                    <Text style={{ fontSize: "12px" }}>sarewarton92</Text>
                </View>
                </View>
                {/* RIGHT SECTION */}
                <View style={{ width: "60%%" }}>
                {/* WORK EXPERIENCE  */}
                <View style={{ margin: "0px 50px" }}>
                    <Text style={styles.sectionTitle}>WORK EXPERIENCE </Text>
                    <View
                    style={{
                        width: "",
                        height: "2px",
                        backgroundColor: "black",
                        marginBottom: "15px",
                    }}
                    ></View>
                    <View
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                    >
                    {/* EXPERIENCE 1 */}
                    <View style={{ paddingLeft: "40px" }}>
                        <Text style={styles.title}>Art Director</Text>
                        <Text style={styles.subTitle}>Company Name | 2020</Text>
                        <Text style={styles.content}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis id hic nulla voluptatem natus provident ratione
                        quisquam mollitia,
                        </Text>
                    </View>
                    {/* EXPERIENCE 2 */}
                    <View style={{ paddingLeft: "40px" }}>
                        <Text style={styles.title}>Art Director</Text>
                        <Text style={styles.subTitle}>Company Name | 2020</Text>
                        <Text style={styles.content}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis id hic nulla voluptatem natus provident ratione
                        quisquam mollitia,
                        </Text>
                    </View>
                    {/* EXPERIENCE 3 */}
                    <View style={{ paddingLeft: "40px" }}>
                        <Text style={styles.title}>Art Director</Text>
                        <Text style={styles.subTitle}>Company Name | 2020</Text>
                        <Text style={styles.content}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis id hic nulla voluptatem natus provident ratione
                        quisquam mollitia,
                        </Text>
                    </View>
                    </View>
                </View>
                {/* EDUCATION  */}
                <View style={{ margin: "0px 50px" }}>
                    <Text style={styles.sectionTitle}>EDUCATION </Text>
                    <View
                    style={{
                        width: "",
                        height: "2px",
                        backgroundColor: "black",
                        marginBottom: "15px",
                    }}
                    ></View>
                    <View
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                    >
                    {/* EXPERIENCE 1 */}
                    <View style={{ paddingLeft: "40px" }}>
                        <Text style={styles.title}>Master Degree</Text>
                        <Text style={styles.subTitle}>
                        University Name | 2020 - 2021
                        </Text>
                        <Text style={styles.content}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis id hic nulla voluptatem natus provident ratione
                        quisquam mollitia,
                        </Text>
                    </View>
                    {/* EXPERIENCE 2 */}
                    <View style={{ paddingLeft: "40px" }}>
                        <Text style={styles.title}>Master Degree</Text>
                        <Text style={styles.subTitle}>
                        University Name | 2020 - 2021
                        </Text>
                        <Text style={styles.content}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis id hic nulla voluptatem natus provident ratione
                        quisquam mollitia,
                        </Text>
                    </View>
                    </View>
                </View>
                {/* LANGUAGES  */}
                <View style={{ margin: "0px 50px" }}>
                    <Text style={styles.sectionTitle}>LANGUAGES </Text>
                    <View
                    style={{
                        width: "",
                        height: "2px",
                        backgroundColor: "black",
                        marginBottom: "15px",
                    }}
                    ></View>
                    <View
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "3px",
                    }}
                    >
                    {/* LANGUAGE 1 */}
                    <View
                        style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px",
                        paddingLeft: "30px",
                        }}
                    >
                        <Text style={styles.title}>English</Text>
                        <Text style={{ fontSize: "11px" }}>Native</Text>
                    </View>
                    {/* LANGUAGE 2 */}
                    <View
                        style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px",
                        paddingLeft: "30px",
                        }}
                    >
                        <Text style={styles.title}>Spanish</Text>
                        <Text style={{ fontSize: "11px" }}>Native</Text>
                    </View>
                    {/* LANGUAGE 3 */}
                    <View
                        style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px",
                        paddingLeft: "30px",
                        }}
                    >
                        <Text style={styles.title}>Italian</Text>
                        <Text style={{ fontSize: "11px" }}>Native</Text>
                    </View>
                    </View>
                </View>
                </View>
            </Page>
        </Document>
    )
}
    