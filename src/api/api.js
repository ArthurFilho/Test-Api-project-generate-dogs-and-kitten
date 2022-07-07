import axios from "axios";
//Kitten
export async function apiKitten(){
const {data} = await axios.get("https://placekitten.com/", {
    responseType:"blob"
})
return URL.createObjectURL(data)
};
export async function reqKitten(w = 200, h = 300 ){
    const {data} = await axios.get(`https://placekitten.com/${w}/${h}`, 
    { responseType:"blob"})
return URL.createObjectURL(data)
};
//Dog
export const apiDog = axios.create({
    baseURL: 'https://api.thedogapi.com/v1/images/',
    headers: {
        "x-api-key": "690f79eb-f40d-43f2-b33c-ef3738d30637"
    }
});
 export async function reqDog(){
const {data} = await apiDog.get(`search`)
return data
 };



