
import './App.css';
import Navbar from './components/navbar';
import Inputsearch from './components/inputsearch';
import Searchlist from './components/searchList';
import React from "react";
import Profile from './components/profile';
import Cards from './components/cards';
import info from './data/tweets.json'
import _ from 'lodash';
import Login from './components/login';
import axios from 'axios';




class App extends React.Component {
  state= {
    tweetSearch: '',
    showProfile: false,  
    showTweets: false,
    progresState: 0,
    barBind: false,
    username: '',
    password: '',
  
  
  };

  tickProgress() {  //progress bar
    if (this.state.progresState < 100) {
      this.setState({ progresState: this.state.progresState + 1 });
      setTimeout(() => this.tickProgress(), 20);
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
// http request to get data from server Three Pics
 nameHandleChange = (name) => {
  this.setState({ username: name });

  }
  passwordHandleChange = (password) => {

    this.setState({ password: password });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const data = { username: this.state.username, password: this.state.password };
    const headers = { 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer'   + localStorage.getItem('token')
    };
// axios request to post data to server
    axios.post(`http://localhost:5000/item`, data, { headers: headers })
    .then(res => {
      console.log(res);
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
     if (res.data.success === true) {
      this.setState({ showProfile: true });
     
      }
    })
    .catch(err => {
      console.log(err);
    });
  }

 

  
  changeBar() {
    this.setState({ barBind: !this.state.barBind });
  }

  changeTweet(newTweet) { 
    this.setState({
      tweetSearch: newTweet,
      showProfile: false,
      showTweets: false,
      });
 }





changeProfile() {
    this.setState({
      showProfile: !this.state.showProfile ,
      tweetSearch: '',
      showTweets: false,
      
    
    });
  }

  changeThreepics() {
    this.setState({
      showTweets: !this.state.showTweets ,
      tweetSearch: '',
      showProfile: false,
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
        
         <Login 
          onNameHandleChange={(username)  => {this.nameHandleChange(username); }}
          onPasswordHandleChange={(password) => {this.passwordHandleChange(password); }}
         onSubmitChange={(event) => {this.handleSubmit(event); }}
          />
           
         {this.state.showTweets ? <div className="row row-cols-1 row-cols-md-2 g-4 m-2"> {tweetComponents} </div> : null}

         
        
           <Searchlist  tweetSearch={this.state.tweetSearch} />  

         {this.state.showProfile ? <Profile showProfile={this.state.showProfile}  /> : null}
   
     </div>
   

    );
  }
}

export default App;
