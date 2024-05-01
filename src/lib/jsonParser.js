export const parseJSON = (data) => {
    return data.map(item => {
      if (item?.description && item?.description.trim() !== ""){
        const parsed = JSON.parse(item.description)
        return { ...item, description: parsed }
      }
      return item
    })
}