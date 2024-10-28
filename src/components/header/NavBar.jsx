import  { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import LinksBar from "./LinksBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Modalburguer({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
       
      </Modal.Header>
      <Modal.Body>
       


      </Modal.Body>
      
    </Modal>
  );
}

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="header-navbar">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="container-logo">
          <a href="/" className="logo-link">
            <h2 className="logo m-0">
              <span className="text-white">&lt;</span>
              <span className="text-white">AM</span>
              <span className="logo-color">DEV</span>
              <span className="text-white">&gt;</span>
            </h2>
          </a>
        </div>
        <nav className="container-links">
          <ul className="d-flex gap-4 ul-navbar">
            <LinksBar tag="/about" text="About" />
            <LinksBar tag="/projects" text="Projects" />
            <LinksBar tag="/skills" text="Skills" />
            <LinksBar tag="/contact" text="Contact" />
          </ul>
        </nav>
        <div className="container-boton">
          <a className="boton-navbar px-4 py-2" href="/cv">
            Download CV
          </a>
        </div>
        <div className="boton-hamburger px-3">
          <a className="text-white fs-1" onClick={handleShow}>
            <FontAwesomeIcon icon={faBars} />
          </a>
          <Modalburguer show={show} handleClose={handleClose} />
        </div>
      </div>
    </header>
  );
}

export default NavBar;