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
                                <img src={`${process.env.PUBLIC_URL}/aboutme.png`} alt="Me" className="img-fluid" title="Dev Sharma" style={{
                                    filter: `drop-shadow(2px 4px 6px ${props.mode === "light" ? "black" : "#f5deb3"})`
                                }} />
                            </figure>
                        </div>
                        <div className="col-md-6 col-12 main_header_left" style={{ color: props.mode === "light" ? "black" : "#f5deb3" }}>
                            <p>Welcome to Text Formatter app</p>
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