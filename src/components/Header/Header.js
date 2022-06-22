import React from 'react'
import { Button } from 'react-bootstrap'

export default function Header() {
    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-start">
                <p className="m-1">Jada Quandt</p>
                <p className="m-1">Software Engineer</p>
                <p className="m-1"><a href="https://mywit.org/" rel="noreferrer" target="_blank">Women in Tech</a> Advocate/Volunteer</p>
            </div>
            <div className="d-flex align-items-center">
                <Button className="m-1" variant="primary">Projects</Button>
                <Button className="m-1" variant="secondary">About</Button>
            </div>
            <div id="contact-container" class="text-center mt-3">
                {/* <hr /> */}
                <a className="m-1" href="mailto:jadaquandt@gmail.com">Email</a>
                <a className="m-1" href="https://github.com/jadaquandt" rel="noreferrer" target="_blank">Github</a>
                <a className="m-1" href="https://www.linkedin.com/in/jadaquandt/" rel="noreferrer" target="_blank">LinkedIn</a>
                <a className="m-1" href="https://twitter.com/jadaquandt" rel="noreferrer" target="_blank">Twitter</a>
            </div>
        </div>
    )
}
