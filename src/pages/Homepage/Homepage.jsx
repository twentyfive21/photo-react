import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import PhotoCard from '../../components/PhotoCard/PhotoCard'


function Homepage() {
    // total_results object holds the total amount of photos that comes back on a search
    // create state photos to be stored
    const [photos, setPhotos] = useState([])
    const [query, setQuery] = useState('god')
    const [pageNum, setPageNum] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

// make api call when page loads for curated photos 
    useEffect(() => {
      // setPageNum(Math.floor(Math.random() * 3)); 
      const fetchData = async () => {
        try {
          const apiKey = import.meta.env.VITE_API_KEY
          const response = await fetch(`https://api.pexels.com/v1/curated?page=${pageNum}&per_page=80`, {
            headers: {
              Authorization: apiKey
            }
          });
          const jsonData = await response.json();
          console.log(jsonData)
          setPhotos(jsonData?.photos)
          setTotalPages(jsonData.total_results)
          console.log(totalPages)
        } catch (err) {
          console.error(err);
        }
      };
      fetchData();
    }, []);

// Make a api call to site for search query 
// useEffect(() => {

//   // setPageNum(Math.floor(Math.random() * 3)); 
//   // console.log(pageNum) 
  
//   const fetchData = async () => {
//     try {
//       const apiKey = import.meta.env.VITE_API_KEY
//       const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&page={pageNum}&per_page=80`, {
//         headers: {
//           Authorization: apiKey
//         }
//       });
//       const jsonData = await response.json();
//       console.log(jsonData)
//       setPhotos(jsonData?.photos)
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   fetchData();
// }, [query]);

// `https://api.pexels.com/v1/search?query=${cat}&page=${pageNum}&per_page=80`



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