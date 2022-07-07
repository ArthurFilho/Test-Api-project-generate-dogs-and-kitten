import { useEffect, useState } from "react";
import { reqKitten } from "./api/api";
import { reqDog } from "./api/api";
import './App.css';
import { Container } from "./componentes/container";

function App() {
    
  
    const [imageKitten, setImageKitten] = useState();
    const [imageDog, setImageDog] = useState();
   
//Kitten

async function generateImagesKitten(){
  const response = await reqKitten(Math.floor(Math.random() * (500 - 100)) + 100, Math.floor(Math.random() * (500 - 100)) + 100)
  console.log(response)
  setImageKitten(response);
};
 
      const getKitten = async ()=>{
      const response = await reqKitten()
      console.log(response)
      setImageKitten(response);
      }
      
      useEffect(() =>{
        getKitten();
      },[])
    

//Dog
      async function generateImagesDog(){
        const response = await reqDog()
        console.log(response)
        setImageDog(response[0].url);
      };


     
    async function getDog(){
    try{
      const data = await reqDog()
      const image = data[0].url;
      setImageDog(image);

     }catch(err){
      console.log(err);
     }
    
    };
 
    useEffect(()=>{
      getDog() 
    }, [])


  return (
   <div className="allItems">
    <Container image={imageDog} generateImages={generateImagesDog} name="Dog" />
    <Container image={imageKitten}  generateImages={generateImagesKitten} name="Kitten"  />
    </div>   
  )
}

export default App