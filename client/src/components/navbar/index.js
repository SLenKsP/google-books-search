import React, { Component } from "react";
import { Link } from "react-router-dom";

class navBar extends Component {
    state = {
        open: false,
        width: window.innerWidth
    };

    updateWidth = () => {
        const newState = { width: window.innerWidth };
        if (this.state.open && newState.width > 960)
        {
            newState.open = false
        }
        this.setState(newState);
    };

    toggleNavBar = () => {
        this.setState({ open: !this.state.open })
    };

    componentDidMount () {
        window.addEventListener(`resize`, this.updateWidth)
    };

    componentWillUnmount () {
        window.removeEventListener(`resize`, this.updateWidth)
    };

    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-1">
                <Link className="navbar-brand" to="/">
                    Google Books Search
                </Link>
                <button
                    onClick={ this.toggleNavBar }
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    area-expanded="false"
                    area-label="Toggle Navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className={ `${ this.state.open ? "" : "collapse " }navbar-collapse` } id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                onClick={ this.toggleNavBar }
                                className={ window.location.pathname === "/" ? "nav-link active" : "nav-link" }
                                to="/"
                            >
                                Search
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                onClick={ this.toggleNavBar }
                                className={ window.location.pathname === "/saved" ? "nav-link active" : "nav-link" }
                                to="/saved"
                            >
                                Saved
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
};

export default navBar;