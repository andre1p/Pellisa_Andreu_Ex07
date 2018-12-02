import React, { Component } from 'react'

export default class Chat extends Component {
  render() {
    return (
      <div className="Chat">
        <div className="leftMessage">
          Hola que tal holahola hola hola hola hola hola hola hola hola hola hola hola holahola hola hola hola hola hola hola hola hola hola hola hola hola
          <div className="nameLeft">
            Flappy
          </div>
        </div>
        <div className="rightMessage">
          Hola que tal hola hola hola hola hola hola hola hola hola hola hola hola holahola hola hola hola hola hola hola hola hola hola hola hola hola
          <div className="nameRight">
            Bird
          </div>
        </div>
        
        <div className="Send">
          <div className="textBox">
            <input></input>
          </div>
          <button className="buttonSend"> Send </button>
        </div>
      </div>
    )
  }
}
