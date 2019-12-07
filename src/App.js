import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Conversor from "./components/Conversor"


class MyButton extends Component{
  render(){
    return <button 
    onClick={() => {this.props.handleclick(this.props.label); }}
    >
      {this.props.label}
    </button>
  };
}

class MyLabel extends Component{
  render(){
    console.log(this.props)
  //parametros por componente, texto com parametro sem concatenar  
  return <p>Texto antes do parametro {this.props.text}</p>
  }
}

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      labelText: '',
    };
  }

  setLabelText = (labelText) => {
    this.setState({ labelText});
  }

  render(){
    console.log(this.state)
    return(
      <div className="App"> 

        <Conversor moedaA="CAD" moedaB="BRL"> </Conversor>

        <MyLabel text={this.state.labelText} />
        <MyButton handleclick={this.setLabelText} label="Botao 1"/>
        <MyLabel text={this.state.labelText}/>
        <MyButton handleclick={this.setLabelText} label="botao 2"/>
        <MyLabel text={this.state.labelText}/>
      </div>
    );
  }
}

export default App;
