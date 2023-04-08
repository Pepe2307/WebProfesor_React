import Cubroid from '../pdfs/Cubroid.pdf'
import Modal from "react-modal";
import Presentacion_3D_Pablo from '../pdfs/Presentacion_3D_Pablo.pdf';
import Presentacion_Robotica_Pablo from '../pdfs/Presentación_Robotica_Pablo.pdf';
import Scratch1 from '../pdfs/Scratch/Clase_1.pdf'
import Scratch2 from '../pdfs/Scratch/clase_2.pdf'
import Scratch3 from '../pdfs/Scratch/Clase_3.pdf'
import ScratchManual from '../pdfs/Scratch/Manual_Scratch.pdf'
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
        <div className="textWrap col-8 d-flex flex-column justify-content-center align-items-center m-4">
          <p className="tech">
            <em>{technologies}</em>
          </p>
          <h3 className="projectTitle">{title}</h3>
          <span className="viewWork">Ver Temario &#8594;</span>
        </div>
        <div className="imageContainer col-6 d-flex align-items-center justify-content-center">
          <img src={image} alt=" Img_Curso" />
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


        {/* 3D */}
        {id==1
        ?   
        <button className="btn"  type="button">
            <a href = {Presentacion_3D_Pablo} target="_blank">
                <button className="btn">Presentacion Diseño 3D</button>
            </a>
        </button>

        : 
        <div>
            {null}
        </div>
        }

        {/* ROBOTICA */}
        {id==2
        ?   
        <button className="btn"  type="button">
            <a href = {Presentacion_Robotica_Pablo} target="_blank">
                <button className="btn">Presentacion Robotica</button>
            </a>
        </button>

        : 
        <div>
            {null}
        </div>
        }

        {/* SCRATCH */}
        {id==3
        ?   
        <button className="btn"  type="button">
            <a href = {Scratch1} target="_blank">
                <button className="btn">SCRATCH CLASE 1</button>
            </a>
        </button>

        : 
        <div>
            {null}
        </div>
        }

        {id==3
        ?   
        <button className="btn"  type="button">
            <a href = {Scratch2} target="_blank">
                <button className="btn">SCRATCH CLASE 2</button>
            </a>
        </button>

        : 
        <div>
            {null}
        </div>
        }

        {id==3
        ?   
        <button className="btn"  type="button">
            <a href = {Scratch3} target="_blank">
                <button className="btn">SCRATCH CLASE 3</button>
            </a>
        </button>

        : 
        <div>
            {null}
        </div>
        }

        {id==3
        ?   
        <button className="btn"  type="button">
            <a href = {ScratchManual} target="_blank">
                <button className="btn">SCRATCH MATERIAL EXTRA</button>
            </a>
        </button>

        : 
        <div>
            {null}
        </div>
        }


        {/* CUBROID */}
        {id==4
        ?   
        <button className="btn"  type="button">
            <a href = {Cubroid} target="_blank">
                <button className="btn">Presentacion Cubroid</button>
            </a>
        </button>

        : 
        <div>
            {null}
        </div>
        }

        {/* DESARROLLO WEB */}
        {id==5
        ?   
        <button className="btn"  type="button">
            <a /* href = {} target="_blank" */>
                <button className="btn">Proximamente!</button>
            </a>
        </button>

        : 
        <div>
            {null}
        </div>
        }

        {/* Dentro de poco card */}
        {id==6
        ?   
        <button className="btn"  type="button">
            <a /* href = {} target="_blank" */>
                <button className="btn">Proximamente!</button>
            </a>
        </button>

        : 
        <div>
            {null}
        </div>
        }

      </Modal>
    </motion.div>
  );
};

export default Project;
