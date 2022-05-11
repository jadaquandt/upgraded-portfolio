import { Container, Row, Col } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="footer-copywright">
         <p>Portfolio created using React by Jada Quandt</p>
        </Col>
        <Col className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/jadaquandt"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/jadaquandt"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/jadaquandt/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:jadaquandt@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MailOutlineIcon />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;