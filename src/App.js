
import './App.css';
import Navbar from './components/navbar';
import Inputsearch from './components/inputsearch';
import Searchlist from './components/searchList';
import React from "react";
import Profile from './components/profile';
import Cards from './components/cards';
import info from './data/tweets.json'
import _ from 'lodash';

class App extends React.Component {
  state= {
    tweetSearch: '',
    showProfile: false,  
    showTweets: false,
    progresState: 0,
    barBind: false,
  
  };

  tickProgress() {  //progress bar
    if (this.state.progresState < 100) {
      this.setState({ progresState: this.state.progresState + 4});
      setTimeout(() => this.tickProgress(), 200);
    }
  }
  increaseProgress(value) { 
    this.setState({ progresState: this.state.progresState + value });
  }
    
  componentDidMount() {
    this.tickProgress();
      
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }
  changeBar() {
    this.setState({ barBind: !this.state.barBind });
  }

  changeTweet(newTweet) { 
    this.setState({
      tweetSearch: newTweet,  });
 }


changeProfile() {
    this.setState({
      showProfile: !this.state.showProfile ,
    
    });
  }

  changeThreepics() {
    this.setState({
      showTweets: !this.state.showTweets ,
    });
  }

  render () {
  
    const tweetComponents = info.map ( (tweet, index) => {
      return (
        
          <Cards  key={index} title={tweet.nickname} description={tweet.post} img={tweet.images} time={tweet.time}  comments={tweet.comments} /> 
             );
    });
    const delaySearchTweet = _.debounce((tweetSearch) => { this.changeTweet(tweetSearch)}, 2000); 

    
    return (
      <div className="App">
          <Navbar 
              onLogoClick={(showTweets) =>
                 {this.changeThreepics (showTweets);}} showTweets={this.state.showTweets}

              onClickProfile={(showProfile) =>
               { this.changeProfile(showProfile); }}  showProfile={this.state.showProfile}
               
           />
   
           <Inputsearch 
           onChangeBar={(barBind) => {this.changeBar(barBind); }} barBind={this.state.barBind}
               onSearch={delaySearchTweet}
           />
         
         {this.state.barBind ? <div className="progress-bar loadbars" style={{ width:  `${this.state.progresState}%` }}>Searching Tweet </div>   : null}       

           
         {this.state.showTweets ? <div className="row row-cols-1 row-cols-md-2 g-4 m-2"> {tweetComponents} </div> : null}
        
           <Searchlist  tweetSearch={this.state.tweetSearch} />  

         {this.state.showProfile ? <Profile showProfile={this.state.showProfile}  /> : null}
   
     </div>
   

    );
  }
}

export default App;
