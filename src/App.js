import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            { name: "Max", age: 24 },
            { name: "Sam", age: 22 },
            { name: "jeff", age: 25 },
        ],
    };

    switchNameHandler = newName => {
        this.setState({
            persons: [
                { name: newName, age: 24 },
                { name: "Sam", age: 22 },
                { name: "jeff", age: 23 },
            ],
        });
    };

    onChangeHandler = event => {
        this.setState({
            persons: [
                { name: "Max", age: 24 },
                { name: event.target.value, age: 22 },
                { name: "jeff", age: 23 },
            ],
        });
    };

    render() {
        const style = {
            backgroundColor: "white",
            font: "inherit",
            border: "1x solid blue",
            padding: "8px",
        };

        return (
            <div className="App">
                <button
                    style={style}
                    onClick={() => this.switchNameHandler("Maxinen!!!!!!!!")}
                >
                    Switch Names
                </button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    uponClick={this.switchNameHandler.bind(this, "Maxinen!!!!")}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    changeInput={this.onChangeHandler}
                >
                    Hobbie: reading
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
            </div>
        );
    }
}

export default App;
