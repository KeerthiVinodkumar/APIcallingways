
import './App.css';
import { useEffect,useState } from 'react';
function App() {
  const [data,setdata]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then(
        response=>response.json()
    ).then(json=>setdata(json))
})
  return (
    <div className="App">
      {/* {data.map(item=><li key={item.id}>{item.title}</li>)} */}
      {data.map(item=><div class="card" style={{width: "18rem"}}>
  
  <div class="card-body">
    <h5 class="card-title" key={item.id}>{item.title}</h5>
    <p class="card-text">{item.body}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>)}
      
    </div>
  );
}

export default App;
