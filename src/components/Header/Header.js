import React from 'react'
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Container } from '@mui/material';

export default function Header() {
    return (
        <Container maxWidth="lg" className="intro-container d-flex flex-column align-items-center">
            <div className="d-flex align-items-start">
                <p className="m-1 pt-1 name-object">Jada Quandt</p>
                <div className="name-object">&#123;</div>
                <ul className='tagline-list'>
                    <li className="m-1">Software Engineer</li>
                    <li className="m-1"><a href="https://mywit.org/" rel="noreferrer" target="_blank">Women in Tech</a> Advocate/Volunteer</li>
                </ul>
                <div className="name-object">&#125;</div>
            </div>
            <div className="d-flex align-items-center">
                <Button href="/projects" variant="contained">Projects</Button>
                <Button href="/about" className="m-1" variant="contained">About</Button>
            </div>
            <div id="contact-container" class="text-center mt-3">
                <a className="m-1" href="mailto:jadaquandt@gmail.com"><MailOutlineIcon/></a>
                <a className="m-1" href="https://github.com/jadaquandt" rel="noreferrer" target="_blank"><GitHubIcon /></a>
                <a className="m-1" href="https://www.linkedin.com/in/jadaquandt/" rel="noreferrer" target="_blank"><LinkedInIcon/></a>
                <a className="m-1" href="https://twitter.com/jadaquandt" rel="noreferrer" target="_blank"><TwitterIcon/></a>
            </div>
        </Container>
    )
}
