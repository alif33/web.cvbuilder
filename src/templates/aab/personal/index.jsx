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
            <View style={{ paddingLeft: 10, paddingTop: 10, marginLeft: 10 }}>
                {
                    personal?.fatherName && personal?.fatherName?.length>0 && (
                        <Text>{'Father\'s Name: '}{personal.fatherName}</Text>
                    )
                }
                {
                    personal?.motherName && personal?.motherName?.length>0 && (
                        <Text>{'Mother\'s Name: '}{personal.motherName}</Text>
                    )
                }
                {
                    personal?.permanentAddress && personal?.permanentAddress?.length>0 && (
                        <Text>{'Permanent Address: '}{personal.permanentAddress}</Text>
                    )
                }
                {
                    personal?.nid && personal?.nid?.length>0 && (
                        <Text>{'National ID No: '}{personal.nid}</Text>
                    )
                }
                {
                    personal?.religion && personal?.religion?.length>0 && (
                        <Text>{'Religion: '}{personal.religion}</Text>
                    )
                }
                {
                    personal?.dob && personal?.dob?.length>0 && (
                        <Text>{'Date of Birth: '}{personal.dob}</Text>
                    )
                }
                {
                    personal?.sex && personal?.sex?.length>0 && (
                        <Text>{'Sex: '}{personal.sex}</Text>
                    )
                }
                {
                    personal?.maritalStatus && personal?.maritalStatus?.length>0 && (
                        <Text>{'Marital Status: '}{personal.maritalStatus}</Text>
                    )
                }
                {
                    personal?.bloodGroup && personal?.bloodGroup?.length>0 && (
                        <Text>{'Blood Group: '}{personal.bloodGroup}</Text>
                    )
                }
            </View>
        </View>
    )
}

