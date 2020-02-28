import React, { Component } from "react";
import "./App.css";
import Persons from "../Components/Persons/Persons";
import Radium from "radium";
import Cockpit from "../Components/Cockpit/Cockpit";

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
        let persons = null;

        if (this.state.showPerson) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.onChangeHandler}
                    />
                </div>
            );
        }

        return (
            <div className="App">
                <Cockpit
                    title={this.props.title}
                    toggle={this.togglePersonHandler}
                    showPerson={this.state.showPerson}
                />
                {persons}
            </div>
        );
    }
}

export default Radium(App);
