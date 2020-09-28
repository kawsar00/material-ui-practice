import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import axios from 'axios';
import Recharts from './Components/Recharts/Recharts';

//like icon import
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';



function App() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=75cddc84801547dbbb040722837898e6'

    axios(url)
      .then(data => setArticles(data.data.articles))
  }, [])

  const [user, setUser] = useState([])
  useEffect(()=>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setUser(data.results[0]))
  }, [])

  //like icon code goes here
  const [likeColor, setLikeColor] = useState('')
  const handleLike = () => {
    // const color = likeColor ? '' : 'primary';
    // setLikeColor(color)
    setLikeColor(likeColor ? '' : 'primary')
  }
  
  return (
    <div>
      <Navbar></Navbar>
      <Recharts></Recharts>
      <h1>Headline: {articles.length}</h1>
      {
        // <h1>Name: {user.name && user.name.first}</h1> or,
        <h1>Name: {user.name?.first}</h1>
      }

      <ThumbUpAltIcon onClick={()=> handleLike() } color={likeColor}></ThumbUpAltIcon> <br/> <br/> {/* like icon */}

      {/* if we want to set function in one line */}
      <ThumbUpAltIcon onClick={()=> setLikeColor(likeColor ? '' : 'primary')} color={likeColor}></ThumbUpAltIcon> <br/> <br/> {/* like icon */}
      

    
      {
        articles.map(news => <News news={news}></News>)
      }

    </div>
  );
}

export default App;
