import React, {useContext, useEffect, useState} from 'react'
import './Homepage.css'
import PhotoCard from '../../components/PhotoCard/PhotoCard'
import { ThemeContext } from '../../contexts/ThemeContext';
import { SearchContext } from '../../contexts/SearchContext';

function Homepage() {
    const {darkMode, setDarkMode} = useContext(ThemeContext)
    const {userInput, pageNum, setPageNum} = useContext(SearchContext)
    // total_results object holds the total amount of photos that comes back on a search
    // create state photos to be stored
    const [photos, setPhotos] = useState([])
    // sets 0 as initial and then updates to the total amount of pages available to display 
    const [totalPages, setTotalPages] = useState(0)
    
    // navigates through pages 
      const nextPage = () => {
        scrollToTop()
        pageNum < totalPages ? setPageNum(pageNum + 1) : setPageNum(totalPages)
      }

      const prevPage = () => {
        scrollToTop()
        pageNum == 1 ? setPageNum(1) : setPageNum(pageNum - 1)
      }
     
      const scrollToTop = () => {
        window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
}

// Make a api call to site for search query 
useEffect(() => {
  const apiKey = import.meta.env.VITE_API_KEY
  
  if(userInput) {
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.pexels.com/v1/search?query=${userInput}&page=${pageNum}&per_page=16`, {
        headers: {
          Authorization: apiKey
        }
      });
      const jsonData = await response.json();
      // console.log(jsonData)
      setPhotos(jsonData?.photos)
      setTotalPages(Math.ceil(jsonData?.total_results / 16))
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();
}
// Api call for curated photos
else {
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.pexels.com/v1/curated?page=${pageNum}&per_page=16`, {
        headers: {
          Authorization: apiKey
        }
      });
      const jsonData = await response.json();
      // console.log(jsonData)
      setPhotos(jsonData?.photos)
      // since there are 8000 photos diving by 80 gives us 100pgs for curated 
      setTotalPages(Math.ceil(jsonData?.total_results / 16))
      // console.log("curated" + totalPages)
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();
}
}, [userInput, pageNum]);


  return (
    <div>
     <div className={darkMode?'homepage-container homepage-dark' : 'homepage-container'}>
      {
        photos?.map(item => <PhotoCard key={item.id} photo={item}/>)
      }
      </div>
      <div className={darkMode?'pages pages-dark' : 'pages'}>
        <p>{pageNum} out of {totalPages}</p>
      <div className='homepage-btn'>
        <button onClick={prevPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
      </div>
    </div>
    
  )
}

export default Homepage