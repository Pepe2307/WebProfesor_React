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
                <Form/>
            </div>

            
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Contact;
