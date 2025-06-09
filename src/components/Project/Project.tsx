import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {/* RN Project */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/abdulmoeed949494/Rn-Project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                  href="https://www.rabnawaz.online"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>School management system</h3>
              <p>
                React JS, REST APIs, Tailwind CSS, Protected routes, SEO, custom
                Domain, Login/Signup, Admission form, Admin portal, fully
                responsive—all features developed professionally.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJS</li>
                <li>Mysql</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Olx Ecom */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/abdulmoeed949494/Olx-Ecom"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>OLX-style E-commerce</h3>
              <p>
                {" "}
                E-commerce app with OLX-style UI, features like add to cart, buy
                now, delete product, admin dashboard with order data and dynamic
                charts, login/signup, favorites page with saved items—all built
                for smooth user experience.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>ReactJS</li> <li>Tailwind CSS</li> <li>Chats</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        {/* firebase */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/abdulmoeed949494/redux"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />{" "}
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Firebase Auth System</h3>
              <p>
                Login and signup implemented using Firebase Authentication;
                works with email/password, handles user sessions securely, and
                stores user data in Realtime Database for easy access and
                management.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Firebase</li>
                <li>Real Time Database</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Redux */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/abdulmoeed949494/redux"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Redux State Management</h3>
              <p>
                Redux used for managing global state efficiently, improves data
                flow, simplifies component communication, and ensures consistent
                state handling across the entire app.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJS</li>
                <li>Redux</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Client Project */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links"></div>
            </header>
            <div className="body">
              <h3>Full-Stack Angular Project (Client-based, private)</h3>
              <p>
                Worked on fixing multiple complex issues across frontend and
                backend, including responsive layout problems, incorrect API
                data flow, chart rendering bugs, MongoDB data sorting, and
                multilingual support glitches. Ensured smooth functionality in
                both English and another language, improved overall user
                experience, and resolved various critical UI and backend-related
                bugs.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links"></div>
            </header>
            <div className="body">
              <h3>
                React and Next.js websites—frontend only, client-private
                projects.
              </h3>
              <p>
                Next.js with SQL APIs, fully responsive design, integrated
                EmailJS for email handling, and additional functionality
                improvements.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJS</li>
                <li>Tailwind CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
