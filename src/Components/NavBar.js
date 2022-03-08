import React from 'react'
import propTypes from 'prop-types'

export default function NavBar(probs) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{probs.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{probs.link_1}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{probs.link_2}</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

// to set the proptypes to eliminate errors
NavBar.propTypes = {
    title: propTypes.string,
    link_1: propTypes.string,
    link_2: propTypes.string
}

// to set the default arguments for the function or the component
NavBar.defaultProps = {
    title: "Title",
    link_1: "link_1",
    link_2: "link_2"
}