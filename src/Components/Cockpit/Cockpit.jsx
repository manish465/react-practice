import React from "react";

const cockpit = props => {
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

    if (props.showPerson) {
        style.backgroundColor = "grey";
        style[":hover"] = {
            backgroundColor: "gold",
            color: "black",
        };
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p>This is really working!</p>
            <button style={style} onClick={props.toggle}>
                Toggle Person
            </button>
        </div>
    );
};

export default cockpit;
