import { View, Text, StyleSheet } from "@react-pdf/renderer"
import { NodeParser } from "../../../lib/nodeParser"
import jsxNodes from "../../lib/jsxNodes"

const styles = StyleSheet.create({
    description: {
        fontSize: 10,
    },
    heading: {
        fontSize: 10,
        fontWeight: 'semibold'
    }
})

export default function Experience({ heading, description }){
    const __ = NodeParser(description) || false

    return(
        <View wrap={false}>
            <Text style={styles.heading}>{heading}</Text>
            {__ && <Text style={styles.description}>{jsxNodes(__)}</Text>}
        </View>
    )
}