import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faServer, faCogs } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  return (
    <section id="skills" className="section-skills container mt-5 px-3">
      <p className=" fs-1 fw-bold text-white  text-center pt-5 m-0">Skills</p>
      <p className="description fs-5 pt-4 text-secondary text-center mx-auto">
        Mis habilidades están centradas en el desarrollo web, tanto en el
        frontend como en el backend. Siempre busco mejorar y aprender nuevas
        tecnologías.
      </p>
      <div className="mt-5 text-center px-3">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="skill-card text-center">
              <FontAwesomeIcon className="fs-3 icon" icon={faCode} />
              <h4 className="fs-3 fw-bold mt-2">Frontend</h4>
              <p className="fs-5  ">
                HTML - CSS - JavaScript - Typescript - React - Bootstrap - Tailwind - Next.js
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="skill-card text-center">
              <FontAwesomeIcon className="fs-3 icon" icon={faServer} />
              <h4 className="fs-3 fw-bold mt-2">Backend</h4>
              <p className="fs-5 ">Node.js - Express - MySQL - EJS</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="skill-card text-center">
              <FontAwesomeIcon className="fs-3 icon" icon={faCogs} />
              <h4 className="fs-3 fw-bold mt-2">Otros</h4>
              <p className="fs-5 ">Jira - Figma - Git - Postman </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
