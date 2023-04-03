import Modal from "react-modal";
import Presentacion_3D_Pablo from '../pdfs/Presentación_Robotica_Pablo.pdf';
import closeModal from "../images/close.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Project = ({ technologies, title, image, color, id, deployed, description, deployed2 }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    hidden: { x: id % 2 === 0 ? "10vw" : "-10vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  Modal.setAppElement("#root");

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <motion.div
      ref={ref}
      className="col-sm-12 col-lg-6"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        style={{ backgroundColor: color }}
        className="projectCard d-flex align-items-center justify-content-center p-5"
        onClick={handleOpenModal}
      >
        <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5">
          <p className="tech">
            <em>{technologies}</em>
          </p>
          <h3 className="projectTitle">{title}</h3>
          <span className="viewWork">Ver Temario &#8594;</span>
        </div>
        <div className="imageContainer col-6 d-flex align-items-center justify-content-center">
          <img src={image} alt="Laptop displaying application" />
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            backgroundColor: "#101010",
            color: "#9f9f9f",
            padding: "60px",
            display: "flex",
            flexDirection: "column",
            width: "400px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            zIndex: "999",
          },
        }}
      >
        <img src={closeModal} className="closeMenu closeModal" onClick={handleCloseModal} alt="Close"></img>
        <h3 className="modalTitle">{title}</h3>
        <p className="projectDescription">{description}</p>




        <button className="btn"  type="button">
            <a href = {deployed} target="_blank">
                <button className="btn">Presentacion PDF!</button>
            </a>
        </button>


        {deployed2
        ?   <button className="btn"  type="button">
                <a href = {deployed} target="_blank">
                    <button className="btn">Ideas de proyectos!</button>
                </a>
            </button>

            : <div>
                {null}
              </div>
        }
        
        {/* Sacamos la URL */}
        {/* <button className="btn"  type="button">
            <a href = {Presentacion_3D_Pablo} target = "_blank">Download Pdf</a>
        </button> */}




        {/* <button className="btn" onClick={() => (window.location.href = deployed, '_blank')}>
          Presentacion PDF!
        </button> */}

        {/* <a href = {Presentacion_3D_Pablo} target = "_blank">Download Pdf</a> */}
        
        {/* <div className="buttonContainer">
            <a href = {deployed} target="_blank" rel="">
                <button className="btn">Web de la Municipalidad</button>
            </a>
        </div> */}
        
      </Modal>
    </motion.div>
  );
};

export default Project;
