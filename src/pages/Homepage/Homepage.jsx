import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import PhotoCard from '../../components/PhotoCard/PhotoCard'


function Homepage() {
    // total_results object holds the total amount of photos that comes back on a search
    // create state photos to be stored
    const [photos, setPhotos] = useState([])
    // setting state for query search
    const [query, setQuery] = useState('')
    // sets page one as default state for onload of both api fetches
    const [pageNum, setPageNum] = useState(1)
    // sets 0 as initial and then updates to the total amount of pages available to display 
    const [totalPages, setTotalPages] = useState(0)

// Make a api call to site for search query 
useEffect(() => {

  const apiKey = import.meta.env.VITE_API_KEY
  
  if(query) {
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&page={pageNum}&per_page=80`, {
        headers: {
          Authorization: apiKey
        }
      });
      const jsonData = await response.json();
      console.log(jsonData)
      setPhotos(jsonData?.photos)
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();
}
else {
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.pexels.com/v1/curated?page=${pageNum}&per_page=80`, {
        headers: {
          Authorization: apiKey
        }
      });
      const jsonData = await response.json();
      console.log(jsonData)
      setPhotos(jsonData?.photos)
      setTotalPages(jsonData?.total_results)
      console.log(totalPages)
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();
}
}, [query]);


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