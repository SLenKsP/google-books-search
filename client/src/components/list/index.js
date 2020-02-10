import React from "react";

export const List = ({ child }) => {
    return (
        <ul className="list-group">
            { child }
        </ul>
    )
};

export function ListItem ({ child }) {
    return <li className="list-group-item" >{ child }</li>
};

