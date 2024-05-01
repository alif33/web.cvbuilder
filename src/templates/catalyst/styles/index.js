const lightGray = "#F5F5F5"
const black = "#363636"
const gray = "#B1B1B1"

const styles= StyleSheet => StyleSheet.create({
    page: {
      backgroundColor: "#fff",
      fontFamily: "Epilogue",
      display: "flex",
      flexDirection: "row",
    },
    leftSection: {
      width: "40%",
      height: "100%",
      backgroundColor: lightGray,
      padding: "30px ",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    rightSection: {},
    profilePic: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      margin: "0 auto",
    },
    profileName: {
      color: black,
      fontSize: "24px",
      textAlign: "center",
      textTransform: "uppercase",
      marginTop: "20px",
    },
    profation: {
      color: black,
      fontSize: "12px",
      marginTop: "10px",
      textAlign: "center",
    },
    sectionTitle: {
      color: black,
      fontSize: "16px",
      fontWeight: "500",
      paddingLeft: "30px",
      marginTop: "30px",
      paddingBottom: "8px",
      textTransform: "uppercase",
    },
    title: {
      fontSize: "14px",
      fontWeight: "500",
      textTransform: "uppercase",
    },
    subTitle: {
      fontSize: "12px",
      fontWeight: "500",
      margin: "3px 0 10px 0",
      textTransform: "capitalize",
    },
    content: {
      fontSize: "10px",
      lineHeight: "1.5px",
    },
  });

export default styles