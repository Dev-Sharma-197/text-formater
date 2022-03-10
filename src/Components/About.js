import React from 'react'
import { Link } from 'react-router-dom'

export default function About(props) {
    return (
        <div className="container-fluid main_header">
            <div className="row">
                <div className="col-md-10 col-12 mx-auto">
                    <div className="row">
                        <div className="col-md-6 col-12  main_header_right">
                            <figure>
                                <img src="/about.png" alt="Me" className="img-fluid" title="Dev Sharma" />
                            </figure>
                        </div>
                        <div className="col-md-6 col-12 main_header_left">
                            <p>Welcome to Weather app</p>
                            <h1>
                                I am a <span className="text_clr">Full Stack Developer</span> and Trader.
                            </h1>
                            <Link to="https://github.com/Dev-Sharma-197" target="_black"><button>About Me</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}