import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium from "radium";

class App extends Component {
    state = {
        persons: [
            { id: 1, name: "Max", age: 24 },
            { id: 2, name: "Sam", age: 22 },
            { id: 3, name: "jeff", age: 25 },
        ],
        showPerson: false,
    };

    deletePersonHandler = personIndex => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    onChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => p.id === id);
        console.log(personIndex);

        const person = {
            ...this.state.persons[personIndex],
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons,
        });
    };

    togglePersonHandler = () => {
        const toggler = this.state.showPerson;

        this.setState({ showPerson: !toggler });
    };

    render() {
        const style = {
            backgroundColor: "green",
            color: "white",
            font: "inherit",
            border: "3px solid blue",
            padding: "8px",
            cursor: "pointer",
            ":hover": {
                backgroundColor: "lightblue",
                color: "black",
            },
        };

        let persons = null;

        if (this.state.showPerson) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => (
                        <Person
                            key={person.id}
                            name={person.name}
                            age={person.age}
                            uponClick={() => this.deletePersonHandler(index)}
                            changeInput={event =>
                                this.onChangeHandler(event, person.id)
                            }
                        />
                    ))}
                </div>
            );
            style.backgroundColor = "grey";
            style[":hover"] = {
                backgroundColor: "gold",
                color: "black",
            };
        }

        return (
            <div className="App">
                <h1>Hi I am a React app</h1>
                <p>This is really working!</p>
                <button style={style} onClick={this.togglePersonHandler}>
                    Toggle Person
                </button>
                {persons}
            </div>
        );
    }
}

export default Radium(App);
