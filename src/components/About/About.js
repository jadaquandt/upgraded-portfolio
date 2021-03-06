import React from 'react'

export default function About() {
    return (
        <div>
            <div id="about-section">
                <h1 id="section-intro">About Me</h1>
                <p id="about-text">
                    I am a former executive assistant with a bachelor's degree in Journalism
                    who found her way to Software Engineering in 2020. I have a rescue dog
                    named Fancy and a musician husband named Josh.
                </p>
                <div className="family-photo">
                    <img id="family" className="d-flex" src="/Portfolio-Files/jada_family.JPG" alt="" />
                </div>
            </div>
        </div>
    )
}
