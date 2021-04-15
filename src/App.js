import logo from './logo.svg';
import './App.css';
import React from 'react'


let marked = require("marked");
class App extends React.Component{
   
   state={
      markdown : ""
   }
   updateMarkdown = function (markdown) {
    this.setState({markdown});
  }

  
   


   render(){
      return(
       <div className="App container">
        <center>
        <div>
          {/* <FormGroup controlId="formControlsTextarea"> */}
          <h1>Markdown Previewer</h1>
             <h2>Markdown Input </h2>
         <textarea placeholder="Enter Markdown" rows="10" cols="45" className="input" value={this.state.markdown} onChange={(event)=>this.updateMarkdown(event.target.value)}>
             
         </textarea>
        </div>
        </center>
        <center>
        <div>
          <h2>Markdown Output</h2>
          <div className="output" style={{border : '1px solid black',height:'230px',width:'360px'}}>
            <div dangerouslySetInnerHTML={{__html:marked(this.state.markdown)}}>
            </div>
          </div>
        </div>
        </center>
        <footer>
    <div className="footer" id="footer">
      Made with <span className="heart" style={{color:"rgb(231, 28, 62)"}}>  &#10084; </span> BY | <a href="http://mohdsaqib.epizy.com/" style={{color:"white"}}> SAQIB </a> <br/>
      +91 95480 97513 <br/>
      mohdsaqibnavodaya@gmail.com
        </div>
    </footer>

       </div>
     )




  }
}
export default App;