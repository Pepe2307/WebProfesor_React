import ColegioM from "../../images/colegio-maximo-san-miguel.jpg"
import ContactInfo from "../../components/ContactInfo";
import Form from "../../components/Form";
import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";

const Contact = ({ name, email, location }) => {
  return (
    <section className="contact">
      <PageHeader title="Contacto" description="Ponete en contacto!" />
      <div className="contactWrap container">
        <div className="row">

            <div className="col-12 col-lg-6">
                <ContactInfo name={name} location={location} email={email} />
            </div>
          
            <div className="col-12 col-lg-6">
                {/* <Form/> */}
                <div className="image-container">
                    <img src={ColegioM} className="App-logo" alt="logo"
                    /* style={{border-radius 50% 20% / 10% 40%;}}
                    style={{color: "red", }} */
                    style={{borderRadius: '50px'}}
                    />
                </div>
            </div>

            {/* <div className="col-12 formGroup formSubmit">
                <button className="btn">{success ? "Message Sent" : "Send Message"} Contacto </button>
            </div> */}

            
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Contact;
