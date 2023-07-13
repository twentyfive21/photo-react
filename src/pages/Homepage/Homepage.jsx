import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import PhotoCard from '../../components/PhotoCard/PhotoCard'


function Homepage() {

    // create state for page number
    const [photos, setPhotos] = useState([])
    let pageNum = 1;

// Make a api call to site
useEffect(() => {

  const fetchData = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY
      const response = await fetch(`https://api.pexels.com/v1/curated?page=${pageNum}&per_page=80`, {
        headers: {
          Authorization: apiKey
        }
      });
      const jsonData = await response.json();
      console.log(jsonData.photos)
      setPhotos(jsonData?.photos)
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();
}, []);

// incrementing pages 
const prevBtn = () => {
  if(pageNum === 1) {
    pageNum = 1;
  } else if (pageNum > 1) {
    pageNum--
  }
}

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