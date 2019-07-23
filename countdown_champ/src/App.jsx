import React, { Component } from 'react';
import Clock from "./Clock";
import './App.css';
import { Form, Form}

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            deadline : 'November 24, 2019',
            newDeadline: ''
        }
    }

    changeDeadline(){
        this.setState({deadline: this.state.newDeadline});
    }

    render() {
        return(
            <div className="App">
                <div className="App-title">
                    Countdown to {this.state.deadline}
                </div>
                <Clock
                    deadline = {this.state.deadline} 
                />
                <div>
                    <input placeholder="New Date" onChange={event => this.setState({newDeadline : event.target.value})}/>
                    <button onClick={() => {this.changeDeadline();}}>Submit</button>
                </div>
            </div>
        )
    }
}

export default App;