import React, { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch("/api", 
     {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      })
    .then((res)=> res.json())
   
    .then((data)=> setData(data.message))
    .catch(err => {
          // Do something for an error here
          console.log("Error Reading data " + err);
        });
  }, [])
  return (
    <div >
     <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
