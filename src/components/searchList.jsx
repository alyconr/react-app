import info from '../data/tweets.json'
import Cards from './cards';






function Searchlist ({tweetSearch, }) {

    const tweetsComponents = info.filter( tweet => {
        
        if (tweetSearch  === '') {
          return false;
        } else if 
        (tweet.post.toLowerCase().includes(tweetSearch.toLowerCase()) || tweet.nickname.toLowerCase().includes(tweetSearch.toLowerCase())) {
          return (tweet);
        }
        return false;
           }).map( ( tweet, index) => {
        return (
         
          <Cards  key={index} title={tweet.nickname} description={tweet.post} img={tweet.images} time={tweet.time}  comments={tweet.comments} /> 
        );
      
      });

        

      return (
          
          
              <div  className="row row-cols-1 row-cols-md-2 g-4 m-2">
              {tweetsComponents}  
              
              </div>
                
         
      );
}

export default Searchlist;