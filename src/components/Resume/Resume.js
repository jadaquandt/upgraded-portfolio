import React from 'react'

export default function Resume() {
    return (
        <>
            <h3>Resume</h3>
            <div id="skills-section" className="text-center">
                <i className="skills devicon-angularjs-plain" alt="Angular 12"></i>
                <i className="skills devicon-react-original-wordmark" alt="React"></i>
                <i className="skills devicon-ionic-original-wordmark" alt="Ionic"></i>
                <i className="skills devicon-javascript-plain" alt="JavaScript"></i>
                <i className="skills devicon-typescript-plain" alt="Typescript"></i>
                <i className="skills devicon-java-plain-wordmark" alt="Java"></i>
                <i className="skills devicon-nodejs-plain-wordmark" alt="Node"></i>
                <i className="skills devicon-npm-original-wordmark" alt="NPM"></i>
                <i className="skills devicon-heroku-original-wordmark" alt="Heroku"></i>
                <i className="skills devicon-postgresql-plain-wordmark" alt="Postgresql"></i>
            </div>

            <div>
                <div id="timeline">
                    <ul className="custom-ul">
                        <li>
                            Current Position: Software Engineer Consultant at
                            <a className='employer-link' href="https://www.daugherty.com/" target="_blank" rel="noopener noreferrer">Daugherty
                                Business Solutions</a>
                        </li>
                        <li>
                            Volunteer Project Manager for
                            <a className='employer-link'href="https://mywit.org/" rel="noreferrer"  target="_blank">WIT Girls</a>
                        </li>
                        <br />
                        <li>
                            December 2020 - Software Development Apprentice at Clearly Innovative
                        </li>
                        <li>October 2020 - Teaching Assistant for DigitalCrafts Atlanta</li>
                        <li>September 2020 - Software Development Intern at Timbergrove</li>
                        <li>July 2020 - Full Stack Bootcamp Graduation</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
