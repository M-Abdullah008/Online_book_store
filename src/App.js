import logo from './logo.svg';
import Details from './cmpnts/Details';
import Fee from './cmpnts/Fee';
import './App.css';
import React from 'react';
import bookImg from './cmpnts/bookImg';
import review from './cmpnts/review';

class App extends React.Component{
    constructor(){
      super();
      this.state = { 
        name:"Online Book Store",
        mentor:"Developed by Abdullah"
    };
    }
    

  // this.state={
  //   name:"Database programming",
  //   duration:"3 hrs",
  //   price:"$9"
  // };
  render(){
  return (
    <div className="App">
      <div className='app_section'>

      
      {/* name=<b>{this.state.name}</b>
      <br></br>
      duration=<b>{this.state.duration}</b> */}
      <bookImg />
      <review />
      <Details name={<h2 style={{marginBottom:"8px"}}>{this.state.name}</h2>} mentor={this.state.mentor} duration={this.state.duration}/>
      {/* <Fee price={this.state.price}/> */}
      </div>
    </div>
  )
    }

    
}


export default App;
