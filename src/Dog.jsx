import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './index.css';
const Dog = () => {

    

    const [dogImg,setDogImg] = useState('')

    useEffect(()=>{
        getRandomDog()
    },[])

    const getRandomDog = async () =>{
        axios.get("https://dog.ceo/api/breeds/image/random")
        .then(response =>{
            setDogImg(response.data.message)
        }).catch(err =>{
            console.log("Błąd ładowania psa... " + err.message);
        })
    }

  return (
    <div style={{backgroundColor:'#a5927b',alignItems:'center',textAlign:'center'}}>
        
        <h3>Psy</h3>
        <div style={{maxHeight:'250px',minHeight:'250px'}}> 
            <img src={dogImg} style={{maxHeight:'250px',minHeight:'250px'}} />
        </div>
        
        <button className={"glow-on-hover"} onClick={getRandomDog}>Nowy pies</button>
        
        <div style={{border: "solid 3px black", margin:'1rem 1rem 1rem 1rem',paddingBottom:'1rem'}}>
            <div>Name: react_dogs_module</div>
            <div>Framework: react</div>
            <div>Language: JavaScript</div>
            <div>CSS: Empty CSS</div>
        </div>
        
    </div>
  )
}

export default Dog