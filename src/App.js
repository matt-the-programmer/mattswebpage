import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Bio from './Bio/Bio';
import AboutMe from './AboutMe/AboutMe';
import './Pictures/backofresume.png';
import './Pictures/frontofresume.png';





class App extends Component {
state = {
  persons: [
    { name: 'Matt', age: 24 },
     { name: 'Jack', age: 24 },
     { name: 'Max', age: 29 }
  ]
  
}
switchNameHandler = (newName) => {
//  console.log('Was clicked')
// DONT DO THISthis.state.persons[0].name = 'Matthew';
this.setState({
  persons: [
    {name: newName, age: 24},
    {name: 'Jack', age: 24},
    {name: 'Maximillian', age: 29}
  ]

})
}


  
 


  render() {
    const style = {
     backgroundColor: 'white',
     font: 'inherit',
     border: '3x solid blue',
     padding: '8px',
     cursor: 'pointer'
    };
   

    return (
      <div>
      <div className="App">
       <h1 className="Headerstyle"
       >Hire Me!!</h1>
       <p className="Intro">Welcome to all things Matt</p>
       <button onClick="changepage" className="page2btn">Press for Page 2</button>
        <button className="page1btn">Press for Page 1</button>
        
        <Bio />
        <AboutMe />
       <img className="page2" hidden="true" src={require('./Pictures/backofresume.png')} />
        <img className="page1"  src={require('./Pictures/frontofresume.png')} />
       
        
        
    
      </div>
     
       
      </div>
      
    );
  }
}

export default App;
