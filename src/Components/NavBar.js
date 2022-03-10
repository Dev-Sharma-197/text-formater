import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={{ backgroundColor: props.mode === "light" ? "#ccd8ef" : "#2a2a2a" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{props.link_1}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.link_2}</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-dark`} >
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" style={{ color: props.mode === "light" ? "black" : "white " }} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

// to set the proptypes to eliminate errors
NavBar.propTypes = {
    title: propTypes.string,
    link_1: propTypes.string,
    link_2: propTypes.string,
    mode: propTypes.string,
    toggleMode: propTypes.func
}

// to set the default arguments for the function or the component
NavBar.defaultProps = {
    title: "Title",
    link_1: "link_1",
    link_2: "link_2"
}