export function NodeParser(html){
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const processNodes = (nodes) => {
        return Array.from(nodes).map(node => {
          if (node.nodeType === Node.TEXT_NODE) {
            return { type: 'text', data: node.textContent.trim() };
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const type = node.nodeName.toLowerCase();
            const children = processNodes(node.childNodes);
            return { type, data: children };
          }
          return null;
        }).filter(Boolean);
    };
      
      // Extract information from the parsed document
    const rootElements = Array.from(doc.body.children);
    const output = rootElements.map(rootElement => ({
        type: rootElement.nodeName.toLowerCase(),
        data: processNodes(rootElement.childNodes),
    }));
    return output
}