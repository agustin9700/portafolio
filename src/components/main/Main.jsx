import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import fotoPerfil from "../../../public/foto-perfil2.jpg";


function Main() {
  return (
    <main className="main">
      <section className="container home">
        <div className="d-flex justify-content-between py-5 w-100 gap-5 conteiner-principal ">
          <div className="text-section text-white w-100">
            <h2>
              Hola, soy <span className="highlight">Agustín Montero</span>
            </h2>
            <h1>Desarrollador Web Full Stack</h1>
            <span>
              Soy un desarrollador web argentino, comprometido en ofrecer sitios
              adaptables con el diseño que desees.
            </span>
            <div className=" d-flex">
              <a className="contact-button px-4 py-2" href="/">
                CONTACTAME
              </a>
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-around w-100
           gap-2 tarjeta "
          >
            <div className="w-100 h-100 p-1 container-card">
              
                <figure className="figure">
                  <img src={fotoPerfil} alt="" />
                </figure>
                
              
            </div>
            <div className="w-25 h-100 d-flex flex-column gap-3 justify-content-end container-social">
              <a className="social-git" href="">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a className="social-linkedin" href="">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            
              <a className="social-whatsapp" href="">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
