
import axios from 'axios'
import {useQuery} from 'react-query'
import React, { useEffect, useState } from 'react'
import ImageTile from './components/ImageTile'
import Search from './components/Search'
import './api.css'
import Loader from './components/Loader'

// function Api() {
//   const url = 'https://best-manga-anime-wallpapers.p.rapidapi.com/';
//          const API_KEY = "563492ad6f91700001000001c1622d751f0548c0b97f39233334b878"

//          const options = {
//           method: 'GET',
//           headers: {
//             'X-RapidAPI-Host': 'best-manga-anime-wallpapers.p.rapidapi.com',
//             'X-RapidAPI-Key': '445c0b06e2msh6365b6f1f5dc424p17f216jsn406704a79446'
//           }
//         };

//     const char = async ()=>{
//         const res = await fetch(url , options)
//            return res.json();
//       }

    
//       const {data, status , error} = useQuery("chars" , char)
//         console.log(data)
//         console.log(status)
//         console.log(error)

//   return (
//     <div>Api
//         {data?.popular.map((res) =>{ <div>{res.thumbnail}</div> })}
//     </div>
//   )
// }

function Api(){

  const [query , setquery] = useState('cat')

  
     const char = async ()=>{ 
    const url = `https://api.pexels.com/v1/search?query=${query}`

     const auth = {
       headers: {  'Authorization' : '563492ad6f91700001000001c1622d751f0548c0b97f39233334b878'}
     }
           const res = await fetch(url ,auth)
           return res.json()
       }

        const {data, isLoading} = useQuery(["chars", query] , char)
        console.log(isLoading)

return(
  <>
  
        <div className='box'>
      <input className='input' placeholder='search image' type="text" onChange={ (e) => setquery(e.target.value)}/>
    </div>   
     <h2 className='search-item'>{query}</h2>
    <div className='clouds'></div>
    {isLoading? <span className='load'><Loader/></span>:      
   <div className='img' >
    
        {data?.photos?.map((wall) => {return <ImageTile imgsrc={wall?.src?.medium}/>})}
      </div>  }
 
  
  </>
)

  }


export default Api