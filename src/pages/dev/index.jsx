import {
  PDFViewer,
  Font,
  Document,
  Page,
  StyleSheet,
  View,
  Image,
  Text,
} from "@react-pdf/renderer";
import { avatar } from "../../assets/Images/Images";

// DECLEARE COLORS
const yellow = "#FECB00";
const navyBlack = "#1B1E2F";
const grayBlack = "#2D2D2D";
const lightSilver = "#EBEBEB";
const lightGray = "#242537";

Font.register(
  {
    family: "Epilogue",
    fonts: [
      {
        src: `/fonts/epilogue/Epilogue-Regular.ttf`,
      },
      {
        src: `/fonts/epilogue/Epilogue-Bold.ttf`,
        fontWeight: "bold",
      },
      {
        src: `/Roboto-Italic.ttf`,
        fontWeight: "normal",
        fontStyle: "italic",
      },
      {
        src: `/Roboto-BoldItalic.ttf`,
        fontWeight: "bold",
        fontStyle: "italic",
      },
    ],
  },
  {
    family: "Roboto",
    fonts: [
      {
        src: `/fonts/Roboto-Bold.ttf`,
      },
      {
        src: `/Roboto-Bold.ttf`,
        fontWeight: "bold",
      },
      {
        src: `/Roboto-Italic.ttf`,
        fontWeight: "normal",
        fontStyle: "italic",
      },
      {
        src: `/Roboto-BoldItalic.ttf`,
        fontWeight: "bold",
        fontStyle: "italic",
      },
    ],
  }
);

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    fontFamily: "Epilogue",
    display: "flex",
    flexDirection: "row",
  },

  heading: {
    textAlign: "center",
  },
  topBar: {
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
  },
  header: {
    width: "100%",
    textAlign: "center",
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 22,
    textTransform: "uppercase",
    paddingTop: 5,
  },
  headerSubTitle: {
    fontSize: 12,
    paddingTop: 8,
    opacity: 1,
  },
  section: {
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 12,
    paddingBottom: 2,
  },
  sectionHigh: {
    paddingVertical: 10,
    fontSize: 11,
    fontWeight: "bold",
  },
  sectionBody: {
    marginLeft: 45,
  },
  sectionParagraph: {
    fontSize: 11,
    lineHeight: 1.5,
  },
  leftArea: {
    backgroundColor: navyBlack,
    width: "40%",
    height: "100%",
    padding: "50px 0 ",
  },
  rightArea: {
    padding: "50px 0",
    width: "60%",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
  profile: {
    padding: "3px",
    backgroundColor: yellow,
    width: "120px",
    height: "115px",
    borderRadius: "50%",
    margin: "0 auto",
  },
  sectionHeading: {
    backgroundColor: lightGray,
    padding: "4px 0px 4px 20px",
    borderLeft: `8px solid ${yellow}`,
    color: "white",
    marginTop: "18px",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "14px",
    color: "white",
    fontWeight: "500",
    marginTop: "20px",
    textTransform: "uppercase",
  },
  title2: {
    fontSize: "14px",
    color: "white",
    fontWeight: "500",
    marginTop: "20px",
    textTransform: "capitalize",
  },
  subtitle: {
    fontSize: "10px",
    color: "white",
    textTransform: "capitalize",
  },

  subtitle2: {
    fontSize: "10px",
    fontWeight: "600",
    color: grayBlack,
    textTransform: "capitalize",
  },

  sectionHeading2: {
    backgroundColor: lightSilver,
    padding: "4px 0px 4px 40px",
    borderLeft: `8px solid ${yellow}`,
    fontSize: "20px",
    color: grayBlack,
    marginTop: "18px",
    textTransform: "uppercase",
  },
  content: {
    fontSize: "10px",
    color: "white",
    textTransform: "lowercase",
  },
  content2: {
    fontSize: "10px",
    color: grayBlack,
    marginTop: "10px",
    lineHeight: "1.4px",
  },
  work: {
    display: "flex",
    flexDirection: "row",
    gap: "40px",
    paddingLeft: "40px",
    marginRight: "20px",
    marginTop: "20px",
  },
  workTitle: {
    fontSize: "14px",
    color: grayBlack,
    fontWeight: "500",
    textTransform: "uppercase",
    lineHeight: "1.3px",
  },
  skillTitle: {
    fontSize: "11px",
    fontWeight: "500",
  },
  skillLabel: {},
});

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const Dev = () => {
  return (
    <PDFViewer style={containerStyle}>
      <Document>
        <Page size="A4" style={styles.page}>
          {/* LEFT SECTION */}
          <View style={styles.leftArea}>
            {/* PROFILE PIC */}
            <View style={styles.profile}>
              <Image src={avatar} style={styles.profileImage} />
            </View>
            {/* EDUCATION */}
            <View>
              <View style={styles.sectionHeading}>
                <Text>Education</Text>
              </View>
              {/* UNIVERSITY 1 */}
              <View
                style={{
                  paddingLeft: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5 px",
                }}
              >
                <Text style={styles.title}>ENTER YOUR MAJON</Text>
                <Text style={styles.subtitle}>Name of your university</Text>
                <Text style={styles.subtitle}>2005-2009</Text>
              </View>
              {/* UNIVERSITY 2 */}
              <View
                style={{
                  paddingLeft: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5 px",
                }}
              >
                <Text style={styles.title}>ENTER YOUR MAJON</Text>
                <Text style={styles.subtitle}>Name of your university</Text>
                <Text style={styles.subtitle}>2005-2009</Text>
              </View>
            </View>
            {/* CONTACT */}
            <View>
              <View style={styles.sectionHeading}>
                <Text>CONTACT</Text>
              </View>
              {/* LOCATION ADDRESS */}
              <View
                style={{
                  paddingLeft: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5 px",
                }}
              >
                <Text style={styles.title2}>Address</Text>
                <Text style={styles.content}>your street address</Text>
                <Text style={styles.subtitle}>
                  SS Steert City/Zip Code - 456
                </Text>
              </View>
              {/* PHONE */}
              <View
                style={{
                  paddingLeft: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5 px",
                }}
              >
                <Text style={styles.title2}>phone</Text>
                <Text style={styles.content}>+000 123 456 789</Text>
              </View>
              {/* EMAIL */}
              <View
                style={{
                  paddingLeft: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5 px",
                }}
              >
                <Text style={styles.title2}>Email</Text>
                <Text style={styles.content}>username@gmail.com</Text>
              </View>
              {/* Website */}
              <View
                style={{
                  paddingLeft: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5 px",
                }}
              >
                <Text style={styles.title2}>Website</Text>
                <Text style={styles.content}>urwebsitename.comm</Text>
              </View>
            </View>
            {/* REFERENCE */}
            <View>
              <View style={styles.sectionHeading}>
                <Text>REFERENCE</Text>
              </View>
              {/* REF 1 */}
              <View
                style={{
                  paddingLeft: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5 px",
                }}
              >
                <Text style={styles.title}>Sara Taylore</Text>
                <Text style={styles.subtitle}>Director | Company Name</Text>
                <Text style={styles.subtitle}>T : +1234 56789</Text>
              </View>
              {/* REF 2 */}
              <View
                style={{
                  paddingLeft: "30px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5 px",
                }}
              >
                <Text style={styles.title}>Sara Taylore</Text>
                <Text style={styles.subtitle}>Director | Company Name</Text>
                <Text style={styles.subtitle}>T : +1234 56789</Text>
              </View>
            </View>
          </View>
          {/* RIGHT SECTION */}
          <View style={styles.rightArea}>
            {/* NAME */}
            <View
              style={{
                backgroundColor: lightSilver,
                width: "100%",
                padding: "40px 0",
                borderLeft: `8px solid ${yellow}`,
                paddingLeft: "40px",
              }}
            >
              <Text
                style={{ color: grayBlack, fontSize: "30px", fontWeight: 600 }}
              >
                KAREN <Text style={{ fontWeight: 400 }}>RICHARDS</Text>
              </Text>
              <Text style={{ textTransform: "uppercase", color: grayBlack }}>
                Profactional Title
              </Text>
            </View>
            {/* ABOUT */}
            <View>
              <Text style={styles.sectionHeading2}>About Us</Text>
              <Text
                style={{
                  fontSize: "10px",
                  color: grayBlack,
                  marginTop: "18px",
                  paddingLeft: "40px",
                  lineHeight: "1.5px",
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                rerum, maiores in voluptatem esse eius libero laboriosam error
                sunt similique.
              </Text>
            </View>
            {/* WORK EXPERIENCE */}
            <View>
              <Text style={styles.sectionHeading2}>WORK EXPERIENCE</Text>
              {/* WORK 1 */}
              <View style={styles.work}>
                {/* LEFT */}
                <Text style={styles.workTitle}>2012-2014</Text>
                {/* RIGHT */}
                <View style={{ width: "100%" }}>
                  <Text style={styles.workTitle}>JOB POSITION HERE</Text>
                  <Text style={styles.subtitle2}>
                    Company Name / Californial USA
                  </Text>
                  <Text style={styles.content2}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Placeat pariatur quae ea repudiandae voluptas quisquam
                  </Text>
                </View>
              </View>
              {/* WORK 2 */}
              <View style={styles.work}>
                {/* LEFT */}
                <Text style={styles.workTitle}>2012-2014</Text>
                {/* RIGHT */}
                <View style={{ width: "100%" }}>
                  <Text style={styles.workTitle}>JOB POSITION HERE</Text>
                  <Text style={styles.subtitle2}>
                    Company Name / Californial USA
                  </Text>
                  <Text style={styles.content2}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Placeat pariatur quae ea repudiandae voluptas quisquam
                  </Text>
                </View>
              </View>
              {/* WORK 3 */}
              <View style={styles.work}>
                {/* LEFT */}
                <Text style={styles.workTitle}>2012-2014</Text>
                {/* RIGHT */}
                <View style={{ width: "100%" }}>
                  <Text style={styles.workTitle}>JOB POSITION HERE</Text>
                  <Text style={styles.subtitle2}>
                    Company Name / Californial USA
                  </Text>
                  <Text style={styles.content2}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Placeat pariatur quae ea repudiandae voluptas quisquam
                  </Text>
                </View>
              </View>
            </View>
            {/* SOFTWARE SKILL */}
            <View>
              <Text style={styles.sectionHeading2}>SOFTWARE SKILL</Text>
              {/* 1st line */}
              <View
                style={{
                  padding: "0 40px",
                  marginTop: "20px",

                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                {/* SKILL 1 */}
                <View style={{ width: "100%" }}>
                  <Text style={styles.skillTitle}>Adobe photoshop</Text>
                  <View>
                    <View
                      style={{
                        width: "100%",
                        height: "5px",
                        borderRadius: "50px",
                        backgroundColor: grayBlack,
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: yellow,
                          width: "50%",
                          height: "100%",
                          borderRadius: "50px",
                        }}
                      ></View>
                    </View>
                  </View>
                </View>
                {/* SKILL 1 */}
                <View style={{ width: "100%" }}>
                  <Text style={styles.skillTitle}>Microsoft Word</Text>
                  <View>
                    <View
                      style={{
                        width: "100%",
                        height: "5px",
                        borderRadius: "50px",
                        backgroundColor: grayBlack,
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: yellow,
                          width: "50%",
                          height: "100%",
                          borderRadius: "50px",
                        }}
                      ></View>
                    </View>
                  </View>
                </View>
              </View>
              {/* 1st line */}
              <View
                style={{
                  padding: "0 40px",
                  marginTop: "20px",

                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                {/* SKILL 1 */}
                <View style={{ width: "100%" }}>
                  <Text style={styles.skillTitle}>Adobe Illustrator</Text>
                  <View>
                    <View
                      style={{
                        width: "100%",
                        height: "5px",
                        borderRadius: "50px",
                        backgroundColor: grayBlack,
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: yellow,
                          width: "50%",
                          height: "100%",
                          borderRadius: "50px",
                        }}
                      ></View>
                    </View>
                  </View>
                </View>
                {/* SKILL 1 */}
                <View style={{ width: "100%" }}>
                  <Text style={styles.skillTitle}>Adobe inDesign</Text>
                  <View>
                    <View
                      style={{
                        width: "100%",
                        height: "5px",
                        borderRadius: "50px",
                        backgroundColor: grayBlack,
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: yellow,
                          width: "50%",
                          height: "100%",
                          borderRadius: "50px",
                        }}
                      ></View>
                    </View>
                  </View>
                </View>
              </View>
              {/* 1st line */}
              <View
                style={{
                  padding: "0 40px",
                  marginTop: "20px",
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                {/* SKILL 1 */}
                <View style={{ width: "100%" }}>
                  <Text style={styles.skillTitle}>HTML5 / CSS3</Text>
                  <View>
                    <View
                      style={{
                        width: "100%",
                        height: "5px",
                        borderRadius: "50px",
                        backgroundColor: grayBlack,
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: yellow,
                          width: "50%",
                          height: "100%",
                          borderRadius: "50px",
                        }}
                      ></View>
                    </View>
                  </View>
                </View>
                {/* SKILL 1 */}
                <View style={{ width: "100%" }}>
                  <Text style={styles.skillTitle}>Mocrosoft Powerpoint</Text>
                  <View>
                    <View
                      style={{
                        width: "100%",
                        height: "5px",
                        borderRadius: "50px",
                        backgroundColor: grayBlack,
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: yellow,
                          width: "50%",
                          height: "100%",
                          borderRadius: "50px",
                        }}
                      ></View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
export default Dev;
