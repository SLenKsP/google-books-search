import React from "react";

export const List = ({ children }) => {
  return <ul className="list-group">{children}</ul>;
};

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
