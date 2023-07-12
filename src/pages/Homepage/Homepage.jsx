import React, {useEffect, useState} from 'react'
import './Homepage.css'
import banner from '../../assets/banner.jpg'
import axios from 'axios'


function Homepage() {

    // create state for page number
    const [photos, setPhotos] = useState([])
    const pageNum = 1;

// Make a api call to site
useEffect(() => {

  const fetchData = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY
      const response = await fetch(`https://api.pexels.com/v1/curated?page=${pageNum}&per_page=12`, {
        headers: {
          Authorization: apiKey
        }
      });
      const jsonData = await response.json();
      setPhotos(jsonData.photos)
     console.log(photos)
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();
}, []);


  return (
    <div className='homepage-container'>
      <button>Prev</button>
      <button>Next</button>
      {/* <img src={banner} className='homepage-banner'/> */}
    </div>
    
  )
}

export default Homepage