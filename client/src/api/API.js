export const endPoint = 'http://localhost:3000'

export var district =[]

export function getDistrict() {
    return fetch(endPoint + '/district')
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            district = data
            console.log(district)
        }).catch(console.error)
}