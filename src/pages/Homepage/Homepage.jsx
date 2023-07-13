import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import PhotoCard from '../../components/PhotoCard/PhotoCard'


function Homepage() {

    // create state photos to be stored
    const [photos, setPhotos] = useState([])
    let pageNum = Math.floor(Math.random() * 50);
    const [query, setQuery] = useState('mexicans eating')
    console.log(query)
   
// Make a api call to site
useEffect(() => {


  const fetchData = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY
      const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${pageNum}&per_page=80`, {
        headers: {
          Authorization: apiKey
        }
      });
      const jsonData = await response.json();
      // console.log(jsonData.photos)
      setPhotos(jsonData?.photos)
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();
}, []);

// `https://api.pexels.com/v1/search?query=${cat}&page=${pageNum}&per_page=80`
// https://api.pexels.com/v1/curated?page=80&per_page=40


  return (
    <div>
     <div className='homepage-container'>
      {
        photos.map(item => <PhotoCard key={item.id} photo={item}/>)
      }
      </div>
    </div>
    
  )
}

export default Homepage