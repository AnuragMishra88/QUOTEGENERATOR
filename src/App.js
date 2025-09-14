// import logo from './logo.svg';
import './App.css';
import Quotes from './components/script';
import {  useEffect,  useState } from 'react';


function App() {
  const[quote,setQuote]=useState("Click on Generate Quotes");
  const[loading,setLoading]=useState(false);


  const fetchQuote=async ()=>{
    try{
      setLoading(true);
      const res=await fetch(`https://api.api-ninjas.com/v1/quotes`, {
      method: "GET",
      headers: {
      "X-Api-Key": "GM2epMor0YCzUQ9H33EPiA==zjqn1U76B64wKPE5"
      }
      });
      const data=await res.json();
      setQuote(data);
      setLoading(false);
    }
    catch(err){
      console.log(err);
    }

  };

  useEffect(()=>{
    fetchQuote();
  },[])

  const fetching=()=>{
    fetchQuote();
  }



  return (
    <div className="App">
      <Quotes quote={quote} fetching={fetching} loading={loading}></Quotes>
    </div>
  );
}

export default App;
