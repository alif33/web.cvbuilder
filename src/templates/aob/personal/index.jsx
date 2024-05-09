/* eslint-disable react/prop-types */
import { View, Text, StyleSheet } from "@react-pdf/renderer"
import Heading from "../heading"

const styles = StyleSheet.create({
    summary: {
        fontSize: 10, 
        lineHeight: 1.3, 
    }
})

export default function Personal({ data }){
    const { personal } = data

    return(
        <View style={{ marginTop: 10, lineHeight: 1.3 }}>
            <Heading title="Personal Information" height={10} width={12} img="/icons/aoc/personal.png"/>
            <View style={{ paddingLeft: 10, paddingTop: 10 }}>
                <Text>{'Father\'s Name: '}{personal.fatherName}</Text>
                <Text>{'Mother\'s Name: '}{personal.motherName}</Text>
                <Text>{'Permanent Address: '}{personal.permanentAddress}</Text>
                <Text>{'Nationality: '}{personal.nationality}</Text>
                <Text>{'National ID No: '}{personal.nid}</Text>
                <Text>{'Religion: '}{personal.religion}</Text>
                <Text>{'Date of Birth: '}{personal.dob}</Text>
                <Text>{'Sex: '}{personal.sex}</Text>
                <Text>{'Marital Status: '}{personal.maritalStatus}</Text>
                <Text>{'Blood Group: '}{personal.bloodGroup}</Text>
            </View>
        </View>
    )
}

