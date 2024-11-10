import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCode,
   faServer,
   faShoppingCart,
   faCogs

} from "@fortawesome/free-solid-svg-icons";



export default function About() {
  return (
    <section className="section-about container mt-5 px-3">
      <h2 id="about" className="fs-1 fw-bold text-white text-center pt-5 m-0">
        About Me
      </h2>
      <p className="description fs-5 pt-4 text-secondary text-center mx-auto">
      Soy desarrollador web con experiencia en front-end y back-end, siempre en la búsqueda de aprender y mejorar. Me apasiona la tecnología y disfruto creando soluciones eficientes y fáciles de usar. Mi enfoque está en ofrecer un trabajo de calidad, manteniendo un aprendizaje constante.
      </p>
      <p className="section-quehago text-center  fs-3 fw-bold mt-5  ">
        ¿Que hago?
      </p>
      <div className="mt-5 text-center  mt-6">
  <div className="row g-4">
    <div className="col-12 col-md-6">
      <div className="d-flex gap-3">
        <div className="icono">
          <FontAwesomeIcon className="fs-2  " icon={faCode} />
        </div>
        <div className="text-start text-white">
          <h4 className="fs-4 fw-bold">Desarrollo Frontend</h4>
          <p className="fs-6 text-secondary">
          Diseño y desarrollo interfaces web responsivas usando tecnologías como React y TypeScript          </p>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-6">
      <div className="d-flex gap-3">
        <div className="icono">
          <FontAwesomeIcon className="fs-2  " icon={faServer} />
        </div>
        <div className="text-start text-white">
          <h4 className="fs-4 fw-bold">Desarrollo Backend</h4>
          <p className="fs-6 text-secondary">
          Creación de APIs RESTful con Node.js y Express, optimización de bases de datos SQL y NoSQL          </p>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-6">
      <div className="d-flex gap-3">
        <div className="icono">
          <FontAwesomeIcon className="fs-2  " icon={faShoppingCart} />
        </div>
        <div className="text-start text-white">
          <h4 className="fs-4 fw-bold">E-commerce</h4>
          <p className="fs-6 text-secondary">
          Desarrollo tiendas online, enfocándome en la gestión de productos, carrito de compras y registro de usuarios para ofrecer una experiencia de compra sencilla y eficiente.          </p>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-6">
      <div className="d-flex gap-3">
        <div className="icono">
          <FontAwesomeIcon className="fs-2  " icon={faCogs} />
        </div>
        <div className="text-start text-white">
          <h4 className="fs-4 fw-bold">Web Scraping</h4>
          <p className="fs-6 text-secondary">
          Extracción de datos de páginas web y creación de scripts para automatizar tareas de recopilación de información          </p>
        </div>
      </div>
    </div>
  </div>
</div>


    </section>
  );
}
