export function filterList(list, keys) {
    return list.map(obj => {
        const newObj = {}
        keys.forEach(key => {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                newObj[key] = obj[key]
            }
        });
        return newObj
    });
}
