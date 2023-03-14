
let api_key = 'a'
export default function getDataNasa(){
    return  fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
}