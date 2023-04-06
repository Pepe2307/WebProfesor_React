import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactInfo = ({ name, email, location }) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <motion.div
      className="contactInfo"
      ref={ref}
      initial={{ x: "10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <h4 className="contentTitle">Informacion de contacto</h4>
      <p className="infoDescription">Ponete en contacto con nosotros si queres venir a nuestros cursos!</p>
      <ul className="listInfo">
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
              <i className="icon fa-solid fa-user"></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">Capacitaciones Digitales</h6>
              {/* <span className="infoValue">{name}</span> */}
            </div>
          </div>
        </li>
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
              <i className="icon fa-solid fa-location-pin "></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">Colegio Maximo/Punto Digital, San Miguel</h6>
              {/* <span className="infoValue">{location}</span> */}
            </div>
          </div>
        </li>
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
              <i className="icon fa-solid fa-envelope "></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">municipalidad@ejemplo</h6>
              {/* <span className="infoValue">
                <a href={`mailto:${email}`}>{email}</a>
              </span> */}
            </div>
          </div>
        </li>

        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
              <i className="icon fa-solid fa-laptop-code"></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">Web Desarrolada por Pablo Paez</h6>
              <span className="infoValue">Contacto: pablopaez2307@gmail.com</span>
            </div>
          </div>
        </li>

      </ul>
    </motion.div>
  );
};

export default ContactInfo;
