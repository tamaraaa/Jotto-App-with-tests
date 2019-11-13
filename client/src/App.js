import React, {Component} from "react";
import { connect } from 'react-redux'
import "./App.css";

import { getSecretWord } from './actions'
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import Input from "./Input";

export class _App extends Component {
  componentDidMount(){
    this.props.getSecretWord()
  }
  render(){
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords
          guessedWords={this.props.guessedWords}
        />
      </div>
    );
  }
  
};

const mapStateToProps = state =>{
    const { success, secretWord, guessedWords } = state;
    return { success, secretWord, guessedWords }
}
export default connect(mapStateToProps, { getSecretWord })(_App);
