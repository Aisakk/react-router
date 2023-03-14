
const private_key = 'a'
const api_key = 'a';
const md5_hash_key= 'a';

  
export default function getDataComics(){
    return fetch(`https://gateway.marvel.com/v1/public/comics?ts=1678798685238&apikey=${api_key}&hash=${md5_hash_key}`)
   
}