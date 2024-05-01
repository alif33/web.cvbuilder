import { 
    Document,
    Page, 
    View,  
    Text, 
    Svg,
    Line,
    StyleSheet 
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        width: 794,
        height: 1122,
        backgroundColor: '#E4E4E4',
        // padding: 20,
    },
    header: {
        width: '100%',
        textAlign: 'center',
        paddingBottom: 5,
        backgroundColor: '#0C6BA0',
        opacity: 0.2
    },
    headerTitle: {
        fontSize: 24,
        opacity: 1
    },
    headerSubTitle: {
        fontSize: 18,
        paddingTop: 8,
        opacity: 1
    },
  });

// Create Document Component
const MyDocument = () => (
  <Document>
     <Page size={[794, 1122]} style={styles.page}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Ismail Hosen Alif</Text>
            <Text style={styles.headerSubTitle}>Junior Software Engineer</Text>
        </View>
        
        <Svg height="3" width="100%">
            <Line
                x1="0"
                y1="0"
                x2="1000"
                y2="0"
                strokeWidth={2}
                stroke="rgb(0,0,0)"
            />
        </Svg>
        
       
    </Page>
  </Document>
);

export default MyDocument