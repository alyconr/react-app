
import './App.css';
import Navbar from './components/navbar';
import Inputsearch from './components/inputsearch';
import Cards from './components/cards';
import info from './data/tweets.json';







function App() {
const tweetsComponents = info.tweets.map( ( tweet) => {
  return (
   
    <Cards id={tweet.id} key={tweet.id} title={tweet.nickname} description={tweet.post} img={tweet.images} time={tweet.time} likes={tweet.likes} comments={tweet.comments} /> 
  );

});
  return (
    <div className="App">
     <Navbar/>
     <Inputsearch/>
     <div  className="row row-cols-1 row-cols-md-2 g-4 m-2">
       {tweetsComponents}
     </div>
   </div>
  );
}

export default App;
