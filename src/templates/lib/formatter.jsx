import _ from "lodash"
export function getPosition(name, layout) {
    const position = _.findKey(layout, (sections) => sections.includes(name))
    return position ? position.endsWith('Left') ? 'left' : 'right' : null

}