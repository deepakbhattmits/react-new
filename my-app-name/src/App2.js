import React, { Component } from 'react'; 
import Modal, {closeStyle} from 'simple-react-modal'
 
class App2 extends Component {
 
  constructor(){
    super()
    this.state = {}
  }
 
  show(){
    this.setState({show: true})
  }
 
  close(){
    this.setState({show: false})
  }
 
 
  render(){
    return (
      <div>
      <a onClick={this.show.bind(this)}>Open Modal</a>
      <Modal
      className="test-class" //this will completely overwrite the default css completely
      style={{background: 'red'}} //overwrites the default background
      containerStyle={{background: 'blue'}} //changes styling on the inner content area
      containerClassName="test"
      closeOnOuterClick={true}
      show={this.state.show}
      onClose={this.close.bind(this)}>
 
      <a style={closeStyle} onClick={this.close.bind(this)}>X</a>
      <div>hey</div>
 
      </Modal>
      </div>
    )
  }
}
export default  App2