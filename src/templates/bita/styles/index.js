const styles= StyleSheet => StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        fontFamily: 'Epilogue',
    },
    topBar: {
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
    },
    header: {
        width: '100%',
        textAlign: 'center',
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
        fontSize: 11, 
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

export default styles