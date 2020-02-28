import React from "react";
import Person from "../Persons/Person/Person";

const persons = props => {
    return props.persons.map((person, index) => (
        <Person
            key={person.id}
            name={person.name}
            age={person.age}
            uponClick={() => props.clicked(index)}
            changeInput={event => props.changed(event, person.id)}
        />
    ));
};

export default persons;
