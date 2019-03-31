import React from 'react';
import ReactDOM from 'react-dom';
const Main = () => {

    const ComponentA = ReactDOM.createPortal(
      <h1>HAPPY</h1>,
      document.body,
    )
  
    return (
      <div>
        <ComponentA />
      </div>
    )
  }
const Child = (props) => {
    console.log(props);
    return (
        <div id={props.name}>
    <Main />
         {props.children}
         
         </div>
    );
}
export default Child;
