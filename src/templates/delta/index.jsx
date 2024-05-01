import React from "react"
import { Page, Document, Image, View, Text } from "@react-pdf/renderer"
import jsxNodes from "../lib/jsxNodes"

const Cv1 = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.header}>
            {/* <Image src={avatar} style={styles.avatar} /> */}
            <View style={styles.profileInfo}>
              <Text style={styles.name}>NAME <Text style={styles.surname}>SURNAME</Text></Text>
              <Text style={styles.profession}>PROFESSION</Text>
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.section}>
              <View style={styles.subSection}>
                <Text style={styles.sectionTitle}>CONTACT</Text>
                <View style={styles.contactItem}>
                  {/* <IoMdPhonePortrait style={styles.icon} /> */}
                  <View>
                    <Text style={styles.contactTitle}>Phone</Text>
                    <Text style={styles.contactDetail}>+2 434-232534234</Text>
                  </View>
                </View>
                <View style={styles.contactItem}>
                  {/* <IoIosMail style={styles.icon} /> */}
                  <View>
                    <Text style={styles.contactTitle}>Email</Text>
                    <Text style={styles.contactDetail}>travisanderson@gmail.com</Text>
                  </View>
                </View>
              </View>
              <View style={styles.subSection}>
                <Text style={styles.sectionTitle}>ABOUT ME</Text>
                <Text style={styles.aboutText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  natus vitae aperiam obcaecati amet nemo sed velit libero, quae
                  saepe, nostrum consequuntur perferendis laboriosam blanditiis
                  quas maxime repellendus
                </Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.subSection}>
                <Text style={styles.sectionTitle}>SOCIAL MEDIA</Text>
                <View style={styles.socialMediaItem}>
                  {/* <FaFacebookF style={styles.icon} /> */}
                  <View>
                    <Text style={styles.socialMediaTitle}>Facebook</Text>
                    <Text style={styles.socialMediaDetail}>@yourfacebook</Text>
                  </View>
                </View>
                <View style={styles.socialMediaItem}>
                  {/* <FaTwitter style={styles.icon} /> */}
                  <View>
                    <Text style={styles.socialMediaTitle}>Twitter</Text>
                    <Text style={styles.socialMediaDetail}>@yourtwitter</Text>
                  </View>
                </View>
                <View style={styles.socialMediaItem}>
                  {/* <FaInstagram style={styles.icon} /> */}
                  <View>
                    <Text style={styles.socialMediaTitle}>Instagram</Text>
                    <Text style={styles.socialMediaDetail}>@yourinstagram</Text>
                  </View>
                </View>
              </View>
              {/* Add other sections as needed */}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

const styles = {
  page: {
    padding: 20,
  },
  container: {
    maxWidth: 600,
    margin: 'auto',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#00959c',
  },
  profileInfo: {
    backgroundColor: '#e7f3f3',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  surname: {
    fontWeight: 'normal',
  },
  profession: {
    fontSize: 18,
    fontWeight: 'light',
    textTransform: 'capitalize',
  },
  main: {
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  subSection: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    fontSize: 16,
    marginRight: 5,
    color: '#00959c',
  },
  contactTitle: {
    fontWeight: 'bold',
  },
  contactDetail: {
    color: 'gray',
  },
  aboutText: {
    fontSize: 12,
    lineHeight: 1.5,
  },
  socialMediaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  socialMediaTitle: {
    fontWeight: 'bold',
  },
  socialMediaDetail: {
    color: 'gray',
  },
  // Define styles for other sections as needed
};

export default Cv1;