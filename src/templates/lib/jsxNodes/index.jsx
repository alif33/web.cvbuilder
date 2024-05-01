import { View, Text } from "@react-pdf/renderer"

export default function jsxNodes(nodes){
    return nodes.map((node, index) => {
      if (node.type === 'text') {
        return <Text key={index}>{node.data}</Text>
      } else if (node.type === 'ul') {
        return (
          <View key={index}>
            {jsxNodes(node.data)}
          </View>
        )
      } else if (node.type === 'li') {
        return (
          <Text key={index} style={{ marginLeft: 10 }}>
            {jsxNodes(node.data)}
          </Text>
        )
      } else if (node.type === 'p') {
        return (
          <Text key={index}>
            {jsxNodes(node.data)}
          </Text>
        )
      }else if(node.type === 'span'){
        return (
            <Text key={index}>
              {jsxNodes(node.data)}
            </Text>
          )
      } else if (node.type === 'b') {
        return (
          <Text key={index}>
            <Text style={{ fontWeight: 'bold' }}>{jsxNodes(node.data)}</Text>{' '}
          </Text>
        )
      } else if (node.type === 'i') {
        return <Text key={index} style={{ fontStyle: 'italic' }}>{jsxNodes(node.data)}</Text>;
      }
      return null
    })
}