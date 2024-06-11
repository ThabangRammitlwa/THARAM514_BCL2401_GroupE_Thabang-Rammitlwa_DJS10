
import { useState,useEffect } from 'react'


function App() {
const [posts,setPosts] =useState([]);
const [error , setError] =useState(null);

useEffect(()=>{
const fetchData = async()=>{
  try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok){
        throw new Error (`Error fetching posts:${response.status}`);
      }
      const data = await response.json();
      setPosts(data);
  }catch (error) {
  setError(error);
  }
}
fetchData();
},[])
return (
  <div className="App">
    {error ? (
      <p>Error: {error.message}</p>
    ) : (
      posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))
    )}
  </div>
);
}

export default App;
