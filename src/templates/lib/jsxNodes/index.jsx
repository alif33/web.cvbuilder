import { View, Text, Image, Svg, Circle } from "@react-pdf/renderer"

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
          <View style={{ position: 'relative'}} key={index}>
            <View style={{ marginRight: 3 }}>
              <Image style={{ width: 4, height: 4 }} src="/icons/aoc/dots.png"/>
            </View>
            <View><Text style={{ fontSize: 4, color: '#FFFFFF'}}>g</Text></View>
            <View style={{ marginTop: 20, paddingTop: 20, paddingLeft: 20}}>
              <Text style={{ marginLeft: 5 }}>{jsxNodes(node.data)}</Text>
              <Text>{'\n'}</Text>
              <Text style={{ lineHeight: 0.2 }}>{'\n'}</Text>
            </View>
          </View>
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

