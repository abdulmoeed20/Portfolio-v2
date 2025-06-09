import { Container } from "./styles";
// import reactIcon from '../../assets/react-icon.svg'
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
// import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a className="logo">
        <span>{"<Abdul "}</span>
        <span>{" Moeed/>"}</span>
      </a>
      <div>
        <p></p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/abdul-moeed-588426367/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/abdulmoeed949494/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=923340557294"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
      </div>
    </Container>
  );
}
